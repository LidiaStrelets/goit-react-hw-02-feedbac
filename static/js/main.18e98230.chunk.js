(this["webpackJsonpgoit-react-hw-02-feedbac"]=this["webpackJsonpgoit-react-hw-02-feedbac"]||[]).push([[0],{11:function(e,t,a){e.exports={subtitle:"FeedbackSection_subtitle__2B6n5"}},12:function(e,t,a){e.exports={text:"Notification_text__3WvWm"}},2:function(e,t,a){e.exports={stats:"Statistics_stats__3stUL",statItem:"Statistics_statItem__2C8d9",number:"Statistics_number__26tXS"}},23:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),c=a(7),r=a.n(c),i=a(8),o=a(9),l=a(10),u=a(14),d=a(13),b=a(1),j=a.n(b),p=a(11),h=a.n(p),m=a(2),x=a.n(m),O=a(0),f=function(e){var t=e.good,a=e.neutral,n=e.bad,s=e.total,c=e.percentage;return Object(O.jsxs)("ul",{className:x.a.stats,children:[Object(O.jsx)("li",{className:x.a.statItem,children:Object(O.jsxs)("span",{children:["Good: ",Object(O.jsx)("span",{className:x.a.number,children:t})]})}),Object(O.jsx)("li",{className:x.a.statItem,children:Object(O.jsxs)("span",{children:["Neutral: ",Object(O.jsx)("span",{className:x.a.number,children:a})]})}),Object(O.jsx)("li",{className:x.a.statItem,children:Object(O.jsxs)("span",{children:["Bad: ",Object(O.jsx)("span",{className:x.a.number,children:n})]})}),Object(O.jsx)("li",{className:x.a.statItem,children:Object(O.jsxs)("span",{children:["Total: ",Object(O.jsx)("span",{className:x.a.number,children:s()})]})}),Object(O.jsx)("li",{className:x.a.statItem,children:Object(O.jsxs)("span",{children:["Positive feedback: ",Object(O.jsx)("span",{className:x.a.number,children:"".concat(c()," %")})]})})]})},g=a(5),v=a.n(g),_=function(e){var t=e.increaseValue,a=e.options;return Object(O.jsx)("div",{className:v.a.btnWrapper,children:a.map((function(e,a){return Object(O.jsx)("button",{className:v.a.btn,type:"button",onClick:function(){return t(e)},children:e},a)}))})};_.prototype={increaseValue:j.a.func.isRequired,options:j.a.arrayOf(j.a.string).isRequired};var N=_,k=a(6),F=a.n(k),P=function(e){var t=e.title,a=e.children;return Object(O.jsxs)("section",{className:F.a.section,children:[Object(O.jsx)("h1",{className:F.a.title,children:t}),a]})};P.defaultProps={title:"",children:[]},P.prototype={title:j.a.string,children:j.a.node};var y=P,S=a(12),q=a.n(S),I=function(e){var t=e.message;return Object(O.jsx)("p",{className:q.a.text,children:t})};I.defaultProps={message:"Oops, something went wrong here :("},I.prototype={message:j.a.string};var R=I,V=function(e){var t=e.increaseValue,a=e.countTotalFeedback,n=e.countPositiveFeedbackPercentage,s=e.good,c=e.neutral,r=e.bad;return Object(O.jsxs)(y,{title:"Please, leave your feedback here:",children:[Object(O.jsx)(N,{increaseValue:t,options:["good","neutral","bad"]}),Object(O.jsx)("h2",{className:h.a.subtitle,children:"Statistics"}),0===a()?Object(O.jsx)(R,{message:"No feedback given"}):Object(O.jsx)(f,{good:s,neutral:c,bad:r,total:a,percentage:n})]})};V.prototype={increaseValue:j.a.func.isRequired,countTotalFeedback:j.a.func.isRequired,countPositiveFeedbackPercentage:j.a.func.isRequired,good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired};var w=V,T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.increaseValue=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return(e.state.good/e.countTotalFeedback()*100).toFixed(2)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.good,t=this.state.neutral,a=this.state.bad;return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(w,{increaseValue:this.increaseValue,countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage,good:e,neutral:t,bad:a})})}}]),a}(n.Component);a(22);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={btnWrapper:"FeedbackOptions_btnWrapper__2ZN-0"}},6:function(e,t,a){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}}},[[23,1,2]]]);
//# sourceMappingURL=main.18e98230.chunk.js.map