// Compiled by ClojureScript 1.10.339 {}
goog.provide('edit_table_task.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('rum.core');
cljs.core.println.call(null,"This text is printed from src/edit_table_task/core.cljs. Go ahead and edit it and see reloading in action.");
edit_table_task.core.multiply = (function edit_table_task$core$multiply(a,b){
return (a * b);
});
if((typeof edit_table_task !== 'undefined') && (typeof edit_table_task.core !== 'undefined') && (typeof edit_table_task.core.app_state !== 'undefined')){
} else {
edit_table_task.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
edit_table_task.core.get_app_element = (function edit_table_task$core$get_app_element(){
return goog.dom.getElement("app");
});
edit_table_task.core.hello_world = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,(function (){var attrs10717 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edit_table_task.core.app_state));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs10717))?sablono.interpreter.attributes.call(null,attrs10717):null),((cljs.core.map_QMARK_.call(null,attrs10717))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10717)], null)));
})(),React.createElement("h3",null,"Edit this in src/edit_table_task/core.cljs and watch it change!"));
}),null,"hello-world");
edit_table_task.core.mount = (function edit_table_task$core$mount(el){
return rum.core.mount.call(null,edit_table_task.core.hello_world.call(null),el);
});
edit_table_task.core.mount_app_element = (function edit_table_task$core$mount_app_element(){
var temp__5457__auto__ = edit_table_task.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return edit_table_task.core.mount.call(null,el);
} else {
return null;
}
});
edit_table_task.core.mount_app_element.call(null);
edit_table_task.core.on_reload = (function edit_table_task$core$on_reload(){
return edit_table_task.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
