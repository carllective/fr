(function(){"use strict";var e={9243:function(e,t,a){a(6699);var s=a(6369),r=function(){var e=this,t=e._self._c;return t("div",{class:"fr"===e.lang?"fr":"en",attrs:{id:"app"}},[t("div",{attrs:{id:"copyMeetsTodayText"},on:{click:e.copyMeetsTodayText}}),t("div",{attrs:{id:"copyMeetsTomorrowText"},on:{click:e.copyMeetsTomorrowText}}),t("div",{staticClass:"logobar"},[t("ul",{staticClass:"logobar-inner"},[t("li",{staticClass:"logoli"},[t("router-link",{staticClass:"logolink",attrs:{to:"./"}},[t("img",{staticClass:"logo",attrs:{alt:"Carllective logo",src:a(4804)}})])],1),t("ul",{staticClass:"desktop nav"},[t("li",[t("router-link",{attrs:{to:"/"}},[e._v(e._s("en"===e.lang?"Home":"Accueil"))])],1),t("li",[t("router-link",{attrs:{to:"en"===e.lang?"/calendar":"/calendrier"}},[e._v(e._s("en"===e.lang?"Calendar":"Calendrier"))])],1),t("li",[t("router-link",{attrs:{to:"/map"}},[e._v("Map")])],1),t("li",[t("router-link",{attrs:{to:"/shop"}},[e._v("Shop")])],1),t("li",{staticClass:"submitevent",on:{click:function(t){e.showSubmitForm=!e.showSubmitForm}}},[t("a",{directives:[{name:"show",rawName:"v-show",value:"en"===e.lang,expression:"lang==='en'"}]},[e._v("Submit An Event!")]),t("a",{directives:[{name:"show",rawName:"v-show",value:"fr"===e.lang,expression:"lang==='fr'"}]},[e._v("Soumission d'Événement!")])]),e._m(0)]),e._m(1)])]),t("transition",{attrs:{appear:"",name:"submit"}},[e.showSubmitForm&&"en"===e.lang?t("div",{staticClass:"submitForm"},[t("div",{staticClass:"close",on:{click:function(t){e.showSubmitForm=!1}}},[t("h2",[e._v("X")])]),t("h2",[e._v("Submit a Car Meet, Automotive Event, or Car Expo/Show!")]),e.successMessage?e._e():t("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("label",[t("p",[e._v("Name")])]),t("input",{ref:"name",attrs:{type:"text"}}),t("br"),t("label",[t("p",[e._v("Date *")])]),t("input",{ref:"date",attrs:{required:"",type:"text"}}),t("br"),t("label",[t("p",[e._v("Instagram @")])]),t("input",{ref:"ig",attrs:{type:"text"}}),t("br"),t("br"),t("label",[t("p",[e._v("Website / Original Post URL *")])]),t("input",{ref:"website",attrs:{required:"",type:"text"}}),t("br"),t("label",[t("p",[e._v("Poster Image")])]),t("input",{ref:"img",attrs:{type:"file",id:"img",name:"img",accept:"image/*"}}),t("input",{staticClass:"button submitbutton",attrs:{type:"submit"}})]),e.successMessage?t("p",{staticClass:"successMessage"},[e._v(e._s(e.successMessage))]):e._e()]):e.showSubmitForm&&"fr"===e.lang?t("div",{staticClass:"submitForm"},[t("div",{staticClass:"close",on:{click:function(t){e.showSubmitForm=!1}}},[t("h2",[e._v("X")])]),t("h2",[e._v("Soumettez un rencontre, un spectacle, ou un événement de voiture!")]),e.successMessage?e._e():t("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("label",[t("p",[e._v("Nom")])]),t("input",{ref:"name",attrs:{type:"text"}}),t("br"),t("label",[t("p",[e._v("Date *")])]),t("input",{ref:"date",attrs:{required:"",type:"text"}}),t("br"),t("label",[t("p",[e._v("Instagram @")])]),t("input",{ref:"ig",attrs:{type:"text"}}),t("br"),t("br"),t("label",[t("p",[e._v("Site-web ou lien original *")])]),t("input",{ref:"website",attrs:{required:"",type:"text"}}),t("br"),t("label",[t("p",[e._v("Image d'affiche")])]),t("input",{ref:"img",attrs:{type:"file",id:"img",name:"img",accept:"image/*"}}),t("input",{staticClass:"button submitbutton",attrs:{type:"submit"}})]),e.successMessage?t("p",{staticClass:"successMessage"},[e._v(e._s(e.successMessage))]):e._e()]):e._e()]),t("router-view",{staticClass:"view",attrs:{scroll:e.scroll}}),t("FooterArea"),t("div",{staticClass:"mobile_logobar"},[t("ul",[t("li",[t("router-link",{staticClass:"mobile_a",attrs:{to:"/"}}),e._v(" Home ")],1),t("li",[t("router-link",{staticClass:"mobile_a",attrs:{to:"/shop"}}),e._v(" "+e._s("en"===e.lang?"Shop":"Magasin")+" ")],1),t("li",[t("router-link",{staticClass:"mobile_a",attrs:{to:"en"===e.lang?"/calendar":"/calendrier"}}),e._v(" "+e._s("en"===e.lang?"Calendar":"Calendrier")+" ")],1),t("li",[t("router-link",{staticClass:"mobile_a",attrs:{to:"/map"}}),e._v(" "+e._s("en"===e.lang?"Map":"Carte")+" ")],1),t("li",{staticClass:"submitevent",on:{click:function(t){e.showSubmitForm=!e.showSubmitForm}}},[t("a",{domProps:{innerHTML:e._s("en"===e.lang?"Submit an Event":"Soumission d'événement")}})])])])],1)},n=[function(){var e=this,t=e._self._c;return t("li",[t("div",{staticClass:"langs"},[t("small",[t("a",{staticClass:"langs_a",attrs:{href:"https://carllective.ca"}},[e._v("English")])]),t("small",[t("a",{staticClass:"langs_a",attrs:{href:"https://fr.carllective.ca"}},[e._v("Français")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"langs mobile"},[t("small",[t("a",{attrs:{href:"https://carllective.ca"}},[e._v("English")])]),t("small",[t("a",{attrs:{href:"https://fr.carllective.ca"}},[e._v("Français")])])])}],o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"footer"}},[t("div",{staticClass:"footer-inner"},[t("a",{staticClass:"button signup",attrs:{href:"http://eepurl.com/h7ok6D"}},[e._v(e._s(e.$CTA))]),"en"===e.lang?t("p",[e._v("© Copyright "+e._s(e.year())+" Carllective. All Rights Reserved. ")]):t("p",[e._v("© Copyright "+e._s(e.year())+" Carllective. Tous droits reservés. ")]),t("p",[e._v(e._s("en"===e.lang?"Developed by ":"Crée par ")),t("a",{attrs:{href:"https://www.instagram.com/designbyrebj",target:"_blank"}},[e._v("@designbyrebj")])])])])},i=[],l=a(3822),c={name:"FooterArea",components:{},watch:{},computed:{...(0,l.rn)(["lang"])},methods:{year(){return(new Date).toString().split(" ")[3]}},data(){return{}},mounted(){}},u=c,p=a(1001),d=(0,p.Z)(u,o,i,!1,null,"4d60abda",null),m=d.exports,f=a(8984),g=a.n(f),h=a(2415);s.ZP.use(l.ZP);var b=new l.ZP.Store({state:{your_location:null,your_ip:null,loading:!0,lang:"en",activeFilter:"Date",activeProvince:{en:"Ontario",fr:"Ontario"},scrollY:0,meetsList:[],meetsLoadingStatus:!1,meetsLoadedIndex:0,maxMeetsLoaded:0,visibleMeets:[],filteredMeets:[]},mutations:{setYourLocation(e,t){s.ZP.set(e,"your_location",t)},setMaxMeetsLoaded(e,t){s.ZP.set(e,"maxMeetsLoaded",t)},setMeetsLoadedIndex(e,t){s.ZP.set(e,"meetsLoadedIndex",t)},setMeetsLoadingStatus(e,t){s.ZP.set(e,"meetsLoadingStatus",t)},setYourIp(e,t){s.ZP.set(e,"your_ip",t)},setLoading(e,t){s.ZP.set(e,"loading",t)},setLang(e,t){s.ZP.set(e,"lang",t)},setActiveFilter(e,t){s.ZP.set(e,"activeFilter",t)},setActiveProvince(e,t){s.ZP.set(e,"activeProvince",t)},setScrollY(e,t){s.ZP.set(e,"scrollY",t)},setMeets(e,t){s.ZP.set(e,"meetsList",t)},setFilteredMeets(e,t){s.ZP.set(e,"filteredMeets",t)},setVisibleMeets(e,t){s.ZP.set(e,"visibleMeets",t)}},actions:{setYourIp(e,t){e.commit("setYourIp",t)},setLoading(e,t){e.commit("setLoading",t)},setLang(e,t){e.commit("setLang",t)},setActiveProvince(e,t){e.commit("setActiveProvince",t)}},plugins:[(0,h.Z)()]}),v=a(3515),y=a(6265),w=new class{constructor(){b.commit("setMeetsLoadedIndex",10),this.offsetMeets=[]}distance(e){return b.state.your_location?g().getDistance([b.state.your_location.lat,b.state.your_location.lon],[e.lat,e.lng]):null}process_latlng(e,t){return new Promise((s=>{var r=a(1059),n=new r({apiKey:"keyaJEowLnEfKAamU"}).base("appTstPp0g20fQA2b"),o=t.split(" ").join("%20");y.get(`https://api.geoapify.com/v1/geocode/search?text=${o}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((e=>({lat:e.data.features[0].properties.lat,long:e.data.features[0].properties.lon}))).then((t=>{n("Table 1").update([{id:e,fields:{Lat:t.lat.toString(),Long:t.long.toString()}}]),s(t)})).catch((e=>{console.warn("Error: ",e+" "+o)}))}))}submitEvent(e){var t=a(1059),s=new t({apiKey:"keyaJEowLnEfKAamU"}).base("appTstPp0g20fQA2b");s("Archival").create([{fields:{Name:"SUBMISSION: "+e.name,Info:`Date: ${e.date}, Instagram: @${e.ig}`,Website_Link:e.website,Image:[{url:e.img}]}}])}uploadImageToField(e,t){var s=a(1059),r=new s({apiKey:"keyaJEowLnEfKAamU"}).base("appTstPp0g20fQA2b");new Promise((t=>{if(e){var s=a(6265),r=e;const n=new FormData;n.append("image",r),s.post("https://api.imgbb.com/1/upload?key=3314dc7a8197bab1f6f1b512c8595eb7",n).then((e=>{t(e.data.data.display_url)}))}else t("")})).then((e=>{r("Table 1").update([{id:t,fields:{Image:[{url:e}],compressed:!0}}])}))}init_airtable2(){return new Promise((e=>{y.get("https://api.airtable.com/v0/appTstPp0g20fQA2b/tbljvU0FGVULYx6rM?api_key=keyaJEowLnEfKAamU").then((t=>{"fr"===b.state.lang?(s.ZP.prototype.$header=t.data.records[0].fields.Header_fr,s.ZP.prototype.$smalltext=t.data.records[0].fields.Small_Text_fr,s.ZP.prototype.$CTA=t.data.records[0].fields.CTA_fr,s.ZP.prototype.$sort_CTA=t.data.records[0].fields.Sort_CTA_fr):(s.ZP.prototype.$header=t.data.records[0].fields.Header,s.ZP.prototype.$smalltext=t.data.records[0].fields.Small_Text,s.ZP.prototype.$CTA=t.data.records[0].fields.CTA,s.ZP.prototype.$sort_CTA=t.data.records[0].fields.Sort_CTA),s.ZP.prototype.$og_image=t.data.records[0].fields.og_image,s.ZP.prototype.$bg_image=t.data.records[0].fields.BG_Pattern[0].url,e(t)}))}))}init_shop(){return new Promise((e=>{y.get("https://api.airtable.com/v0/appTstPp0g20fQA2b/tbljvU0FGVULYx6rM?api_key=keyaJEowLnEfKAamU").then((t=>{s.ZP.prototype.$shop=t.data.records[1].fields,e(t)}))}))}init_shop_items(){return new Promise((e=>{y.get("https://api.airtable.com/v0/appTstPp0g20fQA2b/tbl0HJ8Lm306rhcTU?api_key=keyaJEowLnEfKAamU").then((t=>{s.ZP.prototype.$shopItems=[...t.data.records].sort(((e,t)=>e.fields.Order-t.fields.Order)).filter((e=>!e.fields.Type)),s.ZP.prototype.$externalShopItems=[...t.data.records].sort(((e,t)=>e.fields.Order-t.fields.Order)).filter((e=>e.fields.Type)),e(t)}))}))}init_featured(){return new Promise((e=>{y.get("https://api.airtable.com/v0/appTstPp0g20fQA2b/tbl01fO3kRLHpiEyS?api_key=keyaJEowLnEfKAamU").then((t=>{s.ZP.prototype.$featured_meets=t.data.records,e(t)}))}))}webpify(){y.get("https://api.airtable.com/v0/appTstPp0g20fQA2b/tblkFpWzKkk9IbNIf?api_key=keyaJEowLnEfKAamU").then((async()=>{var e=a(1059);const t=new e({apiKey:"keyaJEowLnEfKAamU"}).base("appTstPp0g20fQA2b");let s=await t("Table 1").select().all();Promise.all(s.map((async e=>new Promise((s=>{"webp"!==e.fields.Image[0].filename.split(".")[1]?(0,v.as)(e.fields.Image[0].url,{}).then((r=>{new Promise((e=>{var t=a(6265);let s=new FormData;s.append("image",r),console.log(r,s),t.post("https://api.imgbb.com/1/upload?key=84c270b8a531c47fb4ec646f3adaeb93",s).then((t=>{e(t.data.data.display_url)}))})).then((a=>{t("Table 1").update([{id:e.id,fields:{Image:[{url:a}]}}]),s()}))})):s()}))))).then((()=>{window.alert("done webpifying!")}))}))}init_airtable(){b.commit("setMaxMeetsLoaded",0);let e=0;return b.commit("setMeetsLoadingStatus",!1),new Promise((t=>{y.get("https://api.airtable.com/v0/appTstPp0g20fQA2b/tblkFpWzKkk9IbNIf?api_key=keyaJEowLnEfKAamU").then((async()=>{var s=a(1059);const r=new s({apiKey:"keyaJEowLnEfKAamU"}).base("appTstPp0g20fQA2b");this.offsetMeets=[],r("Table 1").select({pageSize:100}).eachPage((async(t,a)=>{a(),this.offsetMeets=[...this.offsetMeets,...t],this.queryMeets(),e+=t.length,b.commit("setMaxMeetsLoaded",e)})).then((()=>{b.commit("setMeetsLoadingStatus",!0),console.log("All meets loaded in "+Math.floor(performance.now())/1e3+" seconds.",b.state.meetsLoadingStatus),t()}))}))}))}queryMeetsByProvince(e){"Canada-Wide"===e&&(e=null);var t=a(1059);const s=new t({apiKey:"keyaJEowLnEfKAamU"}).base("appTstPp0g20fQA2b");s("Table 1").select((()=>{if(e)return{filterByFormula:`{Province} = "${e}"`}})()).eachPage((e=>{this.offsetMeets=[...this.offsetMeets,...e],this.queryMeets()}))}queryMeets(){var e=this.offsetMeets.map((e=>({...e.fields,id:e.id}))).filter((e=>{if(e.Date)return parseInt(e.Date.split("-").join(""))>=this.numericDate()})).sort(((e,t)=>{if(e.Date)return parseInt(e.Date.split(":")[0].split("T")[0].split("-").join(""))-parseInt(t.Date.split(":")[0].split("T")[0].split("-").join(""))})),t=0;for(let s=0;s<e.length;s++){if(e[s]["Date"])var a=e[s]["Date"].split(":")[0].split("T")[0].split("-")[1],r=e[s]["Date"].split(":")[0].split("T")[0].split("-")[2],n=e[s]["Date"].split("-")[0];if(e[s]["Lat"]||e[s]["Long"]||!e[s]["Address"]?e[s]["Address"]&&(e[s]["DistanceFromMe"]=this.distance({lat:parseFloat(e[s]["Lat"]),lng:parseFloat(e[s]["Long"])})):this.process_latlng(e[s].id,e[s].Address).then((t=>{e[s]["Lat"]=t.lat,e[s]["Long"]=t.long})),r&&(e[s]["Day"]=r),n&&(e[s]["Year"]=n),a&&"fr"!==b.state.lang){e[s]["Month"]=this.getMonth(a);var o=(new Date).toString().split(" ").splice(0,4).join(" ");o.includes(`${e[s]["Month"].substr(0,3)} ${e[s]["Day"]} ${n}`)&&(e[s]["Today"]=!0),`${e[s]["Month"].substr(0,3)} ${parseInt(e[s]["Day"])}`===this.getNextMonthTomorrow((new Date).toString().split(" ").splice(1,2).join(" "))&&(e[s]["Tomorrow"]=!0)}else if(a&&"fr"===b.state.lang){e[s]["Month"]=this.getMonth_fr(a);var i=(new Date).toLocaleString("fr-FR",{month:"long",day:"2-digit",year:"numeric"});i.normalize("NFD").replace(/\p{Diacritic}/gu,"")===`${e[s]["Day"]} ${e[s]["Month"]} ${n}`.toLowerCase()&&(e[s]["Today"]=!0)}e[s].Name&&(e[s]["url"]=`${e[s].Name.toLowerCase().split(" ").join("-")}-${e[s].Month.toLowerCase()}-${e[s].Day.toLowerCase()}`),t++}t===e.length&&(s.ZP.prototype.$meets=e,b.commit("setMeets",e),b.commit("setVisibleMeets",[...e].slice(0,10)))}numericDate(){return parseInt(`${(new Date).getFullYear()}${("0"+((new Date).getMonth()+1)).slice(-2)}${("0"+(new Date).getDate()).slice(-2)}`)}getMonth_fr(e){switch(e){case"01":return"Janvier";case"02":return"Fevrier";case"03":return"Mars";case"04":return"Avril";case"05":return"Mai";case"06":return"Juin";case"07":return"Juillet";case"08":return"Aout";case"09":return"Septembre";case"10":return"Octobre";case"11":return"Novembre";case"12":return"Decembre"}}getMonth(e){switch(e){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"09":return"September";case"10":return"October";case"11":return"November";case"12":return"December"}}getNextMonthTomorrow(e){switch(e){case"Jan 31":return"Feb 1";case"Feb 28":return"Mar 1";case"Mar 31":return"Apr 1";case"Apr 30":return"May 1";case"May 31":return"June 1";case"June 30":return"July 1";case"July 31":return"Aug 1";case"Aug 31":return"Sep 1";case"Sep 30":return"Oct 1";case"Oct 31":return"Nov 1";case"Nov 30":return"Dec 1";case"Dec 31":return"Jan 1";default:return e.split(" ")[0]+" "+(parseInt(e.split(" ")[1])+1)}}},_=a(2482),P=new class{constructor(){(0,_.Z)(this,"send",(e=>new Promise((function(t,a){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var s=JSON.stringify(e);P.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",s,(function(e){t(e)}))})))),(0,_.Z)(this,"ajaxPost",((e,t,a)=>{var s=P.createCORSRequest("POST",e);s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.onload=function(){var e=s.responseText;null!=a&&a(e)},s.send(t)})),(0,_.Z)(this,"ajax",((e,t)=>{var a=P.createCORSRequest("GET",e);a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send()})),(0,_.Z)(this,"createCORSRequest",((e,t)=>{var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,t,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,t):a=null,a}))}},M=P,T=a(2971),L=a.n(T),C={name:"App",components:{FooterArea:m},watch:{$route(){this.removeEventListeners(),this.addEventListeners()}},computed:{...(0,l.rn)(["loading","lang","meetsLoadedIndex","maxMeetsLoaded","filteredMeets"])},methods:{scrollEvent(){let e=window.pageYOffset,t=document.querySelector("body").getBoundingClientRect().height-(window.innerHeight+100);this.disableScroll||this.meetsLoadedIndex>this.maxMeetsLoaded||this.$nextTick((()=>{e>=t&&this.meetsLoadedIndex<this.filteredMeets.length&&(this.disableScroll=!0,setTimeout((()=>{this.$store.commit("setMeetsLoadedIndex",this.meetsLoadedIndex+10),this.disableScroll=!1}),500))}))},removeEventListeners(){window.removeEventListener("mousewheel",this.scrollEvent),window.removeEventListener("scroll",this.scrollEvent),window.removeEventListener("wheel",this.scrollEvent)},addEventListeners(){let e=(()=>window.navigator.userAgent.includes("iPhone")||window.navigator.userAgent.includes("Mobile")?"mobile":"desktop")();if("/"===window.location.pathname)switch(e){case"mobile":window.addEventListener("scroll",this.scrollEvent);break;case"desktop":window.addEventListener("mousewheel",this.scrollEvent);break}},doimageCompress(){let e=0;setInterval((()=>{this.imageCompress(e),e++}),1e3)},imageCompress(e){let t=[...this.$meets][e].Image[0].url,a=[...this.$meets][e].id;console.log(a,t),fetch(t).then((e=>e.blob())).then((e=>{const t=new File([e],"image.jpeg",{type:e.type});console.log(t);var s={file:t,quality:1,maxWidth:700,maxHeight:700,beforeCompress:function(e){console.log("Image size before compression:",e.size),console.log("mime type:",e.type)},success:function(e){console.log("result:",e),console.log("Image size after compression:",e.size),console.log("mime type:",e.type),console.log("Actual compression ratio:",((t.size-e.size)/t.size*100).toFixed(2)+"%"),w.uploadImageToField(e,a)}};new(L())(s)}))},copyMeetsTodayText(){let e=(new Date).toString().split(" "),t=`EVENTS on ${e[0].toUpperCase()}. ${e[1]} ${e[2]}, ${e[3]}: \n \n`;[...this.$meets].filter((e=>e.Today)).forEach((e=>{t+=`MEET: ${e.Name}\nWHERE: ${e.Address}\nTIME: ${e.Time}\n\n`})),navigator.clipboard.writeText(t)},copyMeetsTomorrowText(){let e="EVENTS on  \n \n";[...this.$meets].filter((e=>e.Tomorrow)).forEach((t=>{e+=`MEET: ${t.Name}\nWHERE: ${t.Address}\nTIME: ${t.Time}\n\n`})),navigator.clipboard.writeText(e)},async submitForm(){new Promise((e=>{if(this.$refs.img.files[0]){var t=a(6265),s=this.$refs.img.files[0];const r=new FormData;r.append("image",s),t.post("https://api.imgbb.com/1/upload?key=3314dc7a8197bab1f6f1b512c8595eb7",r).then((t=>{e(t.data.data.display_url)}))}else e("")})).then((e=>{var t={name:this.$refs.name.value,date:this.$refs.date.value,ig:this.$refs.ig.value,website:this.$refs.website.value,img:e};M.send({SecureToken:"07b8bda7-423f-47ec-9a4d-8705fe0b3747",To:"carllective@rebj.ca",From:"rebjanec@gmail.com",Subject:"carllective.ca submission",Body:`\n          Name: ${this.$refs.name.value} <br/>\n          Date: ${this.$refs.date.value} <br/>\n          Instagram: ${this.$refs.ig.value} <br/>\n          Website: ${this.$refs.website.value} <br/>\n          Image: <img src="${e}"/>\n          `}).then((()=>{this.successMessage="Thank you! Your submission has been sent successfully",this.$refs.form.reset(),w.submitEvent(t),setTimeout((()=>{this.successMessage=null,this.showSubmitForm=!1}),5e3)}))}))}},data(){return{scroll:null,showSubmitForm:!1,successMessage:null,disableScroll:!1}},mounted(){}},A=C,E=(0,p.Z)(A,r,n,!1,null,null,null),S=E.exports,$=a(6265),k=new class{constructor(){}async init(){return new Promise((e=>{$.get("https://api.bigdatacloud.net/data/client-ip").then((e=>e.data.ipString)).then((t=>{var a=[];b.state.your_location&&(a=["string"===typeof b.state.your_location.city,"string"===typeof b.state.your_location.state_code,"string"===typeof b.state.your_location.country]),!b.state.your_location||t!==b.state.your_ip||a.indexOf(!1)>-1?(b.commit("setYourIp",t),this.fetchLocation().then((t=>{e(t),window.location.reload()}))):e(b.state.your_location)}))}))}fetchLocation(){return console.log("setting Location..."),new Promise((e=>{navigator.geolocation.getCurrentPosition((t=>{$.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${t.coords.latitude}&lon=${t.coords.longitude}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((t=>{console.log("making API call"),b.commit("setYourLocation",t.data.features[0].properties),console.log(t.data.features[0].properties.state),b.commit("setActiveProvince",{en:t.data.features[0].properties.state,fr:t.data.features[0].properties.state}),e(t.data.features[0].properties)}),(e=>{console.log(e,"Try again in a minute.")}))}))}))}nearest(e){return new Promise((t=>{if(b.state.your_location){const a={method:"GET",url:`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${b.state.your_location.lat}${b.state.your_location.lon}/nearbyCities`,params:e,headers:{"X-RapidAPI-Key":"6d50373928msh8ea7650abbc2053p1c1465jsn8d11a1823388","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}};$.request(a).then((function(e){t(e.data)})).catch((function(e){console.log("Please set your location",e)}))}else t()}))}},x=a(2631);s.ZP.use(x.Z);const I=new x.Z({base:"/",mode:"history",routes:[{path:"",component:()=>a.e(354).then(a.bind(a,7354))},{path:"/webpify",component:()=>a.e(410).then(a.bind(a,8410))},{path:"/map",component:()=>Promise.all([a.e(449),a.e(617)]).then(a.bind(a,4617))},{path:"/shop",component:()=>a.e(988).then(a.bind(a,7988))},{path:"/calendar",component:()=>a.e(958).then(a.bind(a,7958))},{path:"/calendrier",component:()=>a.e(958).then(a.bind(a,7958))},{path:"/:slug",component:()=>Promise.all([a.e(449),a.e(881)]).then(a.bind(a,2881))},{path:"/?:slug",component:()=>Promise.all([a.e(449),a.e(881)]).then(a.bind(a,2881))}]});var F=I,D=a(7956),Z=a.n(D);function O(){return new Promise((e=>{new s.ZP({store:b,router:F,render:e=>e(S)}).$mount("#app"),e()}))}s.ZP.config.productionTip=!1,s.ZP.use(Z()),window.location.href.includes("fr.")?b.commit("setLang","fr"):b.commit("setLang","en"),w.init_airtable(),s.ZP.prototype.$geoAPI=k,s.ZP.prototype.$geoAPI.init({format:"json"}).then(Promise.all([w.init_airtable2(),w.init_shop(),w.init_shop_items(),w.init_featured()]).then((()=>O())))},4804:function(e,t,a){e.exports=a.p+"img/Carllective Wht.21c6f077.png"}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,n){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],n=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,s){return a.f[s](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{354:"5d6b32c9",410:"45c2c37c",449:"163d4e74",617:"b04afaa5",881:"2c17e171",958:"bc5a4d06",988:"90b249f6"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{354:"87de0782",410:"f9c0136b",617:"131c3896",881:"ca580b7b",958:"d75ca8a3",988:"f55fc065"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="carllective:";a.l=function(s,r,n,o){if(e[s])e[s].push(r);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==s||p.getAttribute("data-webpack")==t+n){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+n),i.src=s),e[s]=[r];var d=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var r=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="DIR/"}(),function(){var e=function(e,t,a,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var r=a[s],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){r=o[s],n=r.getAttribute("data-href");if(n===e||n===t)return r}},s=function(s){return new Promise((function(r,n){var o=a.miniCssF(s),i=a.p+o;if(t(o,i))return r();e(s,i,r,n)}))},r={143:0};a.f.miniCss=function(e,t){var a={354:1,410:1,617:1,881:1,958:1,988:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=s(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,s){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var n=new Promise((function(a,s){r=e[t]=[a,s]}));s.push(r[2]=n);var o=a.p+a.u(t),i=new Error,l=function(s){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(t&&t(s);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9243)}));s=a.O(s)})();
//# sourceMappingURL=app.9841ef5f.js.map