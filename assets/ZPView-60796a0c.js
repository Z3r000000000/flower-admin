import{H as p,d as u,_ as m,a as b,b as g,c as w}from"./logo-a2e04645.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,c as d,a as t,t as x,p as l,f as n,r as S,b as a,g as $,h as _,i}from"./index-1c8d90a4.js";const y="/flower-admin/assets/service-b45fac2e.png";const B={name:"ScrollingBox",data(){return{isVisible:!1,counter:0,counterText:""}},mounted(){this.scrollingBoxPosition=this.$el.getBoundingClientRect().top+window.scrollY,window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){window.scrollY>this.scrollingBoxPosition-window.innerHeight?(this.isVisible=!0,this.startCounter()):this.isVisible=!1},startCounter(){this.counterInterval=setInterval(()=>{this.counter++,this.counterText=`У нас более: ${this.counter} клиентов`,this.counter===1e4&&(this.counter=9999)})}}},V=e=>(l("data-v-3b98f556"),e=e(),n(),e),k={id:"content"},I=V(()=>t("div",{style:{height:"10vh"}},null,-1)),C={id:"scrolling-box"},P={style:{color:"black"}};function N(e,f,v,o,h,q){return r(),d("div",k,[I,t("div",C,[t("p",P,x(h.counterText),1)])])}const T=c(B,[["render",N],["__scopeId","data-v-3b98f556"]]);const s=e=>(l("data-v-1e0903f8"),e=e(),n(),e),E={class:"overlay"},H=s(()=>t("div",{class:"logo"},[t("img",{src:u,accesskey:"Логотп"})],-1)),Y=s(()=>t("p",{class:"telephone"},[i("+7 (391) 250-1662 "),t("br"),i("+7 (391) 271-1662")],-1)),Z={class:"content"},D=_('<div class="block" data-v-1e0903f8><h2 class="custom-font" data-v-1e0903f8>Уважаемые заказчики!</h2><p class="custom-font" data-v-1e0903f8>Если у вас есть техника Bobcat, то вы всегда можете обратиться к нам с вопросом связанным с эксплуатацией, сервисным обслуживанием или ремонтом техники. Мы можем оказать содействие в приобретении запасных частей или техники на более выгодных условиях.</p></div><div class="block" data-v-1e0903f8><h2 class="custom-font" data-v-1e0903f8>Мы предлагаем широкий выбор запчастей Bobcat.</h2><p class="custom-font" data-v-1e0903f8> - Фильтр <br data-v-1e0903f8> - Гидравлика <br data-v-1e0903f8> - Шины, диски <br data-v-1e0903f8> - Двигатель <br data-v-1e0903f8> - Навесное оборудование <br data-v-1e0903f8> - Электрика, датчики, фары и др. <br data-v-1e0903f8></p></div>',2),L=s(()=>t("div",{class:"container1"},[t("div",{class:"image"},[t("img",{src:y,alt:"Your Image"})]),t("div",{class:"text"},[t("p",null,"Мы продаем только оригинальные запасные части на минипогрузчики и миниэксаваторы Бобкет, происхождение которых подтверждено прямыми контрактами с производителем, российскими сертификатами соответствия, а также таможенными декларациями и бухгалтерскими документами.")])],-1)),R=_('<footer data-v-1e0903f8><div class="footer" data-v-1e0903f8><div class="row" data-v-1e0903f8><a href="#" data-v-1e0903f8><img src="'+m+'" alt="" data-v-1e0903f8></a><a href="#" data-v-1e0903f8><img src="'+b+'" alt="" data-v-1e0903f8></a><a href="#" data-v-1e0903f8><img src="'+g+'" alt="" data-v-1e0903f8></a><a href="#" data-v-1e0903f8><img src="'+w+'" alt="" data-v-1e0903f8></a></div><div class="row" data-v-1e0903f8><ul data-v-1e0903f8><li data-v-1e0903f8><a href="kompania.html" data-v-1e0903f8>О компании</a></li><li data-v-1e0903f8><a href="#" data-v-1e0903f8>Новости</a></li><li data-v-1e0903f8><a href="#" data-v-1e0903f8>Запчасти и ремонт</a></li><li data-v-1e0903f8><a href="#" data-v-1e0903f8>Техника</a></li><li data-v-1e0903f8><a href="#" data-v-1e0903f8>Контакты</a></li></ul></div><div class="row rbt" data-v-1e0903f8> Компания «НК Сервис» предоставляет спецтехнику в аренду по Красноярску и краю строительным организациям и частным лицам. </div></div></footer>',1),j={__name:"ZPView",setup(e){return(f,v)=>{const o=S("router-link");return r(),d("body",null,[t("header",null,[t("div",E,[a(o,{to:"/"},{default:$(()=>[H]),_:1}),Y])]),a(p),t("div",Z,[D,a(T),L]),R])}}},G=c(j,[["__scopeId","data-v-1e0903f8"]]);export{G as default};
