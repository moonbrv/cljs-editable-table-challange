// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__8127 = arguments.length;
switch (G__8127) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__8128 = opts;
var map__8128__$1 = ((((!((map__8128 == null)))?(((((map__8128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8128):map__8128);
var ref = cljs.core.get.call(null,map__8128__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__8128__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__8130 = cljs.core.count.call(null,refs);
switch (G__8130) {
case (1):
var vec__8131 = refs;
var a = cljs.core.nth.call(null,vec__8131,(0),null);
return ((function (vec__8131,a,G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__8131,a,G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__8134 = refs;
var a = cljs.core.nth.call(null,vec__8134,(0),null);
var b = cljs.core.nth.call(null,vec__8134,(1),null);
return ((function (vec__8134,a,b,G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__8134,a,b,G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__8137 = refs;
var a = cljs.core.nth.call(null,vec__8137,(0),null);
var b = cljs.core.nth.call(null,vec__8137,(1),null);
var c = cljs.core.nth.call(null,vec__8137,(2),null);
return ((function (vec__8137,a,b,c,G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__8137,a,b,c,G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__8130,map__8128,map__8128__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__8140 = ref;
cljs.core.reset_BANG_.call(null,G__8140,recalc.call(null));

return G__8140;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__8128,map__8128__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__8128,map__8128__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__8128,map__8128__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__8128,map__8128__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__8141_8147 = cljs.core.seq.call(null,refs);
var chunk__8142_8148 = null;
var count__8143_8149 = (0);
var i__8144_8150 = (0);
while(true){
if((i__8144_8150 < count__8143_8149)){
var ref_8151__$1 = cljs.core._nth.call(null,chunk__8142_8148,i__8144_8150);
cljs.core.add_watch.call(null,ref_8151__$1,key,watch);


var G__8152 = seq__8141_8147;
var G__8153 = chunk__8142_8148;
var G__8154 = count__8143_8149;
var G__8155 = (i__8144_8150 + (1));
seq__8141_8147 = G__8152;
chunk__8142_8148 = G__8153;
count__8143_8149 = G__8154;
i__8144_8150 = G__8155;
continue;
} else {
var temp__5457__auto___8156 = cljs.core.seq.call(null,seq__8141_8147);
if(temp__5457__auto___8156){
var seq__8141_8157__$1 = temp__5457__auto___8156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141_8157__$1)){
var c__4351__auto___8158 = cljs.core.chunk_first.call(null,seq__8141_8157__$1);
var G__8159 = cljs.core.chunk_rest.call(null,seq__8141_8157__$1);
var G__8160 = c__4351__auto___8158;
var G__8161 = cljs.core.count.call(null,c__4351__auto___8158);
var G__8162 = (0);
seq__8141_8147 = G__8159;
chunk__8142_8148 = G__8160;
count__8143_8149 = G__8161;
i__8144_8150 = G__8162;
continue;
} else {
var ref_8163__$1 = cljs.core.first.call(null,seq__8141_8157__$1);
cljs.core.add_watch.call(null,ref_8163__$1,key,watch);


var G__8164 = cljs.core.next.call(null,seq__8141_8157__$1);
var G__8165 = null;
var G__8166 = (0);
var G__8167 = (0);
seq__8141_8147 = G__8164;
chunk__8142_8148 = G__8165;
count__8143_8149 = G__8166;
i__8144_8150 = G__8167;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map
