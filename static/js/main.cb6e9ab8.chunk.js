(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5417:function(t,e,o){t.exports=o(5566)},5422:function(t,e,o){},5424:function(t,e,o){},5566:function(t,e,o){"use strict";o.r(e);var i=o(1),a=o.n(i),n=o(16),r=o.n(n),s=(o(5422),o(49)),d=o(27),c=o(19),l=o(20),u=o(22),h=o(21),m=o(23),f=(o(5424),o(18)),y=o(17),p=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.classes,o=t.isDarkMode,i=t.toggleDarkMode;return a.a.createElement(f.a,{position:"static",color:"default",className:e.appbar},a.a.createElement(f.l,{className:e.header},"React Todo",a.a.createElement(f.j,{color:"default",checked:o,onClick:i})))}}]),e}(i.Component),g=Object(y.withStyles)(function(){return{appbar:{marginBottom:"80px"},header:{display:"flex",margin:"0 auto",width:"85%",justifyContent:"space-between"}}})(p),v=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.classes,o=t.inputValue,i=t.inputChange,n=t.addTodoSubmit,r=t.addTodo;return a.a.createElement("div",{className:e.input},a.a.createElement(f.k,{label:"Todo",className:e.textField,value:o,onChange:i,onKeyUp:n}),a.a.createElement(f.b,{className:e.buttonAdd,variant:"contained",color:"primary",onClick:r},"Add"))}}]),e}(i.Component),b=Object(y.withStyles)(function(){return{input:{width:"300px",margin:"0 auto 50px"},textField:{margin:"0 auto",width:"240px"},buttonAdd:{margin:"12px -3px"}}})(v),k=o(48),T=function(t){function e(t){var o;Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).checkTodoTrigger=function(){var t=o.props;(0,t.checkTodo)(t.todo)},o.removeTodoTrigger=function(){var t=o.props;(0,t.removeTodo)(t.todo)},o.modifyTodoTrigger=function(){if(!o.props.isModifying){var t=o.props;(0,t.modifyTodo)(t.todo)}},o.modifyChange=function(t){o.setState({modifyValue:t.target.value})},o.modifyTodoSubmit=function(t){return 13===t.keyCode?o.modifyTodoDoneTrigger():0},o.modifyTodoDoneTrigger=function(){var t=o.state.modifyValue,e=o.props;(0,e.modifyTodoDone)(e.todo,t)};var i=o.props.modifyValue;return o.state={modifyValue:i},o}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.value,o=t.checked,i=t.todo,n=t.classes,r=t.isDarkMode,s=this.state.modifyValue;return a.a.createElement(f.i,{className:n.listItem},a.a.createElement("div",{className:n.todoContent},a.a.createElement(f.f,{control:a.a.createElement(f.e,{checked:o,color:"primary",onChange:this.checkTodoTrigger})}),i.isModifying?a.a.createElement("input",{className:r?n.modifyInputDark:n.modifyInputLight,value:s,onChange:this.modifyChange,onKeyUp:this.modifyTodoSubmit}):a.a.createElement("p",{onDoubleClick:this.modifyTodoTrigger},e)),i.isModifying?a.a.createElement(f.b,{variant:r?"contained":"outlined",color:"primary",onClick:this.modifyTodoDoneTrigger},"\u4fee\u6539"):a.a.createElement(f.b,{variant:r?"contained":"outlined",color:"secondary",onClick:this.removeTodoTrigger},"\u522a\u9664"))}}]),e}(i.Component),S=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(u.a)(this,Object(h.a)(e).call(this,t))).allTodos=function(){o.setState({category:0})},o.completedTodos=function(){o.setState({category:1})},o.uncompletedTodos=function(){o.setState({category:2})},o.state={category:0},o}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.category,e=this.props,o=e.undo,i=e.redo,n=e.deleteTodoList,r=e.checkTodo,s=e.removeTodo,d=e.modifyTodo,c=e.modifyTodoDone,l=this.props,u=l.classes,h=l.isDarkMode,m=l.isModifying,y=l.todoList,p=l.progress,g=t?t%2?y.filter(function(t){return!0===t.checked}):y.filter(function(t){return!1===t.checked}):y;return a.a.createElement(f.c,{className:u.todolist},a.a.createElement(f.g,{value:p,variant:"determinate",color:"primary"}),a.a.createElement(f.d,{className:u.cardHeader},a.a.createElement("div",{className:u.history},a.a.createElement(k.c,{className:u.icon,onClick:o}),a.a.createElement(k.b,{className:u.icon,onClick:i})),a.a.createElement("div",{className:"buttons"},a.a.createElement(f.b,{variant:"contained",color:0===t?"primary":"default",className:u.button,onClick:this.allTodos},"\u5168\u90e8"),a.a.createElement(f.b,{variant:"contained",color:1===t?"primary":"default",className:u.button,onClick:this.completedTodos},"\u5b8c\u6210"),a.a.createElement(f.b,{variant:"contained",color:2===t?"primary":"default",className:u.button,onClick:this.uncompletedTodos},"\u672a\u5b8c\u6210")),a.a.createElement(k.a,{className:u.delete,onClick:n})),a.a.createElement(f.d,null,a.a.createElement(f.h,null,g.map(function(t){return a.a.createElement(T,{classes:u,isDarkMode:h,todo:t,key:t.id,checked:t.checked,value:t.value,modifyValue:t.modifyValue,checkTodo:r,removeTodo:s,isModifying:m,modifyTodo:d,modifyTodoDone:c})}))))}}]),e}(i.Component),w=Object(y.withStyles)(function(t){return{button:{margin:t.spacing.unit},todolist:{maxWidth:"85%",margin:"0 auto 100px"},icon:{cursor:"pointer",transition:".3s","&:hover":{opacity:"0.6"},"&:active":{opacity:"0.9"}},history:{display:"flex",width:"55px",justifyContent:"space-between"},delete:{cursor:"pointer",width:"55px",transition:".3s","&:hover":{opacity:"0.6"},"&:active":{opacity:"0.9"}},cardHeader:{display:"flex",justifyContent:"space-between"},listItem:{display:"flex",justifyContent:"space-between"},modifyInputLight:{border:"0",outline:"0",fontSize:"16px",width:"160px",backgroundColor:"rgba(0, 0, 0, 0)",color:"#000"},modifyInputDark:{border:"0",outline:"0",fontSize:"16px",width:"160px",backgroundColor:"rgba(0, 0, 0, 0)",color:"#fff"},todoContent:{display:"flex",justifyContent:"space-between"}}})(S),j=Object(y.createMuiTheme)({palette:{type:"light"}}),O=Object(y.createMuiTheme)({palette:{type:"dark"}}),M=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).toggleDarkMode=function(){var e=t.state.isDarkMode;t.setState({isDarkMode:!e})},t.undo=function(){var e=t.state,o=e.history,i=e.historyStep;if(1<=i){var a=Object(d.a)(o[i-1]);t.setState({historyStep:i-1,todoList:a,isRecordingHistory:!1})}},t.redo=function(){var e=t.state,o=e.history,i=e.historyStep;if(i<=o.length-2){var a=Object(d.a)(o[i+1]);t.setState({historyStep:i+1,todoList:a,isRecordingHistory:!1})}},t.deleteTodoList=function(){window.confirm("\u78ba\u5b9a\u8981\u5c07 Todo List \u7684\u8cc7\u6599\u5168\u90e8\u522a\u9664\uff1f")&&(window.localStorage.removeItem("todoList"),window.localStorage.removeItem("id"),window.localStorage.removeItem("isDarkMode"),t.setState({todoList:[]}))},t.inputChange=function(e){t.setState({inputValue:e.target.value})},t.addTodoSubmit=function(e){return 13===e.keyCode?t.addTodo():0},t.addTodo=function(){var e=t.state,o=e.todoList,i=e.id,a=e.inputValue,n=t.state,r=n.history,s=n.historyStep;""!==a?t.setState({history:s<r.length-1?E(r,s):r,todoList:[].concat(Object(d.a)(o),[{id:i,value:a,modifyValue:a,isModifying:!1,checked:!1}]),inputValue:"",id:i+1,isRecordingHistory:!0}):alert("\u8acb\u8f38\u5165\u5167\u5bb9")},t.checkTodo=function(e){var o=t.state,i=o.todoList,a=o.checkSwitch,n=Object(s.a)({},i.find(function(t){return t.id===e.id}));n.checked=!n.checked;var r=t.state,d=r.history,c=r.historyStep;t.setState({history:c<d.length-1?E(d,c):d,todoList:i.map(function(t){return t.id===e.id?n:t}),checkSwitch:!a,isRecordingHistory:!0})},t.removeTodo=function(e){var o=t.state.todoList,i=t.state,a=i.history,n=i.historyStep;t.setState({history:n<a.length-1?E(a,n):a,todoList:o.filter(function(t){return t.id!==e.id}),isRecordingHistory:!0})},t.modifyTodo=function(e){var o=t.state.todoList,i=Object(s.a)({},o.find(function(t){return t.id===e.id}));i.isModifying=!0,t.setState({todoList:o.map(function(t){return t.id===e.id?i:t}),isModifying:!0})},t.modifyTodoDone=function(e,o){if(o){var i=t.state.todoList,a=Object(s.a)({},i.find(function(t){return t.id===e.id}));a.modifyValue=o,a.value=o,a.isModifying=!1;var n=i.map(function(t){return t.id===e.id?a:t}),r=t.state,d=r.history,c=r.historyStep;t.setState({history:c<d.length-1?E(d,c):d,todoList:n,isModifying:!1,isRecordingHistory:!0})}else alert("\u8acb\u8f38\u5165\u4fee\u6539\u8cc7\u6599")},t.state={inputValue:"",progress:100,todoList:[],id:0,historyStep:0,history:[[]],isRecordingHistory:!0,checkSwitch:!1,isDarkMode:!1,isModifying:!1},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("unload",function(){var e=t.state,o=e.todoList,i=e.id,a=e.isDarkMode;window.localStorage.setItem("todoList",JSON.stringify(o)),window.localStorage.setItem("id",i),window.localStorage.setItem("isDarkMode",JSON.stringify(a))});var e=window.localStorage.getItem("id"),o=JSON.parse(window.localStorage.getItem("todoList")),i=JSON.parse(window.localStorage.getItem("isDarkMode"));o&&e&&this.setState({id:e,todoList:o,isDarkMode:i})}},{key:"componentDidUpdate",value:function(t,e){var o=this.state.todoList;o!==e.todoList&&(0!==o.length?this.setState({progress:C(o)}):this.setState({progress:100}));var i=this.state.isDarkMode,a=document.querySelector("body");if(a.style.backgroundColor=i?"#333":"#fff",this.state.isRecordingHistory){var n=this.state,r=n.history,s=n.historyStep;o.length!==e.todoList.length&&this.setState({historyStep:s+1,history:[].concat(Object(d.a)(r),[o])}),this.state.checkSwitch!==e.checkSwitch&&this.setState({historyStep:s+1,history:[].concat(Object(d.a)(r),[o])});var c=this.state.isModifying;c===e.isModifying||c||this.setState({historyStep:s+1,history:[].concat(Object(d.a)(r),[o])})}}},{key:"render",value:function(){var t=this.state,e=t.isDarkMode,o=t.isModifying,i=t.inputValue,n=t.todoList,r=t.progress,s=this.props.classes;return a.a.createElement(y.MuiThemeProvider,{theme:e?O:j},a.a.createElement("div",{className:e?s.darkTheme:s.lightTheme},a.a.createElement(g,{isDarkMode:e,toggleDarkMode:this.toggleDarkMode}),a.a.createElement(b,{isDarkMode:e,inputValue:i,inputChange:this.inputChange,addTodo:this.addTodo,addTodoSubmit:this.addTodoSubmit}),a.a.createElement(w,{isDarkMode:e,isModifying:o,todoList:n,progress:r,undo:this.undo,redo:this.redo,deleteTodoList:this.deleteTodoList,checkTodo:this.checkTodo,removeTodo:this.removeTodo,modifyTodo:this.modifyTodo,modifyTodoDone:this.modifyTodoDone})))}}]),e}(i.Component);function C(t){for(var e=0,o=0;o<t.length;o++)t[o].checked&&e++;return e/t.length*100}function E(t,e){return t.filter(function(t,o){return o<=e})}var D=Object(y.withStyles)(function(){return{lightTheme:{color:"#666"},darkTheme:{color:"#eee"}}})(M);r.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[5417,2,1]]]);
//# sourceMappingURL=main.cb6e9ab8.chunk.js.map