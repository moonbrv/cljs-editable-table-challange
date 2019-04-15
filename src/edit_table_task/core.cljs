(ns ^:figwheel-hooks edit-table-task.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

;; ----- UTILS -----

;; ----- MODEL -----
(def initial-state-model {:headers {:company-header ""
                                    :income-header ""}
                          :table-values {"369deaef-c6ee-4836-9f74-e9593233abc8" {:company "Ace"
                                                                                 :income 42}
                                         "072da7c1-f5a6-4dee-bd2f-ab29b7273410" {:company "Acme"
                                                                                 :income 7}
                                         "419fe665-625a-4857-a1b8-cf1ebf287944" {:company "Evil"
                                                                                 :income 28}}
                          :uploaded true
                          :error false})

(defonce app-state (atom initial-state-model))

;; ----- VIEWS -----
(rum/defc app-root < rum/reactive []
  [:section.section
   [:h1.title "App content"]
   [:div.container [:pre (str (rum/react app-state))]]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app-root) el)))

(defn ^:after-load on-reload []
  (mount-app-element)
)
