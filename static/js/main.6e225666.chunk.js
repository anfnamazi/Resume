(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"title":"Hello I\'m Mojtaba Namazi Fard","subtitle":"Software engineer | React developer | Web designer","links":{"github":"https://github.com/anfnamazi","linkedin":"https://www.linkedin.com/in/mojtaba-namazy/","stackoverflow":"https://stackoverflow.com/users/18606173/mojtaba-namazy","twitter":"https://twitter.com/moji73319239","instagram":"https://www.instagram.com/anf.namazi/"},"nav":{"links":[{"type":"a","content":"About"},{"type":"a","content":"Skills"}]},"section":[{"title":"About","items":[{"type":"p","content":"I have 4+ years of experience in React development and work with 3 software companies in the team."},{"type":"p","content":"I enjoy staying up-to-date with the latest web development trends and technologies."},{"type":"p","content":"Seeking a challenging role to contribute technical expertise, creativity, and problem-solving skills to a dynamic development team."}]},{"title":"Skills","items":[{"type":"card","content":{"image":"images/HTML.png","title":"HTML"}},{"type":"card","content":{"image":"images/CSS.png","title":"CSS/SASS"}},{"type":"card","content":{"image":"images/js.png","title":"JavaScript"}},{"type":"card","content":{"image":"images/Typescript.png","title":"Typescript"}},{"type":"card","content":{"image":"images/react.png","title":"React"}},{"type":"card","content":{"image":"images/Redux.png","title":"Redux"}},{"type":"card","content":{"image":"images/Leaflet.png","title":"Leaflet"}},{"type":"card","content":{"image":"images/cesium.png","title":"Cesium"}}]}],"icons":"images/drop.png"}')},21:function(e,t,a){e.exports=a(53)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/resume.89bc21bc.pdf"},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),o=a.n(s);a(26),a(27),a(28);class r extends n.Component{render(){const{children:e}=this.props;return l.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}var c=a(1),i=a(18);a(36),a(37);class m extends n.Component{render(){return l.a.createElement("div",{style:this.props.style},l.a.createElement("div",{className:"drop"},l.a.createElement("img",{src:c.icons,style:{height:"40px",position:"absolute"}})))}}var p=a(2),d=a(19);a(46);class h extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement(r,null,l.a.createElement("h1",{className:"title"},c.title),l.a.createElement("div",null,l.a.createElement("h4",null,c.subtitle)),l.a.createElement("div",{style:{padding:16}},l.a.createElement(d.AwesomeButton,{size:"large",href:a(47)},"Resume")),l.a.createElement("div",{className:"icons-wrapper"},Object.keys(c.links).map(e=>l.a.createElement("div",{className:"icon"},l.a.createElement(i.SocialIcon,{url:c.links[e]}))))),l.a.createElement(p.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement(m,null)),l.a.createElement(p.Element,{name:"test1",className:"element"}))}}a(48);class u extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement(r,null,l.a.createElement("h3",null,c.section[0].title),l.a.createElement("p",null,c.section[0].items.map(e=>l.a.createElement("p",null," ",e.content)))),l.a.createElement(p.Link,{activeClass:"active",to:"test2",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement(m,null)),l.a.createElement(p.Element,{name:"test2",className:"element"}))}}a(49);class g extends n.Component{render(){const{skill:e}=this.props;return l.a.createElement("div",{className:"card",style:{backgroundColor:this.props.bgColor}},l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("img",{src:e.content.image,alt:""})),l.a.createElement("div",{className:"skill-title"},l.a.createElement("h4",null,e.content.title)))}}a(50);class E extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement(r,null,l.a.createElement("h3",null,c.section[1].title),l.a.createElement("div",{className:"cards-wrapper"},c.section[1].items.map(e=>l.a.createElement(g,{skill:e,bgColor:this.props.theme.backgroundColor2})))))}}a(51);class y extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("nav",{style:{color:this.props.style.color,backgroundColor:this.props.style.backgroundColor}},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{onClick:this.props.onClick},this.props.name),l.a.createElement("li",null,l.a.createElement(p.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("a",null,c.nav.links[0].content))),l.a.createElement("li",null,l.a.createElement(p.Link,{activeClass:"active",to:"test2",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("a",null,c.nav.links[1].content))))))}}var v=a(20),k=a.n(v),f=a(13);class C extends n.Component{constructor(){super(),this.changeTheme=()=>this.setState({type:"light"===this.state.type?"dark":"light"}),this.state={theme:{light:{color:"#769FCD",backgroundColor:"#F7FBFC",backgroundColor2:"#D6E6F2"},dark:{color:"#fff",backgroundColor:"#334257",backgroundColor2:"#476072"}},type:"light"}}render(){return l.a.createElement("div",{className:"App",style:{color:this.state.theme[this.state.type].color,backgroundColor:this.state.theme[this.state.type].backgroundColor}},l.a.createElement(k.a,{snowColor:this.state.theme[this.state.type].color,key:this.state.theme[this.state.type].color}),l.a.createElement(p.Element,{name:"test3",className:"element"}),l.a.createElement(y,{onClick:()=>this.changeTheme(),name:"light"===this.state.type?l.a.createElement(f.a,null):l.a.createElement(f.b,null),style:{color:this.state.theme[this.state.type].color,backgroundColor:this.state.theme[this.state.type].backgroundColor2}}),l.a.createElement(h,{theme:this.state.theme[this.state.type]}),l.a.createElement(u,null),l.a.createElement(E,{theme:this.state.theme[this.state.type]}),l.a.createElement(p.Link,{activeClass:"active",to:"test3",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement(m,{style:{transform:"rotate(180deg) transLateY(60px)"}})))}}var b=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.6e225666.chunk.js.map