(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},28:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),i=t(7),a=t.n(i),o=t(0),u=t(8),s=t(9),m=t(15),l=t(10),b=t(16),d=t(2),p=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(m.a)(this,Object(l.a)(n).call(this,e))).incrementAsync=t.incrementAsync.bind(Object(d.a)(Object(d.a)(t))),t.incrementIfOdd=t.incrementIfOdd.bind(Object(d.a)(Object(d.a)(t))),t}return Object(b.a)(n,e),Object(s.a)(n,[{key:"incrementIfOdd",value:function(){this.props.value%2!==0&&this.props.onIncrement()}},{key:"incrementAsync",value:function(){setTimeout(this.props.onIncrement,1e3)}},{key:"render",value:function(){var e=this.props,n=e.value,t=e.onIncrement,c=e.onDecrement;return r.a.createElement("p",null,"Clicked: ",n," times ",r.a.createElement("button",{onClick:t},"+")," ",r.a.createElement("button",{onClick:c},"-")," ",r.a.createElement("button",{onClick:this.incrementIfOdd},"Increment if odd")," ",r.a.createElement("button",{onClick:this.incrementAsync},"Increment async"))}}]),n}(c.Component),f=t(14),E=Object(f.a)({initialState:0,cases:{INCREMENT:function(e){return e+1},DECREMENT:function(e){return e-1}}}),O=Object(o.createStore)(E),I=document.getElementById("root"),h=function(){return a.a.render(r.a.createElement(p,{value:O.getState(),onIncrement:function(){return O.dispatch({type:"INCREMENT"})},onDecrement:function(){return O.dispatch({type:"DECREMENT"})}}),I)};h(),O.subscribe(h)}},[[17,2,1]]]);
//# sourceMappingURL=main.99e486a1.chunk.js.map