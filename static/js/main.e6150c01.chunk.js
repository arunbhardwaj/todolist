(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{27:function(t,e,o){t.exports=o(39)},39:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(22),l=o.n(r),c=o(17),i=o(5),d=o(6),s=o(8),u=o(7),p=o(9),m=o(13),h=o(10),f=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={},o.getStyle=function(){return{background:"#f4f4f4",padding:"5px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,e)}),o,a.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,e),style:b},"x")))}}]),e}(n.Component),b={background:"#ff0000",color:"#ffffff",border:"none",padding:"3px 7px",borderRadius:"50%",cursor:"pointer",float:"right",textAlign:"center",fontSize:"13px"},g=f,y=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(g,{key:e.id,todo:e,deleteTodo:t.props.deleteTodo,toggleComplete:t.props.toggleComplete})}))}}]),e}(n.Component);function E(){return a.a.createElement("header",{style:v},a.a.createElement("h1",null,"To-Do List"),a.a.createElement(m.b,{style:{color:"white"},to:"/"},"Home")," | ",a.a.createElement(m.b,{to:"/about",style:{color:"white"}},"About"))}var v={background:"#333",color:"white",padding:"10px",textAlign:"center"},j=o(25),O=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todoField:""},o.updateText=function(t){o.setState(Object(j.a)({},t.target.name,t.target.value))},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.todoField),o.setState({todoField:""})},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"todoField",placeholder:"Add to-do...",style:{flex:"10",padding:"1px",height:"30px"},value:this.state.todoField,onChange:this.updateText}),a.a.createElement("input",{className:"btn",type:"submit",value:"Submit",style:{flex:"1"}}))}}]),e}(n.Component),x=o(26),T=o.n(x);function k(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null," This is a simple to-do list app. "))}var w=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=7").then((function(t){return t.json()})).then((function(t){return o.setState({todos:t})}))},o.toggleComplete=function(t){o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},o.deleteTodo=function(t){fetch("https://jsonplaceholder.typicode.com/todos/".concat(t),{method:"DELETE"}).then((function(e){return o.setState({todos:Object(c.a)(o.state.todos.filter((function(e){return e.id!==t})))})}))},o.addTodo=function(t){var e={id:T.a.v4(),title:t,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[e])})},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return(a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(E,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(y,{todos:t.state.todos,toggleComplete:t.toggleComplete,deleteTodo:t.deleteTodo}))}}),a.a.createElement(h.a,{path:"/about",component:k})),a.a.createElement("div",{className:"terms"},a.a.createElement("text",null,"Arun"))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e6150c01.chunk.js.map