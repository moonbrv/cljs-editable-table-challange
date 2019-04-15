// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20998){
var map__20999 = p__20998;
var map__20999__$1 = ((((!((map__20999 == null)))?(((((map__20999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20999):map__20999);
var m = map__20999__$1;
var n = cljs.core.get.call(null,map__20999__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20999__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21001_21023 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21002_21024 = null;
var count__21003_21025 = (0);
var i__21004_21026 = (0);
while(true){
if((i__21004_21026 < count__21003_21025)){
var f_21027 = cljs.core._nth.call(null,chunk__21002_21024,i__21004_21026);
cljs.core.println.call(null,"  ",f_21027);


var G__21028 = seq__21001_21023;
var G__21029 = chunk__21002_21024;
var G__21030 = count__21003_21025;
var G__21031 = (i__21004_21026 + (1));
seq__21001_21023 = G__21028;
chunk__21002_21024 = G__21029;
count__21003_21025 = G__21030;
i__21004_21026 = G__21031;
continue;
} else {
var temp__5457__auto___21032 = cljs.core.seq.call(null,seq__21001_21023);
if(temp__5457__auto___21032){
var seq__21001_21033__$1 = temp__5457__auto___21032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21001_21033__$1)){
var c__4351__auto___21034 = cljs.core.chunk_first.call(null,seq__21001_21033__$1);
var G__21035 = cljs.core.chunk_rest.call(null,seq__21001_21033__$1);
var G__21036 = c__4351__auto___21034;
var G__21037 = cljs.core.count.call(null,c__4351__auto___21034);
var G__21038 = (0);
seq__21001_21023 = G__21035;
chunk__21002_21024 = G__21036;
count__21003_21025 = G__21037;
i__21004_21026 = G__21038;
continue;
} else {
var f_21039 = cljs.core.first.call(null,seq__21001_21033__$1);
cljs.core.println.call(null,"  ",f_21039);


var G__21040 = cljs.core.next.call(null,seq__21001_21033__$1);
var G__21041 = null;
var G__21042 = (0);
var G__21043 = (0);
seq__21001_21023 = G__21040;
chunk__21002_21024 = G__21041;
count__21003_21025 = G__21042;
i__21004_21026 = G__21043;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21044 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21044);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21044)))?cljs.core.second.call(null,arglists_21044):arglists_21044));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21005_21045 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21006_21046 = null;
var count__21007_21047 = (0);
var i__21008_21048 = (0);
while(true){
if((i__21008_21048 < count__21007_21047)){
var vec__21009_21049 = cljs.core._nth.call(null,chunk__21006_21046,i__21008_21048);
var name_21050 = cljs.core.nth.call(null,vec__21009_21049,(0),null);
var map__21012_21051 = cljs.core.nth.call(null,vec__21009_21049,(1),null);
var map__21012_21052__$1 = ((((!((map__21012_21051 == null)))?(((((map__21012_21051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21012_21051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21012_21051):map__21012_21051);
var doc_21053 = cljs.core.get.call(null,map__21012_21052__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21054 = cljs.core.get.call(null,map__21012_21052__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21050);

cljs.core.println.call(null," ",arglists_21054);

if(cljs.core.truth_(doc_21053)){
cljs.core.println.call(null," ",doc_21053);
} else {
}


var G__21055 = seq__21005_21045;
var G__21056 = chunk__21006_21046;
var G__21057 = count__21007_21047;
var G__21058 = (i__21008_21048 + (1));
seq__21005_21045 = G__21055;
chunk__21006_21046 = G__21056;
count__21007_21047 = G__21057;
i__21008_21048 = G__21058;
continue;
} else {
var temp__5457__auto___21059 = cljs.core.seq.call(null,seq__21005_21045);
if(temp__5457__auto___21059){
var seq__21005_21060__$1 = temp__5457__auto___21059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21005_21060__$1)){
var c__4351__auto___21061 = cljs.core.chunk_first.call(null,seq__21005_21060__$1);
var G__21062 = cljs.core.chunk_rest.call(null,seq__21005_21060__$1);
var G__21063 = c__4351__auto___21061;
var G__21064 = cljs.core.count.call(null,c__4351__auto___21061);
var G__21065 = (0);
seq__21005_21045 = G__21062;
chunk__21006_21046 = G__21063;
count__21007_21047 = G__21064;
i__21008_21048 = G__21065;
continue;
} else {
var vec__21014_21066 = cljs.core.first.call(null,seq__21005_21060__$1);
var name_21067 = cljs.core.nth.call(null,vec__21014_21066,(0),null);
var map__21017_21068 = cljs.core.nth.call(null,vec__21014_21066,(1),null);
var map__21017_21069__$1 = ((((!((map__21017_21068 == null)))?(((((map__21017_21068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21017_21068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21017_21068):map__21017_21068);
var doc_21070 = cljs.core.get.call(null,map__21017_21069__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21071 = cljs.core.get.call(null,map__21017_21069__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21067);

cljs.core.println.call(null," ",arglists_21071);

if(cljs.core.truth_(doc_21070)){
cljs.core.println.call(null," ",doc_21070);
} else {
}


var G__21072 = cljs.core.next.call(null,seq__21005_21060__$1);
var G__21073 = null;
var G__21074 = (0);
var G__21075 = (0);
seq__21005_21045 = G__21072;
chunk__21006_21046 = G__21073;
count__21007_21047 = G__21074;
i__21008_21048 = G__21075;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__21019 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21020 = null;
var count__21021 = (0);
var i__21022 = (0);
while(true){
if((i__21022 < count__21021)){
var role = cljs.core._nth.call(null,chunk__21020,i__21022);
var temp__5457__auto___21076__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21076__$1)){
var spec_21077 = temp__5457__auto___21076__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21077));
} else {
}


var G__21078 = seq__21019;
var G__21079 = chunk__21020;
var G__21080 = count__21021;
var G__21081 = (i__21022 + (1));
seq__21019 = G__21078;
chunk__21020 = G__21079;
count__21021 = G__21080;
i__21022 = G__21081;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__21019);
if(temp__5457__auto____$1){
var seq__21019__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21019__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__21019__$1);
var G__21082 = cljs.core.chunk_rest.call(null,seq__21019__$1);
var G__21083 = c__4351__auto__;
var G__21084 = cljs.core.count.call(null,c__4351__auto__);
var G__21085 = (0);
seq__21019 = G__21082;
chunk__21020 = G__21083;
count__21021 = G__21084;
i__21022 = G__21085;
continue;
} else {
var role = cljs.core.first.call(null,seq__21019__$1);
var temp__5457__auto___21086__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21086__$2)){
var spec_21087 = temp__5457__auto___21086__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21087));
} else {
}


var G__21088 = cljs.core.next.call(null,seq__21019__$1);
var G__21089 = null;
var G__21090 = (0);
var G__21091 = (0);
seq__21019 = G__21088;
chunk__21020 = G__21089;
count__21021 = G__21090;
i__21022 = G__21091;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
