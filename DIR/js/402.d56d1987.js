"use strict";(self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[]).push([[402],{402:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var o=function(){var e=this,t=e._self._c;return t("div",{class:"fr"===e.lang?"fr":"en",attrs:{id:"meets"}},[e.$featured_meets.length>0?t("div",{staticClass:"featured"},[e.$featured_meets[0].fields.Image.length>0?t("div",{staticClass:"featured_card",style:`background-image: url(${e.$featured_meets[0].fields.Image[0].url})`}):e._e(),t("router-link",{staticClass:"learnmore",attrs:{to:e.$featured_meets[0].fields.Link?e.$featured_meets[0].fields.Link:""}},[e._v(" "+e._s("en"===e.lang?"Learn More":"En savoir plus")+" ")])],1):e._e(),t("div",{staticClass:"title-section"},[t("h1",{staticClass:"header"},[e._v(e._s(e.$smalltext))]),t("div",{staticClass:"today"},[t("div",{staticClass:"small breakword",attrs:{id:"currentLocation"}},[t("h3",[t("img",{staticClass:"icon",attrs:{alt:"Location icon",src:s(4090)}}),t("span",{staticClass:"location-text",domProps:{innerHTML:e._s(e.$store.state.readable_location)}})])]),t("div",{staticClass:"small",attrs:{id:"currentDate"}},[t("h3",[t("img",{staticClass:"icon",attrs:{alt:"Calendar icon",src:s(1375)}}),t("div",{staticClass:"date date-text breakword"},[t("span",[t("h3",[e._v(e._s(e.todaysDate("month").slice(0,3))+". "+e._s(e.todaysDate("day"))+", "+e._s(e.todaysDate("year")))])])])])])]),t("div",{staticClass:"select"},[t("div",{class:"dropdown-wrapper"},[t("p",{staticClass:"label"},[e._v(e._s(e.$sort_CTA))]),t("div",{staticClass:"dropdown"},[t("p",{staticClass:"mainoption",on:{click:e.showDropdownHandler}},[e._v(e._s(Number.isInteger(e.activeFilter)?"fr"===e.lang?`Rayon de ${e.activeFilter} km`:`Within ${e.activeFilter} km`:e.activeFilter)+" "),t("span",{class:"chevron "+(e.showDropdown?"up":"down")},[e._v("▼")])]),t("ul",{style:e.showDropdown?"height: auto;":"height: 0%;"},[t("li",{on:{click:function(t){return e.sortBy("Date")}}},[e._v("Date")]),t("li",{class:""+(e.your_location?"":"disabled"),on:{click:function(t){return e.sortBy("Distance")}}},[e._v("Distance")]),t("li",{class:""+(e.your_location?"":"disabled"),on:{click:function(t){return e.sortBy(10)}}},[e._v(e._s("fr"===e.lang?"Rayon de 10 km":"Within 10 km"))]),t("li",{class:""+(e.your_location?"":"disabled"),on:{click:function(t){return e.sortBy(20)}}},[e._v(e._s("fr"===e.lang?"Rayon de 20 km":"Within 20 km"))]),t("li",{class:""+(e.your_location?"":"disabled"),on:{click:function(t){return e.sortBy(50)}}},[e._v(e._s("fr"===e.lang?"Rayon de 50 km":"Within 50 km"))]),t("li",{class:""+(e.your_location?"":"disabled"),on:{click:function(t){return e.sortBy(100)}}},[e._v(e._s("fr"===e.lang?"Rayon de 100 km":"Within 100 km"))])])])]),t("div",{staticClass:"dropdown-wrapper"},[t("p",{staticClass:"provincetitle label"},[e._v("Province")]),t("div",{staticClass:"dropdown"},[t("p",{staticClass:"mainoption",on:{click:e.showProvDropdownHandler}},[e._v(e._s("fr"===e.lang?e.activeProvince.fr:e.activeProvince.en)+" "),t("span",{class:"chevron "+(e.showProvDropdown?"up":"down")},[e._v("▼")])]),t("ul",{style:e.showProvDropdown?"height: auto; ":"height: 0%; "},e._l(e.provinces,(function(s,o){return t("li",{key:o,on:{click:function(t){return e.sortByProvince(s)}}},[e._v(e._s("fr"===e.lang?s.fr:s.en))])})),0)])]),t("form",{ref:"searchform",staticClass:"search",on:{submit:function(t){return t.preventDefault(),e.search.apply(null,arguments)}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:"en"===e.lang,expression:"lang==='en'"}],staticClass:"label"},[e._v("Search")]),t("p",{directives:[{name:"show",rawName:"v-show",value:"fr"===e.lang,expression:"lang==='fr'"}],staticClass:"label"},[e._v("Rechercher")]),t("input",{ref:"search",staticClass:"text",attrs:{type:"text",placeholder:"en"===e.lang?"Search":"Rechercher"},on:{change:e.search}})])])]),e.meets.length?t("div",{staticClass:"meets_cards"},e._l(Math.min(e.meetsLoadedIndex,e.maxMeetsLoaded),(function(s,o){return t("transition-group",{key:o+e.meetsLoadedIndex,attrs:{name:"meets"}},[e.meets[o]?t("router-link",{key:o+"",staticClass:"meet_card_link",style:`transition-delay: ${100*(o%10+1)}ms`,attrs:{name:"meet_card_link",to:!e.meets[o].url||e.meets[o].Cancelled||e.meets[o].Postponed?"":`./${e.meets[o].url}`}},[t("div",{class:`meet_card \n        ${e.meets[o].Today?"todaymeet":""} \n        ${e.meets[o].Tomorrow?"tomorrowmeet":""}`,style:`background-image: url(${e.meets[o].Image?e.meets[o].Image[0].url:""})`},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.meets[o].Cancelled||e.meets[o].Postponed,expression:"meets[i].Cancelled || meets[i].Postponed"}],staticClass:"alertmessage"},["en"===e.lang?t("h3",{class:""+(e.meets[o].Cancelled?"cancelled":"postponed"),domProps:{innerHTML:e._s(e.meets[o].Cancelled?"CANCELLED":"POSTPONED")}}):t("h3",{class:""+(e.meets[o].Cancelled?"cancelled":"postponed"),domProps:{innerHTML:e._s(e.meets[o].Cancelled?"ANNULÉ":"REPORTÉ")}})]),t("div",{staticClass:"meet_card_inner"},[t("div",{staticClass:"title"},[e.meets[o].Name?t("h2",[e._v(e._s(e.meets[o].Name))]):t("h2",[e._v("Entering...")]),e.meets[o].Town&&e.meets[o].Province?t("h3",{staticClass:"location"},[e._v(e._s(e.meets[o].Town)+", "+e._s(e.meets[o].Province))]):e._e()]),t("div",{staticClass:"date"},["en"===e.lang?t("span",[e.meets[o].Month&&e.meets[o].Day?t("h3",{staticClass:"month"},[e._v(e._s(e.meets[o].Month.slice(0,3))+". "+e._s(e.meets[o].Day))]):e._e()]):"fr"===e.lang?t("span",[e.meets[o].Month&&e.meets[o].Day?t("h3",{staticClass:"month"},[e._v(e._s(e.meets[o].Day)+" "+e._s(e.meets[o].Month.slice(0,3))+".")]):e._e()]):e._e(),t("h3",{staticClass:"time"},[e._v(e._s(e.meets[o].Time))])])])])]):e._e(),e.meets[o]?t("br",{key:o+"br"}):e._e()],1)})),1):t("div",{staticClass:"no-results"},[t("p",[e._v(e._s("fr"===e.lang?"Aucun résultat.":"No Results."))])]),t("transition",{attrs:{name:"meets",appear:""}},[t("div",{staticClass:"loading-section"},[t("small",{directives:[{name:"show",rawName:"v-show",value:"en"===e.lang,expression:"lang === 'en'"}],staticClass:"loadingstatus"},[e._v(e._s(Math.min(e.meets.length,e.meetsLoadedIndex))+"/ "+e._s(e.meets.length)+" "),t("span",{directives:[{name:"show",rawName:"v-show",value:"en"===e.lang,expression:"lang === 'en'"}]},[e._v(" loaded.")]),t("span",{directives:[{name:"show",rawName:"v-show",value:"fr"===e.lang,expression:"lang === 'fr'"}]},[e._v(" téléchargés.")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:Math.min(e.meets.length,e.meetsLoadedIndex)<e.meets.length,expression:"Math.min(meets.length, meetsLoadedIndex) < meets.length"}],staticClass:"loadingMore"},[t("h2",{directives:[{name:"show",rawName:"v-show",value:"en"===e.lang,expression:"lang === 'en'"}],staticClass:"loadmorebutton",on:{click:e.loadMore}},[e._v("Load More")]),t("h2",{directives:[{name:"show",rawName:"v-show",value:"fr"===e.lang,expression:"lang === 'fr'"}]},[e._v("En télécharger plus")])])])])],1)},a=[],i=(s(6699),s(3822)),r={name:"MeetsList",components:{},watch:{scroll(){this.$store.commit("setScrollY",document.getElementById("app").scrollTop)},meetsList:{handler(e){this.meets=e,void 0===this.activeProvince?this.$store.commit("setActiveProvince",{en:"Ontario",fr:"Ontario"}):this.$store.commit("setActiveProvince",this.activeProvince),this.$meets&&this.$meets.length>0&&this.sortByProvince(this.activeProvince)},deep:!0,immediate:!0}},props:{scroll:{type:Event}},computed:{...(0,i.rn)(["maxMeetsLoaded","meetsLoadedIndex","your_location","lang","activeFilter","activeProvince","scrollY","meetsList"])},methods:{requestLocation(){console.log("Requesting to make location API call"),this.$geoAPI.init()},todaysDate(e){return"month"===e?"fr"===this.lang?(new Date).toLocaleString("fr-FR",{month:"long"}):(new Date).toLocaleString("en-US",{month:"long"}):"day"===e?(new Date).toString().split(" ")[2]:"year"===e?(new Date).toString().split(" ")[3]:void 0},loadMore(){this.$store.commit("setMeetsLoadedIndex",this.meetsLoadedIndex+10)},showDropdownHandler(){this.showDropdown=!this.showDropdown,this.showDropdown&&(this.showProvDropdown=!1)},showProvDropdownHandler(){this.showProvDropdown=!this.showProvDropdown,this.showProvDropdown&&(this.showDropdown=!1)},location(){return this.your_location&&this.your_location.city?`${this.your_location.city}, ${this.your_location.state_code}, ${this.your_location.country}`:this.locationCTA},sortByProvince(e){if(this.$refs.searchform&&this.$refs.searchform.reset(),"Canada-Wide"===e.en)return this.meets=[...this.$meets],this.meets_sorted_by_province=[...this.$meets],this.showProvDropdown=!1,this.$store.commit("setActiveProvince",e),this.sortBy(this.activeFilter),void this.$store.commit("setFilteredMeets",this.meets);this.meets_sorted_by_province=[...this.$meets].filter((t=>t.Province===e.en)),this.meets=this.meets_sorted_by_province,this.showProvDropdown=!1,this.$store.commit("setActiveProvince",e),this.sortBy(this.activeFilter),this.$store.commit("setFilteredMeets",this.meets_sorted_by_province)},search(){this.$refs.search.value?this.meets=[...this.$meets].filter((e=>JSON.stringify(e).toLowerCase().includes(this.$refs.search.value.toLowerCase()))):this.sortByProvince(this.activeProvince)},sortBy(e){return this.$refs.searchform&&this.$refs.searchform.reset(),this.$store.commit("setActiveFilter",e),"Date"===e?(this.meets=this.meets_sorted_by_province,void(this.showDropdown=!1)):"Distance"===e?(this.meets=[...this.meets_sorted_by_province].sort(((e,t)=>e.DistanceFromMe-t.DistanceFromMe)),void(this.showDropdown=!1)):Number.isInteger(e)?(this.$store.commit("setActiveFilter",e),this.showDropdown=!1,void(this.meets=[...this.meets_sorted_by_province].filter((t=>t.DistanceFromMe<=e)))):void 0}},data(){return{provinces:[{en:"Alberta",fr:"Alberta"},{en:"British Columbia",fr:"Colombie-Britannique"},{en:"Manitoba",fr:"Manitoba"},{en:"New Brunswick",fr:"Nouveau-Brunswick"},{en:"Newfoundland and Labrador",fr:"Terre-Neuve-et-Labrador"},{en:"Northwest Territories",fr:"Territoires du Nord-Ouest"},{en:"Nova Scotia",fr:"Nouvelle-Écosse"},{en:"Nunavut",fr:"Nunavut"},{en:"Ontario",fr:"Ontario"},{en:"Prince Edward Island",fr:"Île-du-Prince-Édouard "},{en:"Quebec",fr:"Québec"},{en:"Saskatchewan",fr:"Saskatchewan"},{en:"Yukon",fr:"Yukon"},{en:"Canada-Wide",fr:"À travers le Canada"}],meets:this.$meets,meets_sorted_by_province:this.$meets,showDropdown:!1,showProvDropdown:!1,locationCTA:"Enable location, then click me."}},mounted(){void 0===this.activeProvince?this.$store.commit("setActiveProvince",{en:"Ontario",fr:"Ontario"}):this.$store.commit("setActiveProvince",this.activeProvince),document.getElementById("app").scrollTo(0,this.scrollY)}},n=r,l=s(1001),c=(0,l.Z)(n,o,a,!1,null,"2829b80e",null),d=c.exports},1375:function(e,t,s){e.exports=s.p+"img/Calendar.5999bc3e.svg"},4090:function(e,t,s){e.exports=s.p+"img/Location.076cffe1.svg"}}]);
//# sourceMappingURL=402.d56d1987.js.map