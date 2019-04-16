(ns ^:figwheel-hooks edit-table-task.core
  (:require
    [goog.dom :as gdom]
    [goog.labs.format.csv :as csv]
    [rum.core :as rum]
    [cljs.core.async :refer [chan <! put!]]
    [cljs.core.async :refer-macros [go go-loop alt!]]))

;; ----- UTILS -----

;; ----- MODEL -----
(comment
  (def state-example {:table-headers {:company-header "Company"
                                      :income-header "Income"}
                      :table-values {"369deaef-c6ee-4836-9f74-e9593233abc8" {:company "Ace"
                                                                             :income 42}
                                     "072da7c1-f5a6-4dee-bd2f-ab29b7273410" {:company "Acme"
                                                                             :income 72}
                                     "419fe665-625a-4857-a1b8-cf1ebf287944" {:company "Evil"
                                                                             :income 28}}
                      :uploaded true
                      :error false}))

(defonce state (atom {:table-headers {:company-header ""
                                      :income-header ""}
                      :table-values {}
                      :uploaded false
                      :error false}))

(def first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
           (set! (.-value target) "")
           file))))

(def extract-result
  (map #(-> % .-target .-result csv/parse js->clj)))

(def upload-reqs (chan 1 first-file))
(def file-reads (chan 1 extract-result))

(defn put-upload [e]
  (put! upload-reqs e))

(go-loop []
         (let [reader (js/FileReader.)
               file (<! upload-reqs)]
           (set! (.-onload reader) #(put! file-reads %))
           (.readAsText reader file)
           (recur)))

(go-loop []
         (let [res (<! file-reads)
               headers (first res)
               body (rest res)
               table-values (reduce
                              (fn [acc row]
                                (assoc acc (str (random-uuid))
                                           {:company (get row 0)
                                            :income (js/Number (get row 1))}))
                              {} body)
               state-update {:table-headers {:company-header (get headers 0)
                                             :income-header (get headers 1)}
                             :table-values table-values
                             :uploaded true
                             :error false}]
           (swap! state merge state-update))
         (recur))

;; ----- VIEWS -----
(rum/defc upload-button []
  [:input.button {:type "file"
                  :accept ".csv"
                  :on-change put-upload}])

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
   [:div.container
    (upload-button)
    (editable-table)]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app-root) el)))

(defn ^:after-load on-reload []
  (mount-app-element))
