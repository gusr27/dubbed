(this.webpackJsonpdubbed=this.webpackJsonpdubbed||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var c=a(5),s=a(2),n=a.n(s),i=a(28),l=a.n(i),r=(a(45),a(29)),h=a(30),o=a(18),d=a(36),j=a(35),b=(a(46),a(72)),u=a(73),O=a(74),x=a(75),m=a(76),f=a(77),g=a(78),p=a(80),v=a(26);v.a.initializeApp({apiKey:"AIzaSyDgPK0ARQ02qV0brhgg66_wZ6bKwHEFRJk",authDomain:"dubbed-fbf70.firebaseapp.com",databaseURL:"https://dubbed-fbf70-default-rtdb.firebaseio.com",projectId:"dubbed-fbf70",storageBucket:"dubbed-fbf70.appspot.com",messagingSenderId:"825831847025",appId:"1:825831847025:web:dc8eb5adc1986fbbe1d7d0",measurementId:"G-Z398MG7TQ4"});var w=v.a,k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).searchDb=function(){if(e.state.title.length>1)return e.state.results.filter((function(t){return t.title.toLowerCase().includes(e.state.title)})).map((function(e,t){return Object(c.jsx)(b.a,{className:"root",children:Object(c.jsx)("div",{className:"details",children:Object(c.jsxs)(u.a,{className:"content",children:[Object(c.jsx)(O.a,{component:"h5",variant:"h5",children:e.title}),Object(c.jsx)(O.a,{children:e.service})]})})},t)}))},e.renderShowcase=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)(x.a,{id:"showcase2",cellheight:160,cols:1,children:[Object(c.jsx)(b.a,{className:"root",children:Object(c.jsx)("div",{className:"details",children:Object(c.jsxs)(u.a,{className:"content",children:[Object(c.jsx)(O.a,{component:"h5",variant:"h5",children:"Attck on Titan"}),Object(c.jsx)(O.a,{children:"Funimation"})]})})}),Object(c.jsx)(b.a,{className:"root",children:Object(c.jsx)("div",{className:"details",children:Object(c.jsxs)(u.a,{className:"content",children:[Object(c.jsx)(O.a,{component:"h5",variant:"h5",children:"Attck on Titan"}),Object(c.jsx)(O.a,{children:"Funimation"})]})})})]}),Object(c.jsxs)(x.a,{id:"showcase",cellheight:160,cols:2,children:[Object(c.jsx)(b.a,{className:"root",children:Object(c.jsx)("div",{className:"details",children:Object(c.jsxs)(u.a,{className:"content",children:[Object(c.jsx)(O.a,{component:"h5",variant:"h5",children:"Attck on Titan"}),Object(c.jsx)(O.a,{children:"Funimation"})]})})}),Object(c.jsx)(b.a,{className:"root",children:Object(c.jsx)("div",{className:"details",children:Object(c.jsxs)(u.a,{className:"content",children:[Object(c.jsx)(O.a,{component:"h5",variant:"h5",children:"Attck on Titan"}),Object(c.jsx)(O.a,{children:"Funimation"})]})})})]})]})},e.state={title:"",results:[],showcase:!0},e.handleChange=e.handleChange.bind(Object(o.a)(e)),e.changeTitle=e.changeTitle.bind(Object(o.a)(e)),e.searchDb=e.searchDb.bind(Object(o.a)(e)),e.renderShowcase=e.renderShowcase.bind(Object(o.a)(e)),e}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({title:e.target.value}),e.target.value.length<2?this.setState({showcase:!0}):this.setState({showcase:!1})}},{key:"changeTitle",value:function(){return this.state.title}},{key:"componentDidMount",value:function(){var e=this;w.database().ref("shows").on("value",(function(t){var a=t.val(),c=[];for(var s in a)c.push({title:a[s].title});e.setState({results:c})})),console.log(this.state.results)}},{key:"render",value:function(){return Object(c.jsxs)(m.a,{container:!0,style:{backgroundColor:"#393e46"},children:[Object(c.jsxs)(m.a,{container:!0,style:{backgroundColor:"#222831"},children:[Object(c.jsx)(m.a,{item:!0,xs:12,sm:3,children:Object(c.jsx)(O.a,{variant:"h6",style:{color:"#ffd369"},children:"Dubbed Anime Search Engine"})}),Object(c.jsxs)(m.a,{item:!0,xs:12,sm:6,children:["  ",Object(c.jsx)(f.a,{style:{backgroundColor:"#393e46"},position:"static",children:Object(c.jsx)(g.a,{children:Object(c.jsx)(p.a,{placeholder:"Search...",onChange:this.handleChange,value:this.state.title})})})]}),Object(c.jsx)(m.a,{item:!0,xs:0,sm:6})]}),Object(c.jsx)(m.a,{id:"default-display",container:!0,alignItems:"center",style:{paddingTop:"100px"},direction:"column",children:Object(c.jsxs)(m.a,{item:!0,xs:6,justify:"center",alignItems:"center",children:[this.state.showcase?this.renderShowcase():null,Object(c.jsx)(x.a,{id:"showcase",cellheight:160,cols:2,children:this.searchDb()}),Object(c.jsx)(x.a,{id:"showcase2",cellheight:160,cols:1,children:this.searchDb()})]})})]})}}]),a}(s.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))},y=a(79);l.a.render(Object(c.jsxs)(n.a.StrictMode,{children:[Object(c.jsx)(y.a,{}),Object(c.jsx)(k,{})]}),document.getElementById("root")),N()}},[[56,1,2]]]);
//# sourceMappingURL=main.ce66e6fb.chunk.js.map