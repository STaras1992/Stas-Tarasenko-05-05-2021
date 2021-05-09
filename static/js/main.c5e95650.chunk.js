(this["webpackJsonpherolo-weather"]=this["webpackJsonpherolo-weather"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(19),o=a.n(r),i=a(34),c=(a(87),a(11)),s=a(15),u=a(4),l=a(52),p=a(5),d=a(145),b=a(147),f=a(149),m=a(157),j=a(150),h=a(7),O=a(151),g=a(158),v="SET_IS_LOADING",x="SET_ERROR",y="SET_LOCATION",k="SET_CURRENT_LOCATION",w="SET_WEATHER",T="ADD_FAVORITE_LOCATION",S="REMOVE_FAVORITE_LOCATION",C="UPDATE_FAVORITE_LOCATION",D="SET_FIVE_DAYS_FORECAST",I="SET_THEME",N="SET_TEMPERATURE_UNITS",L="LOAD_FAVORITE_LOCATIONS",B=function(e){return{type:I,payload:e}},z=function(e){return function(t){localStorage.setItem("temperatureUnits",e),t(function(e){return{type:N,payload:e}}(e))}},E=a(2),A=Object(d.a)((function(e){return{root:{height:72,backgroundColor:e.palette.background.header},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},buttonsContainer:Object(p.a)({display:"flex","& .MuiButton-root":{minWidth:"100px",margin:"0.5rem"}},e.breakpoints.down("sm"),{width:"100%",justifyContent:"space-between"}),logo:{display:"flex",alignItems:"center",textDecoration:"none",fontFamily:"Fredoka One, cursive"},icon:{color:"#fff",cursor:"pointer"},divider:{margin:"15px",marginLeft:"25px",background:e.palette.text.primary},toggleButtonsWrapper:{marginRight:"1rem","& span":{color:e.palette.text.primary}},toggleButton:{"&.MuiToggleButton-root.Mui-selected":{backgroundColor:e.palette.primary.main}},routerLinksWrapper:{display:"flex",justifyContent:"space-around",alignItems:"center"},routerLink:{color:e.palette.link.primary,marginRight:"1rem",textDecoration:"none",textTransform:"none"},activeLink:{color:e.palette.link.secondary}}})),W=function(e){e.isLoggedIn,e.onMobileNavOpen;var t=Object(l.a)(e,["isLoggedIn","onMobileNavOpen"]),a=A(),n=Object(c.b)(),r=Object(s.g)(),o=Object(c.c)((function(e){return e.app.theme}));return Object(E.jsx)(b.a,Object(u.a)(Object(u.a)({className:a.root,elevation:0},t),{},{children:Object(E.jsxs)(f.a,{className:a.toolbar,children:[Object(E.jsx)(m.a,{smDown:!0,children:Object(E.jsxs)(i.b,{className:a.logo,to:"/",children:[Object(E.jsx)(j.a,{variant:"h4",color:"primary",children:"Herolo"}),Object(E.jsx)(j.a,{variant:"h4",color:"secondary",children:"Weather"})]})}),Object(E.jsxs)("div",{className:a.buttonsContainer,children:[Object(E.jsxs)(g.a,{className:a.toggleButtonsWrapper,value:o,size:"small",exclusive:!0,onChange:function(e,t){var a;n((a=t,function(e){localStorage.setItem("theme",a),e(B(a))}))},"aria-label":"theme",children:[Object(E.jsx)(O.a,{className:a.toggleButton,value:"light","aria-label":"light-theme",children:"Light"}),Object(E.jsx)(O.a,{className:a.toggleButton,value:"dark","aria-label":"dark-theme",children:"Dark"})]}),Object(E.jsxs)("div",{className:a.routerLinksWrapper,children:[Object(E.jsx)(i.b,{className:Object(h.a)(a.routerLink,Object(p.a)({},a.activeLink,"/"===r.pathname)),to:"/",children:"Main"}),Object(E.jsx)(i.b,{className:Object(h.a)(a.routerLink,Object(p.a)({},a.activeLink,"/favorites"===r.pathname)),to:"/favorites",children:"Favorites"})]})]})]})}))},F=a(20),R=a(152),P=a(9),M=a.n(P),_=a(17),V=a(45),q=a.n(V),K=function(){var e=Object(_.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",{params:{apikey:"YBwmlsbf0mGK6rqDunRlxGtkKGp4emAK",q:"".concat(t.lat,",").concat(t.lon)}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(_.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("https://dataservice.accuweather.com/currentconditions/v1/".concat(t),{params:{apikey:"YBwmlsbf0mGK6rqDunRlxGtkKGp4emAK"}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(_.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t),{params:{apikey:"YBwmlsbf0mGK6rqDunRlxGtkKGp4emAK"}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=a(76),Y={option:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"red":"",fontSize:15,backgroundColor:t.isSelected?"#eee":"",textAlign:"left",cursor:"pointer"})},container:function(e){return Object(u.a)(Object(u.a)({},e),{},{width:"100%"})},control:function(e){return Object(u.a)(Object(u.a)({},e),{},{height:40,minHeight:40,fontSize:16,borderRadius:6,width:"100%",textAlign:"left",cursor:"pointer",paddingLeft:"6px"})},dropdownIndicator:function(e){return Object(u.a)(Object(u.a)({},e),{},{display:"none"})},indicatorSeparator:function(e){return Object(u.a)(Object(u.a)({},e),{},{display:"none"})},valueContainer:function(e){return Object(u.a)(Object(u.a)({},e),{},{padding:0,paddingLeft:2})}},J=function(e){var t=e.value,a=(e.options,e.name),n=e.loadOptions,r=e.onChange,o=e.onInputChange,i=Object(l.a)(e,["value","options","name","loadOptions","onChange","onInputChange"]);return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(H.a,Object(u.a)({name:a,styles:Y,value:t,loadOptions:n,onChange:r,onInputChange:o},i))})},X=function(e){if(!e||0===e.length)return[];return e.map((function(e){return{value:e.Key,label:e.LocalizedName}}))},Q=Object(d.a)((function(e){return{root:{}}})),Z=[{value:"210841",label:"Tehran"},{value:"60592",label:"Tengzhou"},{value:"215854",label:"Tel Aviv"}],$=function(e){var t=e.onLocationChange,a=Q(),r=Object(n.useState)(!1),o=Object(F.a)(r,2),i=o[0],c=o[1],s=Object(n.useState)([]),u=Object(F.a)(s,2),l=u[0],p=u[1],d=Object(n.useState)(null),b=Object(F.a)(d,2),f=b[0],m=b[1],j=Object(n.useState)(""),h=Object(F.a)(j,2),O=h[0],g=h[1],v=function(){var e=Object(_.a)(M.a.mark((function e(t,a){var n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=9;break;case 4:(n=e.sent)?(r=X(n.data),p(r),a(r)):(p([]),a([])),a(l),e.next=10;break;case 9:a(Z);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i&&c(!1)}),[l]),Object(n.useEffect)((function(){f&&t({key:f.value,name:f.label})}),[f]),Object(E.jsx)("div",{className:a.root,children:Object(E.jsx)(J,{inputValue:O,value:f,options:l,name:"locationSearch",getOptionLabel:function(e){return e.label},getOptionValue:function(e){return e.value},isLoading:i,loadOptions:v,onChange:function(e){m(e)},onInputChange:function(e){g(e)},placeholder:"Search location",hideSelectedOptions:!1,loadingMessage:function(){return"Searching..."},noOptionsMessage:function(){return"No results"}})})},ee=a.p+"static/media/city1.5ebf0cb6.jpg",te=a(123),ae=a(153),ne=a.p+"static/media/sun1.9f8ef65d.png",re=a.p+"static/media/sun2.483d912e.png",oe=(a.p,a.p+"static/media/clear2.e9b80fe7.png"),ie=a.p+"static/media/clouds1.c4983350.png",ce=a.p+"static/media/clouds2.bbe51368.png",se=a.p+"static/media/cold.48b7ced3.png",ue=a.p+"static/media/hot.ca4ec20b.png",le=a.p+"static/media/rain1.952e9bac.png",pe=a.p+"static/media/rain2.3201c86e.png",de=(a.p,a.p+"static/media/snow1.51659dbb.png"),be=(a.p,function(e){return e<=2?ne:e<=6?re:e<=11?ie:e<=14?le:e<=18?pe:e<=21?re:e<=24?de:e<=29?ce:30===e?ue:31===e?se:e<=38?oe:ce}),fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],me=function(e){return e.getHours()>7&&e.getHours()<20?"day":"night"},je=Object(d.a)((function(e){var t,a,n;return{root:(t={backgroundColor:e.palette.background.card,boxShadow:e.shadow.primary,width:"90%",marginBottom:"1rem",maxWidth:"280px",height:"300px",display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid #000",borderRadius:"8px",justifyContent:"space-around"},Object(p.a)(t,e.breakpoints.up("sm"),{width:"30%"}),Object(p.a)(t,e.breakpoints.up("md"),{width:"18%"}),Object(p.a)(t,e.breakpoints.up("xl"),{width:"15%"}),Object(p.a)(t,"transition","all 0.4s ease-in-out"),Object(p.a)(t,"&:hover",{transition:"all 0.4s ease-in-out 0.3s",transform:"scale(1.6) translateY(-10%) rotateY(360deg)"}),t),imageWrapper:{display:"flex",justifyContent:"center","& img":Object(p.a)({maxWidth:"200px"},e.breakpoints.up("xl"),{maxWidth:"250px"})},dayTitle:(a={fontWeight:600,fontSize:"2rem"},Object(p.a)(a,e.breakpoints.up("lg"),{fontSize:"2.2rem"}),Object(p.a)(a,e.breakpoints.up("xl"),{fontSize:"2.5rem"}),a),temperatureTitle:(n={fontWeight:700,fontSize:"2.5rem"},Object(p.a)(n,e.breakpoints.up("md"),{fontSize:"2.7rem"}),Object(p.a)(n,e.breakpoints.up("lg"),{fontSize:"3rem"}),Object(p.a)(n,e.breakpoints.up("xl"),{fontSize:"3.5rem"}),n)}})),he=function(e){var t,a,n,r=e.weather,o=je(),i=Object(c.c)((function(e){return e.app.temperatureUnits}));return Object(E.jsxs)(te.a,{className:o.root,children:[Object(E.jsx)(j.a,{className:o.dayTitle,variant:"h3",color:"textPrimary",children:(n=new Date(r.date),fe[n.getDay()])}),Object(E.jsx)("div",{className:o.imageWrapper,children:Object(E.jsx)("img",{src:be(r.icon||1),width:"50%",alt:"weather"})}),Object(E.jsx)(j.a,{className:o.temperatureTitle,variant:"h2",color:"textPrimary",children:"fahrenheit"===i?"".concat(null===r||void 0===r||null===(t=r.temperature)||void 0===t?void 0:t.f,"\xb0F"):"".concat(null===r||void 0===r||null===(a=r.temperature)||void 0===a?void 0:a.c,"\xb0C")})]})},Oe=function(e){return 5*(e-32)/9},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"c",n=(e+t)/2;return n="f"===a?n:Oe(n),Number(Math.round(n))},ve=function(e){return{type:x,payload:e}},xe=function(e){return{type:w,payload:e}},ye=function(e){return{type:D,payload:e}},ke=function(e){return{type:v,payload:e}},we=function(e){return{type:T,payload:e}},Te=function(e){return{type:C,payload:e}},Se=function(e){return{type:v,payload:e}},Ce=function(e){return function(){var t=Object(_.a)(M.a.mark((function t(a){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,Se(!0),a(we({location:e})),a(Ie(e)),Se(!1),t.next=22;break;case 7:t.prev=7,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?13:401===t.t1?15:403===t.t1?17:404===t.t1?19:21;break;case 13:return a(ve("Bad request!")),t.abrupt("break",22);case 15:return a(ve("API authorization failed!")),t.abrupt("break",22);case 17:return a(ve("Permission denied!")),t.abrupt("break",22);case 19:return a(ve("Data not found!")),t.abrupt("break",22);case 21:a(ve("Something went wrong"));case 22:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},De=function(e){return function(){var t=Object(_.a)(M.a.mark((function t(a){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,Se(!0),a({type:S,payload:e}),Se(!1),t.next=21;break;case 6:t.prev=6,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?12:401===t.t1?14:403===t.t1?16:404===t.t1?18:20;break;case 12:return a(ve("Bad request!")),t.abrupt("break",21);case 14:return a(ve("API authorization failed!")),t.abrupt("break",21);case 16:return a(ve("Permission denied!")),t.abrupt("break",21);case 18:return a(ve("Data not found!")),t.abrupt("break",21);case 20:a(ve("Something went wrong"));case 21:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},Ie=function(e){return function(){var t=Object(_.a)(M.a.mark((function t(a){var n,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("production"),t.next=5,G((null===e||void 0===e?void 0:e.key)||e.location.key);case 5:r=t.sent,console.log("response",r),a(Te({location:e,date:r.data[0].LocalObservationDateTime,isDayTime:r.data[0].IsDayTime,icon:r.data[0].WeatherIcon,temperature:{c:r.data[0].Temperature.Metric.Value,f:r.data[0].Temperature.Imperial.Value},weatherText:r.data[0].WeatherText})),t.next=12;break;case 10:console.log("development"),a(Te({location:e,date:"2021-05-08T21:05:00+03:00",isDayTime:!0,icon:1,temperature:{c:25,f:77},weatherText:"Clear"}));case 12:t.next=29;break;case 14:t.prev=14,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?20:401===t.t1?22:403===t.t1?24:404===t.t1?26:28;break;case 20:return a(ve("Bad request!")),t.abrupt("break",29);case 22:return a(ve("API authorization failed!")),t.abrupt("break",29);case 24:return a(ve("Permission denied!")),t.abrupt("break",29);case 26:return a(ve("Data not found!")),t.abrupt("break",29);case 28:a(ve("Something went wrong"));case 29:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},Ne=function(){return function(e){var t;try{e(function(e){return{type:L,payload:e}}(JSON.parse(localStorage.getItem("favoriteLocations")||"[]")))}catch(a){switch(null===a||void 0===a||null===(t=a.response)||void 0===t?void 0:t.status){case 400:e(ve("Bad request!"));break;case 401:e(ve("API authorization failed!"));break;case 403:e(ve("Permission denied!"));break;case 404:e(ve("Data not found!"));break;default:e(ve("Failed to load data"))}}}},Le=Object(d.a)((function(e){var t,a,n;return{root:(t={minHeight:"60vh",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"0 1rem",padding:"1rem"},Object(p.a)(t,e.breakpoints.up("sm"),{margin:"0 5%"}),Object(p.a)(t,e.breakpoints.up("md"),{padding:"2rem"}),Object(p.a)(t,e.breakpoints.up("xl"),{margin:"0 10%"}),t),paper:{boxShadow:e.shadow.primary,background:e.palette.background.paper},cityDataWrapper:Object(p.a)({height:"150px",display:"flex"},e.breakpoints.up("md"),{height:"170px"}),cityData:{width:"70%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",padding:"0 2rem"},cityImageWrapper:Object(p.a)({width:"150px",padding:"auto auto",backgroundImage:"url(".concat(ee,")"),backgroundSize:"cover"},e.breakpoints.up("sm"),{width:"200px"}),weatherText:{margin:"3rem 0","& .MuiTypography-root":{display:"inline-block",fontFamily:"Fredoka One, cursive",transition:"all 0.5s ease-in-out","&:hover":{transition:"all 0.5s ease-in-out 0.2s",transform:"rotateX(360deg) scale(1.5)"}}},cardsContainer:Object(p.a)({display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},e.breakpoints.up("sm"),{flexDirection:"row",flexWrap:"wrap",width:"100%"}),toggleButtonsWrapper:{display:"flex",justifyContent:"flex-end",marginTop:"2rem",marginRight:"2rem","& span":{color:e.palette.text.primary}},toggleButton:{"&.MuiToggleButton-root.Mui-selected":{backgroundColor:e.palette.primary.main}},favoriteButtonContainer:Object(p.a)({width:"100%",display:"flex",margin:"1rem 0",justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"flex-end",alignItems:"flex-start"}),favoriteButton:{backgroundColor:e.palette.background.button.primary,boxShadow:e.shadow.button,border:"1px solid #fb3640",transition:"all 0.3s ease-in-out","&:hover":{borderRadius:"8px",transition:"all 0.3s ease-in-out",transform:"scale(1.1)",backgroundColor:e.palette.background.button.secondary}},locationTitle:(a={fontWeight:500,fontSize:"1.8rem"},Object(p.a)(a,e.breakpoints.up("lg"),{fontSize:"2.1rem"}),Object(p.a)(a,e.breakpoints.up("xl"),{fontSize:"2.3rem"}),a),temperatureTitle:(n={fontWeight:600,fontSize:"2.3rem"},Object(p.a)(n,e.breakpoints.up("md"),{fontSize:"2.4rem"}),Object(p.a)(n,e.breakpoints.up("lg"),{fontSize:"2.8rem"}),Object(p.a)(n,e.breakpoints.up("xl"),{fontSize:"3.0rem"}),n)}})),Be=function(){var e,t,a,r=Le(),o=Object(c.b)(),i=Object(c.c)((function(e){return e.location.location})),s=Object(c.c)((function(e){return e.location.currentLocation})),u=Object(c.c)((function(e){return e.weather.weather})),l=Object(c.c)((function(e){return e.weather.fiveDaysForecast})),p=Object(c.c)((function(e){return e.favorite.favoriteLocations})),d=Object(c.c)((function(e){return e.app.temperatureUnits})),b=Object(n.useState)([]),f=Object(F.a)(b,2),m=f[0],v=f[1],x=Object(n.useState)(!1),y=Object(F.a)(x,2),k=y[0],w=y[1],T=Object(n.useState)(!0),S=Object(F.a)(T,2),C=S[0],D=S[1];return Object(n.useEffect)((function(){var e;console.log("SELECTED  LOCATION EFFECT",i),i&&(o((e=i,function(){var t=Object(_.a)(M.a.mark((function t(a){var n,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=3;break}return t.abrupt("return");case 3:return a(ke(!0)),console.log("production"),t.next=8,G(e.key);case 8:r=t.sent,console.log("response",r),a(xe({location:e,date:r.data[0].LocalObservationDateTime,icon:r.data[0].WeatherIcon,isDayTime:r.data[0].IsDayTime,temperature:{c:r.data[0].Temperature.Metric.Value,f:r.data[0].Temperature.Imperial.Value},weatherText:r.data[0].WeatherText})),t.next=15;break;case 13:console.log("development"),a(xe({location:e,date:"2021-05-08T21:05:00+03:00",isDayTime:!0,icon:1,temperature:{c:25,f:77},weatherText:"Clear"}));case 15:a(ke(!1)),t.next=33;break;case 18:t.prev=18,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?24:401===t.t1?26:403===t.t1?28:404===t.t1?30:32;break;case 24:return a(ve("Bad request!")),t.abrupt("break",33);case 26:return a(ve("API authorization failed!")),t.abrupt("break",33);case 28:return a(ve("Permission denied!")),t.abrupt("break",33);case 30:return a(ve("Data not found!")),t.abrupt("break",33);case 32:a(ve("Something went wrong"));case 33:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}())),o(function(e){return function(){var t=Object(_.a)(M.a.mark((function t(a){var n,r,o;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=3;break}return t.abrupt("return");case 3:return a(ke(!0)),console.log("production"),t.next=8,U(e.key);case 8:r=t.sent,console.log(r),o=r.data.DailyForecasts.map((function(t){return{location:e,date:t.Date,isDayTime:"day"===me(new Date(t.Date)),icon:"day"===me(new Date(t.Date))?t.Day.Icon:t.Night.Icon,temperature:{c:ge(t.Temperature.Minimum.Value,t.Temperature.Maximum.Value,"c"),f:ge(t.Temperature.Minimum.Value,t.Temperature.Maximum.Value,"f")},weatherText:"day"===me(new Date(t.Date))?t.Day.IconFhrase:t.Night.IconFhrase}})),a(ye(o)),t.next=16;break;case 14:console.log("development"),a(ye([{location:e,date:"2021-05-08T21:05:00+03:00",isDayTime:!0,icon:1,temperature:{c:25,f:77},weatherText:"Clear"},{location:e,date:"2021-05-09T21:05:00+03:00",isDayTime:!1,icon:1,temperature:{c:11,f:72},weatherText:"Clouds"},{location:e,date:"2021-05-10T21:05:00+03:00",isDayTime:!0,icon:1,temperature:{c:21,f:82},weatherText:"Rain"},{location:e,date:"2021-05-11T21:05:00+03:00",isDayTime:!0,icon:1,temperature:{c:28,f:71},weatherText:"Sunny"},{location:e,date:"2021-05-12T21:05:00+03:00",isDayTime:!1,icon:1,temperature:{c:20,f:70},weatherText:"Clear"}]));case 16:a(ke(!1)),t.next=34;break;case 19:t.prev=19,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?25:401===t.t1?27:403===t.t1?29:404===t.t1?31:33;break;case 25:return a(ve("Bad request!")),t.abrupt("break",34);case 27:return a(ve("API authorization failed!")),t.abrupt("break",34);case 29:return a(ve("Permission denied!")),t.abrupt("break",34);case 31:return a(ve("Data not found!")),t.abrupt("break",34);case 33:a(ve("Something went wrong"));case 34:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e){return t.apply(this,arguments)}}()}(i)))}),[i]),Object(n.useEffect)((function(){!function(){var e=l.map((function(e){return Object(E.jsx)(he,{weather:e},e.location.key+e.date)}));v(e)}()}),[l]),Object(n.useEffect)((function(){var e,t=null===u||void 0===u||null===(e=u.location)||void 0===e?void 0:e.key;t&&(p.some((function(e){return e.location.key===t}))?w(!0):w(!1))}),[u]),Object(n.useEffect)((function(){if(C)return D(!1);localStorage.setItem("favoriteLocations",JSON.stringify(p))}),[p]),Object(n.useEffect)((function(){}),[]),Object(E.jsxs)(te.a,{className:Object(h.a)(r.paper,r.root),children:[Object(E.jsxs)(R.a,{item:!0,container:!0,justify:"space-between",children:[Object(E.jsx)(R.a,{item:!0,xs:12,md:6,lg:4,children:Object(E.jsxs)("div",{className:r.cityDataWrapper,children:[Object(E.jsx)("div",{className:r.cityImageWrapper}),Object(E.jsxs)("div",{className:r.cityData,children:[Object(E.jsx)(j.a,{className:r.locationTitle,variant:"h4",children:null===u||void 0===u||null===(e=u.location)||void 0===e?void 0:e.name}),Object(E.jsx)(j.a,{className:r.temperatureTitle,variant:"h4",children:"fahrenheit"===d?"".concat(null===u||void 0===u||null===(t=u.temperature)||void 0===t?void 0:t.f,"\xb0F"):"".concat(null===u||void 0===u||null===(a=u.temperature)||void 0===a?void 0:a.c,"\xb0C")})]})]})}),Object(E.jsx)(R.a,{className:r.favoriteButtonContainer,md:6,lg:8,item:!0,children:k?Object(E.jsx)(ae.a,{className:r.favoriteButton,variant:"contained",onClick:function(){o(De(i||s)),w(!1)},children:"Remove from favorites"}):Object(E.jsx)(ae.a,{className:r.favoriteButton,variant:"contained",onClick:function(){o(Ce(i||s)),w(!0)},children:"Add to favorites"})})]}),Object(E.jsx)(R.a,{className:r.weatherText,item:!0,children:Object(E.jsx)(j.a,{variant:"h1",color:"primary",children:null===u||void 0===u?void 0:u.weatherText})}),Object(E.jsx)(R.a,{item:!0,children:Object(E.jsx)("div",{className:r.cardsContainer,children:m})}),Object(E.jsxs)(g.a,{className:r.toggleButtonsWrapper,value:d,size:"small",exclusive:!0,onChange:function(e,t){o(z(t))},"aria-label":"theme",children:[Object(E.jsx)(O.a,{className:r.toggleButton,value:"celsius","aria-label":"celcius",children:"Celcius"}),Object(E.jsx)(O.a,{className:r.toggleButton,value:"fahrenheit","aria-label":"fahrenheit",children:"Fahrenheit"})]})]})};var ze=function(e){return{type:k,payload:e}},Ee=function(e){return{type:v,payload:e}},Ae=function(e){return function(){var t=Object(_.a)(M.a.mark((function t(a){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,a(Ee(!0)),a({type:y,payload:e}),a(Ee(!1)),t.next=21;break;case 6:t.prev=6,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?12:401===t.t1?14:403===t.t1?16:404===t.t1?18:20;break;case 12:return a(ve("Bad request!")),t.abrupt("break",21);case 14:return a(ve("API authorization failed!")),t.abrupt("break",21);case 16:return a(ve("Permission denied!")),t.abrupt("break",21);case 18:return a(ve("Data not found!")),t.abrupt("break",21);case 20:a(ve("Something went wrong"));case 21:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},We=a(155),Fe=a(156);var Re=function(e){return Object(E.jsx)(Fe.a,Object(u.a)({elevation:6,style:{fontSize:"30px"},variant:"filled"},e))},Pe=Object(d.a)((function(e){var t,a;return{root:{marginTop:"calc(72px)",transition:"all 0.5s ease-in-out"},mainContainer:(t={margin:"0 1rem",padding:"1rem"},Object(p.a)(t,e.breakpoints.up("sm"),{margin:"0 5%"}),Object(p.a)(t,e.breakpoints.up("md"),{padding:"2rem"}),Object(p.a)(t,e.breakpoints.up("xl"),{margin:"0 10%"}),t),paper:{padding:e.spacing(2),background:e.palette.background.paper,color:e.palette.text.secondary,justifyContent:"center"},searchContainer:(a={margin:"1rem 1rem"},Object(p.a)(a,e.breakpoints.up("sm"),{margin:"2rem 15%"}),Object(p.a)(a,e.breakpoints.up("xl"),{margin:"3rem 25%"}),a),search:{background:"#393e46",borderRadius:"15px"},searchInput:{color:e.palette.text.primary},searchIcon:{color:e.palette.text.primary},cityDataWrapper:{display:"flex"},cityData:{paddingLeft:"1rem"},cityImageWrapper:{width:"150px",height:"150px",backgroundImage:"url(".concat(ee,")"),backgroundSize:"cover"},cardsContainer:Object(p.a)({display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},e.breakpoints.up("sm"),{flexDirection:"row",width:"100%"})}})),Me=function(){var e=Pe(),t=Object(c.b)(),a=Object(c.c)((function(e){return e.error.error})),r=Object(n.useState)(!1),o=Object(F.a)(r,2),i=o[0],s=o[1],u=function(){s(!1)};return Object(n.useEffect)((function(){a&&!i&&s(!0)}),[a]),Object(E.jsxs)("div",{className:e.root,children:[Object(E.jsxs)(R.a,{container:!0,direction:"column",spacing:1,children:[Object(E.jsx)(R.a,{item:!0,children:Object(E.jsx)("div",{className:e.searchContainer,children:Object(E.jsx)($,{onLocationChange:function(e){t(Ae(e))}})})}),Object(E.jsx)(R.a,{item:!0,container:!0,direction:"column",children:Object(E.jsx)(Be,{})})]}),i&&Object(E.jsx)(We.a,{open:i,autoHideDuration:2e3,onClose:u,children:Object(E.jsx)(Re,{onClose:u,severity:"error",children:a})})]})},_e=Object(d.a)((function(e){var t,a,n,r;return{root:(t={backgroundColor:e.palette.background.card,boxShadow:e.shadow.primary,width:"90%",marginBottom:"1rem",maxWidth:"280px",height:"300px",display:"flex",border:"1px solid #000",borderRadius:"8px",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},Object(p.a)(t,e.breakpoints.up("sm"),{width:"33%"}),Object(p.a)(t,e.breakpoints.up("md"),{width:"18%"}),Object(p.a)(t,e.breakpoints.up("xl"),{width:"15%"}),Object(p.a)(t,"transition","all 0.3s ease-in-out"),Object(p.a)(t,"&:hover",{transition:"all 0.3s ease-in-out",transform:"scale(1.1)"}),t),imageWrapper:{display:"flex",justifyContent:"center","& img":Object(p.a)({maxWidth:"200px"},e.breakpoints.up("xl"),{maxWidth:"250px"})},locationTitle:(a={fontWeight:500,fontSize:"1.8rem"},Object(p.a)(a,e.breakpoints.up("lg"),{fontSize:"2.1rem"}),Object(p.a)(a,e.breakpoints.up("xl"),{fontSize:"2.3rem"}),a),weatherTitle:(n={fontWeight:500,fontSize:"1.8rem"},Object(p.a)(n,e.breakpoints.up("lg"),{fontSize:"2.0rem"}),Object(p.a)(n,e.breakpoints.up("xl"),{fontSize:"2.1rem"}),n),temperatureTitle:(r={fontWeight:600,fontSize:"2.3rem"},Object(p.a)(r,e.breakpoints.up("md"),{fontSize:"2.4rem"}),Object(p.a)(r,e.breakpoints.up("lg"),{fontSize:"2.8rem"}),Object(p.a)(r,e.breakpoints.up("xl"),{fontSize:"3.0rem"}),r)}})),Ve=function(e){var t,a,n=e.locationData,r=e.handleFavoriteSelect,o=_e(),i=Object(c.c)((function(e){return e.app.temperatureUnits}));return Object(E.jsxs)(te.a,{className:o.root,onClick:function(){r(n.location)},children:[Object(E.jsx)(j.a,{className:o.locationTitle,variat:"h3",color:"textPrimary",children:n.location.name}),Object(E.jsx)("div",{className:o.imageWrapper,children:Object(E.jsx)("img",{src:be(n.icon),width:"50%",alt:"weather"})}),Object(E.jsx)(j.a,{className:o.weatherTitle,variant:"h2",color:"textSecondary",children:n.weatherText}),Object(E.jsx)(j.a,{className:o.temperatureTitle,variant:"h2",color:"textPrimary",children:"fahrenheit"===i?"".concat(null===n||void 0===n||null===(t=n.temperature)||void 0===t?void 0:t.f,"\xb0F"):"".concat(null===n||void 0===n||null===(a=n.temperature)||void 0===a?void 0:a.c,"\xb0C")})]})},qe=Object(d.a)((function(e){var t;return{root:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},cardsContainer:Object(p.a)({margin:"2rem 1rem",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},e.breakpoints.up("sm"),{margin:"3rem 1rem",flexDirection:"row",flexWrap:"wrap",width:"100%"}),title:(t={fontWeight:500,fontSize:"3rem"},Object(p.a)(t,e.breakpoints.up("sm"),{fontSize:"3.5rem"}),Object(p.a)(t,e.breakpoints.up("md"),{fontSize:"4rem"}),Object(p.a)(t,e.breakpoints.up("lg"),{fontSize:"5rem"}),t)}})),Ke=function(){var e=qe({}),t=Object(c.b)(),a=Object(s.f)(),r=Object(c.c)((function(e){return e.location.location})),o=Object(c.c)((function(e){return e.favorite.favoriteLocations})),i=Object(n.useState)(!0),u=Object(F.a)(i,2),l=u[0],p=u[1],d=Object(n.useState)([]),b=Object(F.a)(d,2),f=b[0],m=b[1],h=function(e){t(Ae(e))};return Object(n.useEffect)((function(){if(l)return p(!1);a.push("/")}),[r]),Object(n.useEffect)((function(){m(o.map((function(e){return Object(E.jsx)(Ve,{locationData:e,handleFavoriteSelect:h},e.location.key)})))}),[o]),Object(n.useEffect)((function(){console.log(o),o.length>0&&t(function(e){return function(){var t=Object(_.a)(M.a.mark((function t(a){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,console.log(e),e.forEach((function(e){return a(Ie(e))})),t.next=20;break;case 5:t.prev=5,t.t0=t.catch(0),t.t1=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.status,t.next=400===t.t1?11:401===t.t1?13:403===t.t1?15:404===t.t1?17:19;break;case 11:return a(ve("Bad request!")),t.abrupt("break",20);case 13:return a(ve("API authorization failed!")),t.abrupt("break",20);case 15:return a(ve("Permission denied!")),t.abrupt("break",20);case 17:return a(ve("Data not found!")),t.abrupt("break",20);case 19:a(ve("Failed to update data"));case 20:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[]),Object(E.jsxs)("div",{className:e.root,children:[Object(E.jsx)(j.a,{className:e.title,variant:"h1",color:"primary",children:"Favorite locations"}),Object(E.jsx)("div",{className:e.cardsContainer,children:f})]})},Ge=a(154),Ue=a(75),He=Object(Ue.a)({palette:{background:{dark:"#000",light:"#dbe2ef",toggle:"#000",button:{primary:"#fff",secondary:"#fb3640"},card:"#290149",header:"#282846",paper:"#000"},primary:{main:"#00e0ff"},secondary:{main:"#08d9d6"},text:{primary:"#f0f5f9",secondary:"#e1e5ea"},link:{primary:"#08d9d6",secondary:"#fb3640"},title:{primary:"#000",secondary:"#46BBB0",largeTitle:"#46BBB0"}},shadow:{primary:"0 0 10px 5px rgba(255,249,255,0.58)",secondary:"0 0 8px 4px rgba(255,249,255,0.58)",active:"0 0 25px 8px #46BBB0",button:"0 10px 6px -6px #1F1F1F"}}),Ye=Object(Ue.a)({palette:{background:{dark:"#222329",light:"#D9D9D9",header:"#e1f1dd",card:"#a7c5eb",toggle:"#222329",button:{primary:"#fff",secondary:"#fb3640"},paper:"#fff"},primary:{main:"#51c4d3"},secondary:{main:"#890596"},text:{primary:"#1b1a17",secondary:"#646769"},link:{primary:"#890596",secondary:"#fb3640"},title:{primary:"#fff",secondary:"#46BBB0",largeTitle:"#46BBB0"}},shadow:{primary:"0 0 10px 2px #3C4F76",secondary:"0 0 8px 4px rgba(0,0,0,0.8)",active:"0 0 15px 6px #2896CC",button:"0 10px 6px -6px #3D3D3D"}});a(121);var Je=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.app.theme}));return Object(n.useEffect)((function(){e(Ne()),e((function(e){var t=localStorage.getItem("theme");t&&e(B(t))})),e(function(){var e=Object(_.a)(M.a.mark((function e(t){var a,n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=void(navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){return{lat:e.coords.latitude,lon:e.coords.longitude}}),(function(){return null}))))||(n={lat:"32.109333",lon:"34.855499"}),console.log("production"),e.next=7,K(n);case 7:if(r=e.sent,console.log("response",r),r.data&&0!==r.data.length){e.next=11;break}return e.abrupt("return");case 11:t(ze({key:r.data.Key,name:r.data.AdministrativeArea.LocalizedName})),t(Ae({key:r.data.Key,name:r.data.AdministrativeArea.LocalizedName})),e.next=18;break;case 15:console.log("development"),t(ze({key:"215805",name:"Tel aviv"})),t(Ae({key:"215805",name:"Tel aviv"}));case 18:e.next=35;break;case 20:e.prev=20,e.t0=e.catch(0),e.t1=null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status,e.next=400===e.t1?26:401===e.t1?28:403===e.t1?30:404===e.t1?32:34;break;case 26:return t(ve("Bad request!")),e.abrupt("break",35);case 28:return t(ve("API authorization failed!")),e.abrupt("break",35);case 30:return t(ve("Permission denied!")),e.abrupt("break",35);case 32:return t(ve("Data not found!")),e.abrupt("break",35);case 34:t(ve("Something went wrong"));case 35:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(E.jsx)("div",{className:"App ".concat("light"===t?"light-theme":"dark-theme"),children:Object(E.jsxs)(Ge.a,{theme:"light"===t?Ye:He,children:[Object(E.jsx)("header",{children:Object(E.jsx)(W,{})}),Object(E.jsxs)(s.c,{children:[Object(E.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(E.jsx)(Me,{})}}),Object(E.jsx)(s.a,{exact:!0,path:"/favorites",render:function(){return Object(E.jsx)(Ke,{})}})]})]})})},Xe=a(54),Qe=a(74),Ze={isLoading:!1,location:null,currentLocation:null},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(u.a)(Object(u.a)({},e),{},{location:Object(u.a)({},t.payload)});case k:return Object(u.a)(Object(u.a)({},e),{},{currentLocation:t.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.payload});default:return Object(u.a)({},e)}},et=a(44),tt={isLoading:!1,weather:null,fiveDaysForecast:[]},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(u.a)(Object(u.a)({},e),{},{weather:Object(u.a)({},t.payload)});case D:return Object(u.a)(Object(u.a)({},e),{},{fiveDaysForecast:Object(et.a)(t.payload)});case v:return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.payload});default:return Object(u.a)({},e)}},nt={isLoading:!1,favoriteLocations:[]},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(u.a)(Object(u.a)({},e),{},{favoriteLocations:e.favoriteLocations.find((function(e){return e.location.key===t.payload.location.key}))?e.favoriteLocations:[].concat(Object(et.a)(e.favoriteLocations),[t.payload])});case C:return Object(u.a)(Object(u.a)({},e),{},{favoriteLocations:e.favoriteLocations.map((function(e){return e.location.key===t.payload.location.key?t.payload:e}))});case S:return Object(u.a)(Object(u.a)({},e),{},{favoriteLocations:e.favoriteLocations.filter((function(e){return e.location.key!==t.payload.key}))});case L:return Object(u.a)(Object(u.a)({},e),{},{favoriteLocations:Object(et.a)(t.payload)});case v:return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.payload});default:return Object(u.a)({},e)}},ot={theme:"light",temperatureUnits:"celsius"},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{theme:t.payload});case N:return Object(u.a)(Object(u.a)({},e),{},{temperatureUnits:t.payload});default:return Object(u.a)({},e)}},ct={error:null},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{error:t.payload});default:return Object(u.a)({},e)}},ut=Object(Xe.b)({location:$e,weather:at,favorite:rt,app:it,error:st}),lt=Object(Xe.c)(ut,Object(Xe.a)(Qe.a));window.store=lt;var pt=lt;o.a.render(Object(E.jsx)(c.a,{store:pt,children:Object(E.jsx)(i.a,{children:Object(E.jsx)(Je,{})})}),document.getElementById("root"))},87:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.c5e95650.chunk.js.map