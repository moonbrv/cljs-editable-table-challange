(ns ^:figwheel-hooks edit-table-task.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

;; ----- UTILS -----

;; ----- MODEL -----
(defonce app-state (atom {:text "App state"}))

;; ----- VIEWS -----
(rum/defc app-root []
  [:div
   [:h1.title "App content"]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rum/mount (app-root) el)))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
)
