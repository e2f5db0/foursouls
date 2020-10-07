(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(73),l=a.n(i),c=(a(90),a(10)),o=(a(91),a(74)),s=a.n(o),u=a(68),m=a(70),E=a(72),d=a(75),h=a.n(d),p=a(30),B=a(14);function v(){var e=Object(p.a)(["\n  subscription {\n    voteAdded {\n      round\n      votes\n      voteOpen\n      newRound\n    }\n  }\n"]);return v=function(){return e},e}function U(){var e=Object(p.a)(["\nquery {\n  getVoteState {\n    round\n    votes\n    voteOpen\n    newRound\n  }\n}\n"]);return U=function(){return e},e}function g(){var e=Object(p.a)(["\nmutation {\n  closeVote {\n    round\n    votes\n    voteOpen\n    newRound\n  }\n}\n"]);return g=function(){return e},e}function C(){var e=Object(p.a)(["\nmutation {\n  openVote {\n    round\n    votes\n    voteOpen\n    newRound\n  }\n}\n"]);return C=function(){return e},e}function A(){var e=Object(p.a)(["\nmutation createTopic($name: String!) {\n  addTopic(\n    name: $name,\n  ) {\n    id\n    name\n  }\n}\n"]);return A=function(){return e},e}function k(){var e=Object(p.a)(["\nquery {\n  getCovered  {\n    id\n    name\n  }\n}\n"]);return k=function(){return e},e}function f(){var e=Object(p.a)(["\nmutation addVote($vote: Int!) {\n  addVote(vote: $vote) {\n      round\n      votes\n      voteOpen\n      newRound\n  }\n}\n"]);return f=function(){return e},e}function I(){var e=Object(p.a)(["\nquery {\n  getSplittedList  {\n    leftList {\n      topics {\n        id\n        name\n      }\n    }\n    rightList {\n      topics {\n        id\n        name\n      }\n    }\n  }\n}\n"]);return I=function(){return e},e}var N=Object(B.a)(I()),b=Object(B.a)(f()),j=(Object(B.a)(k()),Object(B.a)(A())),y=Object(B.a)(C()),q=Object(B.a)(g()),O=Object(B.a)(U()),F=Object(B.a)(v()),S=a(71),Q=function(e){var t=e.type,a=e.side,n=e.Cookies,i=Object(S.a)(b,{refetchQueries:[{query:N},{query:O}]}),l=Object(c.a)(i,1)[0],o=function(){"left"===a&&l({variables:{vote:0}}),"right"===a&&l({variables:{vote:1}}),n.set("voted",!0)};return r.a.createElement("div",null,"left"===a&&r.a.createElement("button",{className:t,onClick:function(){return o()}},"Vasen"),"right"===a&&r.a.createElement("button",{className:t,onClick:function(){return o()}},"Oikea"))},Y=a(46),K=a.n(Y),x=function(e){var t=e.voteState,a=e.Cookies,i=Object(n.useState)(t.newRound),l=Object(c.a)(i,2),o=l[0],s=l[1];Object(n.useEffect)((function(){o&&a.remove("voted")}),[a,o]);var u=Object(m.a)(N);if(u.loading)return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Container"},r.a.createElement("img",{className:"Loading-animation",src:K.a,alt:"loading animation"}),"Loading..."));if(null===t)return r.a.createElement("div",{className:"App"},r.a.createElement("h3",{className:"Heading"},"\xc4\xe4nestys on suljettu."));if(!1===t.voteOpen)return r.a.createElement("div",{className:"App"},r.a.createElement("h3",{className:"Heading"},"\xc4\xe4nestys on suljettu."));var E=u.data.getSplittedList.leftList.topics,d=u.data.getSplittedList.rightList.topics;return 0===E.length?r.a.createElement("div",null,r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"Heading"},"Voittaja-aihe"),d.map((function(e){return r.a.createElement("p",{key:e.id,className:"Topic-item"},e.name)})))):0===d.length?r.a.createElement("div",null,r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"Heading"},"Voittaja-aihe"),E.map((function(e){return r.a.createElement("p",{key:e.id,className:"Topic-item"},e.name)})))):a.get("voted")?r.a.createElement("div",{className:"Container"},r.a.createElement("div",null,r.a.createElement("img",{className:"Chosen-img",src:h.a,alt:"Checked icon"}),r.a.createElement("p",null,"Kierros: ",t.round),r.a.createElement("p",null,"\xc4\xe4ni\xe4: ",t.votes,"/5"),r.a.createElement("p",null),r.a.createElement("p",null,"Valittu!"),r.a.createElement("p",null,"Seuraava kierros alkaa kun kaikki ovat \xe4\xe4nest\xe4neet."))):r.a.createElement("div",null,r.a.createElement("div",{className:"Container"},r.a.createElement("p",null,"Kierros: ",t.round),r.a.createElement("p",null,"\xc4\xe4ni\xe4: ",t.votes,"/5"),r.a.createElement("h4",{className:"Heading"},"Aihekategoriat ",r.a.createElement("small",null,"(Valitse jompikumpi)")),r.a.createElement("div",{className:"Container-flex"},r.a.createElement("div",{className:"Container-left"},E.map((function(e){return r.a.createElement("p",{key:e.id,className:"Topic-item"},e.name)}))),r.a.createElement("div",{className:"Container-right"},d.map((function(e){return r.a.createElement("p",{key:e.id,className:"Topic-item"},e.name)})))),r.a.createElement("div",{className:"TopicSelection-buttons"},r.a.createElement(Q,{type:"TopicSelection-Choice-button",text:"Valitse",side:"left",newRound:o,setNewRound:s,Cookies:a}),r.a.createElement(Q,{type:"TopicSelection-Choice-button",text:"Valitse",side:"right",newRound:o,setNewRound:s,Cookies:a}))))},R=a(78),G=a.n(R),V=function(e){var t=e.toggleDrawer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"Toggle-Button",onClick:function(){return t()}},r.a.createElement("div",{className:"Toggle-Button-line"}),r.a.createElement("div",{className:"Toggle-Button-line"}),r.a.createElement("div",{className:"Toggle-Button-line"})))},D=function(e){var t=e.show,a=e.toggleDrawer,n=e.setBody,i=["Side-Drawer"];t&&i.push("open");var l=function(e){n(e),a()};return r.a.createElement("nav",{className:i.join(" ")},r.a.createElement("ul",null,r.a.createElement("li",{className:"Side-Drawer-item",onClick:function(){return l("addTopic")}},"Lis\xe4\xe4 Aihe"),r.a.createElement("li",{className:"Side-Drawer-item",onClick:function(){return l("topicSelection")}},"Aihevalinta"),r.a.createElement("li",{className:"Side-Drawer-item",onClick:function(){return l("covered")}},"K\xe4sitellyt Aiheet"),r.a.createElement("li",{className:"Side-Drawer-item",onClick:function(){return l("adminLogin")}},"Admin")))},w=function(e){var t=e.toggleDrawer;return r.a.createElement("div",{className:"Backdrop",onClick:function(){return t()}})},L=function(e){var t=e.setBody,a=Object(n.useState)(!1),i=Object(c.a)(a,2),l=i[0],o=i[1],s=function(){o(!l)};return r.a.createElement("div",null,r.a.createElement("header",{className:"Navbar"},r.a.createElement("nav",{className:"Navbar-navigation"},r.a.createElement("div",{className:"Navbar-navigation"},r.a.createElement(V,{toggleDrawer:s})),r.a.createElement("img",{className:"Navbar-logo",src:G.a,alt:"RemoteSocietyNow",onClick:function(){return t("main")}}),r.a.createElement("div",{className:"Navbar-spacer"}),r.a.createElement("div",{className:"Navbar-items"},r.a.createElement("ul",null,r.a.createElement("li",{className:"Navbar-item",onClick:function(){return t("addTopic")}},"Lis\xe4\xe4 Aihe"),r.a.createElement("li",{className:"Navbar-item",onClick:function(){return t("topicSelection")}},"Aihevalinta"),r.a.createElement("li",{className:"Navbar-item",onClick:function(){return t("covered")}},"K\xe4sitellyt Aiheet"),r.a.createElement("li",{className:"Navbar-item",onClick:function(){return t("adminLogin")}},"Admin"))))),r.a.createElement(D,{show:l,toggleDrawer:s,setBody:t}),l&&r.a.createElement(w,{toggleDrawer:s}))},M=function(e){var t=e.type,a=e.text,n=e.handleClick;return r.a.createElement("div",null,r.a.createElement("button",{className:t,onClick:function(){return n()}},a))},T=function(e){return 0===e.length?"Aihe ei voi olla tyhj\xe4.":e.length>31?"Aihe voi olla korkeintaan 31 merkki\xe4 pitk\xe4 :)":"success"},P=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(""),o=Object(c.a)(l,2),s=o[0],u=o[1],m=Object(n.useState)(""),E=Object(c.a)(m,2),d=E[0],h=E[1],p=Object(S.a)(j),B=Object(c.a)(p,1)[0];return r.a.createElement("div",{className:"Container"},""!==s&&r.a.createElement("p",{className:"Error"},s),""!==d&&r.a.createElement("p",{className:"Success"},d),r.a.createElement("h1",{className:"Heading"},"Lis\xe4\xe4 Aihe"),r.a.createElement("input",{className:"Aihe-input",value:a,type:"text",onChange:function(e){return i(e.target.value)}}),r.a.createElement(M,{type:"Add-button",text:"Lis\xe4\xe4",handleClick:function(){return function(){var e=T(a);"success"===e?(u(""),h("Aihe lis\xe4tty."),B({variables:{name:a}})):(h(""),u(e))}()}}))},W=a(48),J=a.n(W),Z=a(63),H=a(62),z=function(e){var t=e.voteState,a=Object(n.useState)(""),i=Object(c.a)(a,2),l=i[0],o=i[1],s=Object(n.useState)(""),u=Object(c.a)(s,2),m=u[0],E=u[1],d=Object(n.useState)(""),h=Object(c.a)(d,2),p=h[0],B=h[1],v=Object(n.useState)(t.voteOpen),U=Object(c.a)(v,2),g=U[0],C=U[1],A=Object(S.a)(y,{refetchQueries:[{query:O}]}),k=Object(c.a)(A,1)[0],f=Object(S.a)(q,{refetchQueries:[{query:O}]}),I=Object(c.a)(f,1)[0];setTimeout((function(){E(""),B("")}),3e3);var N=function(){var e=Object(Z.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:E(""),C(!0),B("\xc4\xe4nestys avattu."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),B(""),E("\xc4\xe4nestyst\xe4 ei voitu avata.");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(Z.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:E(""),C(!1),B("\xc4\xe4nestys suljettu."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),B(""),E("\xc4\xe4nestyst\xe4 ei voitu sulkea.");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return"supersekretadmintokenyo"===H.get("admin_token")?r.a.createElement("div",{className:"Container"},r.a.createElement("h3",{className:"Heading"},"Admin"),""!==m&&r.a.createElement("p",{className:"Error"},m),""!==p&&r.a.createElement("p",{className:"Success"},p),!1===g&&r.a.createElement(M,{type:"Button-aanestys",text:"Avaa \xe4\xe4nestys",handleClick:function(){return N()}}),!0===g&&r.a.createElement("p",null,"\xc4\xe4nestys on auki."),!0===g&&r.a.createElement(M,{type:"Button-aanestys",text:"Sulje \xe4\xe4nestys",handleClick:function(){return b()}})):r.a.createElement("div",{className:"Container"},""!==m&&r.a.createElement("p",{className:"Error"},m),""!==p&&r.a.createElement("p",{className:"Success"},p),r.a.createElement("input",{className:"Aihe-input",value:l,type:"password",onChange:function(e){return o(e.target.value)}}),r.a.createElement(M,{type:"Add-button",text:"Login",handleClick:function(){"uusiaamu"===l?(E(""),H.set("admin_token","supersekretadmintokenyo"),o(""),B("Access granted yo.")):(B(""),E("V\xe4\xe4r\xe4 salasana."),o(""))}}))},X=function(e){var t=e.setBody,a=e.voteState;return r.a.createElement("div",{className:"Container"},r.a.createElement("h3",{className:"Heading"},"Aihepoolivalintasovellus"),!1===a.voteOpen&&r.a.createElement("p",null,"\xc4\xe4nestys on suljettu."),!0===a.voteOpen&&r.a.createElement(M,{type:"Button-aanestys",text:"\xc4\xe4nest\xe4",handleClick:function(){return t("topicSelection")}}))},$=a(62),_=a.n($),ee=function(){var e=Object(u.a)(),t=Object(n.useState)("main"),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(m.a)(O);return Object(E.a)(F,{onSubscriptionData:function(t){var a=t.subscriptionData.data.voteAdded,n=e.readQuery({query:O}).getVoteState;s()(a,n)||(console.log("ebin"),console.log("newVoteState: ",a),e.writeQuery({query:O,data:{getVoteState:a}}))}}),o.loading?r.a.createElement("div",{className:"App"},r.a.createElement(L,{setBody:l}),r.a.createElement("img",{className:"Loading-animation",src:K.a,alt:"loading animation"}),r.a.createElement("p",null,"Loading...")):"main"===i?r.a.createElement("div",{className:"App"},r.a.createElement(L,{setBody:l}),r.a.createElement(X,{setBody:l,voteState:o.data.getVoteState})):"topicSelection"===i?r.a.createElement("div",{className:"App"},r.a.createElement(L,{setBody:l}),r.a.createElement(x,{voteState:o.data.getVoteState,setBody:l,Cookies:_.a})):"addTopic"===i?r.a.createElement("div",{className:"App"},r.a.createElement(L,{setBody:l}),r.a.createElement(P,null)):"adminLogin"===i?r.a.createElement("div",{className:"App"},r.a.createElement(L,{setBody:l}),r.a.createElement(z,{voteState:o.data.getVoteState})):void 0},te=a(38),ae=a(51),ne=a(52),re=a(53),ie=a(69),le=a(79),ce=a(80),oe=new te.a({uri:"/graphql"}),se=new ce.a({uri:"wss://tietopiiri.herokuapp.com/graphql",options:{reconnect:!0}}),ue=Object(ae.a)((function(e){var t=e.query,a=Object(le.a)(t);return"OperationDefinition"===a.kind&&"subscription"===a.operation}),se,oe),me=new ne.a({cache:new re.a,link:ue,connectToDevTools:!0});l.a.render(r.a.createElement(ie.a,{client:me},r.a.createElement(ee,null)),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/loading.317c24a1.gif"},75:function(e,t){e.exports="data:image/png;base64,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"},78:function(e,t,a){e.exports=a.p+"static/media/tietopiirilogo.fac6a9e9.png"},85:function(e,t,a){e.exports=a(104)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.c683e552.chunk.js.map