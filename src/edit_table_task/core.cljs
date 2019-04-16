(ns ^:figwheel-hooks edit-table-task.core
  (:require
    [goog.dom :as gdom]
    [rum.core :as rum]))

;; ----- UTILS -----

;; ----- MODEL -----
(def initial-state-model {:table-headers {:company-header "Company"
                                          :income-header "Income"}
                          :table-values {"369deaef-c6ee-4836-9f74-e9593233abc8" {:company "Ace"
                                                                                 :income 42}
                                         "072da7c1-f5a6-4dee-bd2f-ab29b7273410" {:company "Acme"
                                                                                 :income 7}
                                         "419fe665-625a-4857-a1b8-cf1ebf287944" {:company "Evil"
                                                                                 :income 28}}
                          :uploaded true
                          :error false})

(defonce state (atom initial-state-model))

;; ----- VIEWS -----
(rum/defc table-input [value type change-handler]
  [:input {:value value
           :type type
           :on-change change-handler}])


(rum/defc table-row [row-data]
  (let [data-key (get row-data 0)
        data (get row-data 1)]
    [:tr
     [:td (table-input
            (:company data)
            "text"
            (fn [e]
              (swap! state assoc-in [:table-values data-key :company]
                     (.. e -target -value))))]
     [:td (table-input
            (:income data)
            "number"
            (fn [e]
              (swap! state assoc-in [:table-values data-key :income]
                     (js/Number (.. e -target -value)))))]]))

(rum/defc editable-table < rum/reactive  []
  (let [headers (vec (:table-headers (rum/react state)))
        table-data (vec (:table-values (rum/react state)))
        total-sum (reduce (fn [acc n]
                            (+ acc (get-in n [1 :income] 0)))
                          0 table-data)]
    [:table.table
     [:thead [:tr
              (for [column-header headers]
                (let [header-key (get column-header 0)
                      title (get column-header 1)]
                  [:th {:key (name header-key)}
                   (table-input title "text" (fn [e]
                                               (swap! state assoc-in
                                                      [:table-headers header-key]
                                                      (.. e -target -value))))]))]]
     [:tbody (for [row-data table-data]
               (rum/with-key (table-row row-data) (get row-data 0)))]
     [:tfoot [:tr [:td "Total"] [:td total-sum]]]]))

(rum/defc app-root < rum/reactive []
  [:section.section
   [:h1.title "App content"]
   [:div.container [:pre (str (rum/react state))]]
   (editable-table)])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app-root) el)))

(defn ^:after-load on-reload []
  (mount-app-element))
