// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__10540 = cljs.core.seq.call(null,props);
var chunk__10542 = null;
var count__10543 = (0);
var i__10544 = (0);
while(true){
if((i__10544 < count__10543)){
var vec__10546 = cljs.core._nth.call(null,chunk__10542,i__10544);
var k = cljs.core.nth.call(null,vec__10546,(0),null);
var v = cljs.core.nth.call(null,vec__10546,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__10552 = seq__10540;
var G__10553 = chunk__10542;
var G__10554 = count__10543;
var G__10555 = (i__10544 + (1));
seq__10540 = G__10552;
chunk__10542 = G__10553;
count__10543 = G__10554;
i__10544 = G__10555;
continue;
} else {
var G__10556 = seq__10540;
var G__10557 = chunk__10542;
var G__10558 = count__10543;
var G__10559 = (i__10544 + (1));
seq__10540 = G__10556;
chunk__10542 = G__10557;
count__10543 = G__10558;
i__10544 = G__10559;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10540);
if(temp__5457__auto__){
var seq__10540__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10540__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10540__$1);
var G__10560 = cljs.core.chunk_rest.call(null,seq__10540__$1);
var G__10561 = c__4351__auto__;
var G__10562 = cljs.core.count.call(null,c__4351__auto__);
var G__10563 = (0);
seq__10540 = G__10560;
chunk__10542 = G__10561;
count__10543 = G__10562;
i__10544 = G__10563;
continue;
} else {
var vec__10549 = cljs.core.first.call(null,seq__10540__$1);
var k = cljs.core.nth.call(null,vec__10549,(0),null);
var v = cljs.core.nth.call(null,vec__10549,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__10564 = cljs.core.next.call(null,seq__10540__$1);
var G__10565 = null;
var G__10566 = (0);
var G__10567 = (0);
seq__10540 = G__10564;
chunk__10542 = G__10565;
count__10543 = G__10566;
i__10544 = G__10567;
continue;
} else {
var G__10568 = cljs.core.next.call(null,seq__10540__$1);
var G__10569 = null;
var G__10570 = (0);
var G__10571 = (0);
seq__10540 = G__10568;
chunk__10542 = G__10569;
count__10543 = G__10570;
i__10544 = G__10571;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__10573_SHARP_,p2__10572_SHARP_){
return p2__10572_SHARP_.call(null,p1__10573_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__10575_SHARP_,p2__10574_SHARP_){
return p2__10574_SHARP_.call(null,old_state,p1__10575_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__10576_SHARP_){
return p1__10576_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__10578 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__10578,(0),null);
var next_state = cljs.core.nth.call(null,vec__10578,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__10577_SHARP_){
return p1__10577_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__10581__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__10581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10582__i = 0, G__10582__a = new Array(arguments.length -  0);
while (G__10582__i < G__10582__a.length) {G__10582__a[G__10582__i] = arguments[G__10582__i + 0]; ++G__10582__i;}
  args = new cljs.core.IndexedSeq(G__10582__a,0,null);
} 
return G__10581__delegate.call(this,args);};
G__10581.cljs$lang$maxFixedArity = 0;
G__10581.cljs$lang$applyTo = (function (arglist__10583){
var args = cljs.core.seq(arglist__10583);
return G__10581__delegate(args);
});
G__10581.cljs$core$IFn$_invoke$arity$variadic = G__10581__delegate;
return G__10581;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__10584__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__10584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10585__i = 0, G__10585__a = new Array(arguments.length -  0);
while (G__10585__i < G__10585__a.length) {G__10585__a[G__10585__i] = arguments[G__10585__i + 0]; ++G__10585__i;}
  args = new cljs.core.IndexedSeq(G__10585__a,0,null);
} 
return G__10584__delegate.call(this,args);};
G__10584.cljs$lang$maxFixedArity = 0;
G__10584.cljs$lang$applyTo = (function (arglist__10586){
var args = cljs.core.seq(arglist__10586);
return G__10584__delegate(args);
});
G__10584.cljs$core$IFn$_invoke$arity$variadic = G__10584__delegate;
return G__10584;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__10587__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__10587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10588__i = 0, G__10588__a = new Array(arguments.length -  0);
while (G__10588__i < G__10588__a.length) {G__10588__a[G__10588__i] = arguments[G__10588__i + 0]; ++G__10588__i;}
  args = new cljs.core.IndexedSeq(G__10588__a,0,null);
} 
return G__10587__delegate.call(this,args);};
G__10587.cljs$lang$maxFixedArity = 0;
G__10587.cljs$lang$applyTo = (function (arglist__10589){
var args = cljs.core.seq(arglist__10589);
return G__10587__delegate(args);
});
G__10587.cljs$core$IFn$_invoke$arity$variadic = G__10587__delegate;
return G__10587;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__10590_SHARP_){
return setTimeout(p1__10590_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__10591 = cljs.core.seq.call(null,queue);
var chunk__10593 = null;
var count__10594 = (0);
var i__10595 = (0);
while(true){
if((i__10595 < count__10594)){
var comp = cljs.core._nth.call(null,chunk__10593,i__10595);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__10597 = seq__10591;
var G__10598 = chunk__10593;
var G__10599 = count__10594;
var G__10600 = (i__10595 + (1));
seq__10591 = G__10597;
chunk__10593 = G__10598;
count__10594 = G__10599;
i__10595 = G__10600;
continue;
} else {
var G__10601 = seq__10591;
var G__10602 = chunk__10593;
var G__10603 = count__10594;
var G__10604 = (i__10595 + (1));
seq__10591 = G__10601;
chunk__10593 = G__10602;
count__10594 = G__10603;
i__10595 = G__10604;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10591);
if(temp__5457__auto__){
var seq__10591__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10591__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10591__$1);
var G__10605 = cljs.core.chunk_rest.call(null,seq__10591__$1);
var G__10606 = c__4351__auto__;
var G__10607 = cljs.core.count.call(null,c__4351__auto__);
var G__10608 = (0);
seq__10591 = G__10605;
chunk__10593 = G__10606;
count__10594 = G__10607;
i__10595 = G__10608;
continue;
} else {
var comp = cljs.core.first.call(null,seq__10591__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__10609 = cljs.core.next.call(null,seq__10591__$1);
var G__10610 = null;
var G__10611 = (0);
var G__10612 = (0);
seq__10591 = G__10609;
chunk__10593 = G__10610;
count__10594 = G__10611;
i__10595 = G__10612;
continue;
} else {
var G__10613 = cljs.core.next.call(null,seq__10591__$1);
var G__10614 = null;
var G__10615 = (0);
var G__10616 = (0);
seq__10591 = G__10613;
chunk__10593 = G__10614;
count__10594 = G__10615;
i__10595 = G__10616;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__10618 = arguments.length;
switch (G__10618) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_10620 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__10621 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__10621,(0),null);
var next_state = cljs.core.nth.call(null,vec__10621,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__10624_10636 = cljs.core.seq.call(null,old_reactions);
var chunk__10625_10637 = null;
var count__10626_10638 = (0);
var i__10627_10639 = (0);
while(true){
if((i__10627_10639 < count__10626_10638)){
var ref_10640 = cljs.core._nth.call(null,chunk__10625_10637,i__10627_10639);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_10640)){
} else {
cljs.core.remove_watch.call(null,ref_10640,key);
}


var G__10641 = seq__10624_10636;
var G__10642 = chunk__10625_10637;
var G__10643 = count__10626_10638;
var G__10644 = (i__10627_10639 + (1));
seq__10624_10636 = G__10641;
chunk__10625_10637 = G__10642;
count__10626_10638 = G__10643;
i__10627_10639 = G__10644;
continue;
} else {
var temp__5457__auto___10645 = cljs.core.seq.call(null,seq__10624_10636);
if(temp__5457__auto___10645){
var seq__10624_10646__$1 = temp__5457__auto___10645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10624_10646__$1)){
var c__4351__auto___10647 = cljs.core.chunk_first.call(null,seq__10624_10646__$1);
var G__10648 = cljs.core.chunk_rest.call(null,seq__10624_10646__$1);
var G__10649 = c__4351__auto___10647;
var G__10650 = cljs.core.count.call(null,c__4351__auto___10647);
var G__10651 = (0);
seq__10624_10636 = G__10648;
chunk__10625_10637 = G__10649;
count__10626_10638 = G__10650;
i__10627_10639 = G__10651;
continue;
} else {
var ref_10652 = cljs.core.first.call(null,seq__10624_10646__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_10652)){
} else {
cljs.core.remove_watch.call(null,ref_10652,key);
}


var G__10653 = cljs.core.next.call(null,seq__10624_10646__$1);
var G__10654 = null;
var G__10655 = (0);
var G__10656 = (0);
seq__10624_10636 = G__10653;
chunk__10625_10637 = G__10654;
count__10626_10638 = G__10655;
i__10627_10639 = G__10656;
continue;
}
} else {
}
}
break;
}

var seq__10628_10657 = cljs.core.seq.call(null,new_reactions);
var chunk__10629_10658 = null;
var count__10630_10659 = (0);
var i__10631_10660 = (0);
while(true){
if((i__10631_10660 < count__10630_10659)){
var ref_10661 = cljs.core._nth.call(null,chunk__10629_10658,i__10631_10660);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_10661)){
} else {
cljs.core.add_watch.call(null,ref_10661,key,((function (seq__10628_10657,chunk__10629_10658,count__10630_10659,i__10631_10660,ref_10661,comp,old_reactions,vec__10621,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10620){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__10628_10657,chunk__10629_10658,count__10630_10659,i__10631_10660,ref_10661,comp,old_reactions,vec__10621,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10620))
);
}


var G__10662 = seq__10628_10657;
var G__10663 = chunk__10629_10658;
var G__10664 = count__10630_10659;
var G__10665 = (i__10631_10660 + (1));
seq__10628_10657 = G__10662;
chunk__10629_10658 = G__10663;
count__10630_10659 = G__10664;
i__10631_10660 = G__10665;
continue;
} else {
var temp__5457__auto___10666 = cljs.core.seq.call(null,seq__10628_10657);
if(temp__5457__auto___10666){
var seq__10628_10667__$1 = temp__5457__auto___10666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10628_10667__$1)){
var c__4351__auto___10668 = cljs.core.chunk_first.call(null,seq__10628_10667__$1);
var G__10669 = cljs.core.chunk_rest.call(null,seq__10628_10667__$1);
var G__10670 = c__4351__auto___10668;
var G__10671 = cljs.core.count.call(null,c__4351__auto___10668);
var G__10672 = (0);
seq__10628_10657 = G__10669;
chunk__10629_10658 = G__10670;
count__10630_10659 = G__10671;
i__10631_10660 = G__10672;
continue;
} else {
var ref_10673 = cljs.core.first.call(null,seq__10628_10667__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_10673)){
} else {
cljs.core.add_watch.call(null,ref_10673,key,((function (seq__10628_10657,chunk__10629_10658,count__10630_10659,i__10631_10660,ref_10673,seq__10628_10667__$1,temp__5457__auto___10666,comp,old_reactions,vec__10621,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10620){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__10628_10657,chunk__10629_10658,count__10630_10659,i__10631_10660,ref_10673,seq__10628_10667__$1,temp__5457__auto___10666,comp,old_reactions,vec__10621,dom,next_state,new_reactions,key,_STAR_reactions_STAR_10620))
);
}


var G__10674 = cljs.core.next.call(null,seq__10628_10667__$1);
var G__10675 = null;
var G__10676 = (0);
var G__10677 = (0);
seq__10628_10657 = G__10674;
chunk__10629_10658 = G__10675;
count__10630_10659 = G__10676;
i__10631_10660 = G__10677;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_10620;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_10678 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__10632_10679 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__10633_10680 = null;
var count__10634_10681 = (0);
var i__10635_10682 = (0);
while(true){
if((i__10635_10682 < count__10634_10681)){
var ref_10683 = cljs.core._nth.call(null,chunk__10633_10680,i__10635_10682);
cljs.core.remove_watch.call(null,ref_10683,key_10678);


var G__10684 = seq__10632_10679;
var G__10685 = chunk__10633_10680;
var G__10686 = count__10634_10681;
var G__10687 = (i__10635_10682 + (1));
seq__10632_10679 = G__10684;
chunk__10633_10680 = G__10685;
count__10634_10681 = G__10686;
i__10635_10682 = G__10687;
continue;
} else {
var temp__5457__auto___10688 = cljs.core.seq.call(null,seq__10632_10679);
if(temp__5457__auto___10688){
var seq__10632_10689__$1 = temp__5457__auto___10688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10632_10689__$1)){
var c__4351__auto___10690 = cljs.core.chunk_first.call(null,seq__10632_10689__$1);
var G__10691 = cljs.core.chunk_rest.call(null,seq__10632_10689__$1);
var G__10692 = c__4351__auto___10690;
var G__10693 = cljs.core.count.call(null,c__4351__auto___10690);
var G__10694 = (0);
seq__10632_10679 = G__10691;
chunk__10633_10680 = G__10692;
count__10634_10681 = G__10693;
i__10635_10682 = G__10694;
continue;
} else {
var ref_10695 = cljs.core.first.call(null,seq__10632_10689__$1);
cljs.core.remove_watch.call(null,ref_10695,key_10678);


var G__10696 = cljs.core.next.call(null,seq__10632_10689__$1);
var G__10697 = null;
var G__10698 = (0);
var G__10699 = (0);
seq__10632_10679 = G__10696;
chunk__10633_10680 = G__10697;
count__10634_10681 = G__10698;
i__10635_10682 = G__10699;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10706 = arguments.length;
var i__4532__auto___10707 = (0);
while(true){
if((i__4532__auto___10707 < len__4531__auto___10706)){
args__4534__auto__.push((arguments[i__4532__auto___10707]));

var G__10708 = (i__4532__auto___10707 + (1));
i__4532__auto___10707 = G__10708;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__10703){
var map__10704 = p__10703;
var map__10704__$1 = ((((!((map__10704 == null)))?(((((map__10704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10704):map__10704);
var options = map__10704__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq10700){
var G__10701 = cljs.core.first.call(null,seq10700);
var seq10700__$1 = cljs.core.next.call(null,seq10700);
var G__10702 = cljs.core.first.call(null,seq10700__$1);
var seq10700__$2 = cljs.core.next.call(null,seq10700__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10701,G__10702,seq10700__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10712 = arguments.length;
var i__4532__auto___10713 = (0);
while(true){
if((i__4532__auto___10713 < len__4531__auto___10712)){
args__4534__auto__.push((arguments[i__4532__auto___10713]));

var G__10714 = (i__4532__auto___10713 + (1));
i__4532__auto___10713 = G__10714;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq10709){
var G__10710 = cljs.core.first.call(null,seq10709);
var seq10709__$1 = cljs.core.next.call(null,seq10709);
var G__10711 = cljs.core.first.call(null,seq10709__$1);
var seq10709__$2 = cljs.core.next.call(null,seq10709__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10710,G__10711,seq10709__$2);
});


//# sourceMappingURL=core.js.map
