"use strict";(self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[]).push([[282],{4282:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var o=function(){var t=this,s=t._self._c;return s("div",{class:"fr"===t.lang?"fr":"en",attrs:{id:"meets"}},[s("div",{staticClass:"title-section"},[s("h1",{staticClass:"header"},[t._v(t._s(t.$header))]),s("h2",{staticClass:"pre-title"},[t._v(t._s(t.$smalltext))]),s("div",{staticClass:"today"},[s("div",{staticClass:"small",attrs:{id:"currentLocation"},on:{click:function(s){t.location()===t.locationCTA&&t.requestLocation()}}},[s("h3",[s("img",{staticClass:"icon",attrs:{alt:"Location icon",src:e(6639)}}),s("span",{domProps:{innerHTML:t._s(t.location())}})])]),s("div",{staticClass:"small",attrs:{id:"currentDate"}},[s("h3",[s("img",{staticClass:"icon",attrs:{alt:"Calendar icon",src:e(6918)}}),s("div",{staticClass:"date"},[s("span",[s("h4",[t._v(t._s(t.todaysDate("month")))]),s("h3",[t._v(t._s(t.todaysDate("day")))])])])])])]),s("div",{staticClass:"select"},[s("div",{class:"dropdown-wrapper "+(t.your_location?"":"disabled")},[s("p",{staticClass:"label"},[t._v(t._s(t.$sort_CTA))]),s("div",{staticClass:"dropdown"},[s("p",{staticClass:"mainoption",on:{click:t.showDropdownHandler}},[t._v(t._s(Number.isInteger(t.activeFilter)?"fr"===t.lang?`Rayon de ${t.activeFilter} km`:`Within ${t.activeFilter} km`:t.activeFilter)+" "),s("span",{class:"chevron "+(t.showDropdown?"up":"down")},[t._v("▼")])]),s("ul",{style:t.showDropdown?"height: auto;":"height: 0%;"},[s("li",{on:{click:function(s){return t.sortBy("Date")}}},[t._v("Date")]),s("li",{on:{click:function(s){return t.sortBy("Distance")}}},[t._v("Distance")]),s("li",{on:{click:function(s){return t.sortBy(10)}}},[t._v(t._s("fr"===t.lang?"Rayon de 10 km":"Within 10 km"))]),s("li",{on:{click:function(s){return t.sortBy(20)}}},[t._v(t._s("fr"===t.lang?"Rayon de 20 km":"Within 20 km"))]),s("li",{on:{click:function(s){return t.sortBy(50)}}},[t._v(t._s("fr"===t.lang?"Rayon de 50 km":"Within 50 km"))])])])]),s("div",{staticClass:"dropdown-wrapper"},[s("p",{staticClass:"provincetitle label"},[t._v("Province")]),s("div",{staticClass:"dropdown"},[s("p",{staticClass:"mainoption",on:{click:t.showProvDropdownHandler}},[t._v(t._s("fr"===t.lang?t.activeProvince.fr:t.activeProvince.en)+" "),s("span",{class:"chevron "+(t.showProvDropdown?"up":"down")},[t._v("▼")])]),s("ul",{style:t.showProvDropdown?"height: auto; ":"height: 0%; "},t._l(t.provinces,(function(e,o){return s("li",{key:o,on:{click:function(s){return t.sortByProvince(e)}}},[t._v(t._s("fr"===t.lang?e.fr:e.en))])})),0)])])])]),t.meets.length?s("div",{staticClass:"meets_cards"},t._l(t.meets,(function(e,o){return s("router-link",{key:o,staticClass:"meet_card_link",attrs:{name:"meet_card_link",to:`/${e.url}`}},[s("div",{class:"meet_card "+(e.Today?"todaymeet":""),style:`background-image: url(${e.Image?e.Image[0].url:""})`},[s("div",{staticClass:"meet_card_inner"},[s("div",{staticClass:"title"},[e.Name?s("h2",[t._v(t._s(e.Name))]):t._e(),e.Town&&e.Province?s("h3",{staticClass:"location"},[t._v(t._s(e.Town)+", "+t._s(e.Province))]):t._e()]),s("div",{staticClass:"date"},["en"===t.lang?s("span",[e.Month?s("h4",{staticClass:"month"},[t._v(t._s(e.Month))]):t._e(),e.Day?s("h3",{staticClass:"day"},[t._v(t._s(e.Day))]):t._e()]):"fr"===t.lang?s("span",[e.Day?s("h3",{staticClass:"day"},[t._v(t._s(e.Day))]):t._e(),e.Month?s("h4",{staticClass:"month"},[t._v(t._s(e.Month))]):t._e()]):t._e(),s("p",{staticClass:"time"},[s("span",{staticClass:"small"},[t._v(t._s(e.Time))])])])])])])})),1):s("div",[s("p",[t._v(t._s("fr"===t.lang?"Aucun résultat.":"No Results."))])])])},i=[],n=e(3822),r={name:"MeetsList",components:{},watch:{scroll(){this.$store.commit("setScrollY",window.scrollY)}},props:{scroll:{type:Event}},computed:{...(0,n.rn)(["your_location","lang","activeFilter","activeProvince","scrollY"])},methods:{requestLocation(){console.log("Requesting to make location API call"),this.$geoAPI.init()},todaysDate(t){return"month"===t?"fr"===this.lang?(new Date).toLocaleString("fr-FR",{month:"long"}):(new Date).toLocaleString("en-US",{month:"long"}):"day"===t?(new Date).toString().split(" ")[2]:void 0},showDropdownHandler(){this.showDropdown=!this.showDropdown,this.showDropdown&&(this.showProvDropdown=!1)},showProvDropdownHandler(){this.showProvDropdown=!this.showProvDropdown,this.showProvDropdown&&(this.showDropdown=!1)},location(){return this.your_location&&this.your_location.city?`${this.your_location.city}, ${this.your_location.state_code}, ${this.your_location.country}`:this.locationCTA},sortByProvince(t){if("Canada-Wide"===t.en)return this.meets=[...this.$meets],this.meets_sorted_by_province=[...this.$meets],this.showProvDropdown=!1,this.$store.commit("setActiveProvince",t),void this.sortBy(this.activeFilter);this.meets_sorted_by_province=[...this.$meets].filter((s=>s.Province===t.en)),this.meets=this.meets_sorted_by_province,this.showProvDropdown=!1,this.$store.commit("setActiveProvince",t),this.sortBy(this.activeFilter)},sortBy(t){return this.$store.commit("setActiveFilter",t),"Date"===t?(this.meets=this.meets_sorted_by_province,void(this.showDropdown=!1)):"Distance"===t?(this.meets=[...this.meets_sorted_by_province].sort(((t,s)=>t.DistanceFromMe-s.DistanceFromMe)),void(this.showDropdown=!1)):Number.isInteger(t)?(this.$store.commit("setActiveFilter",t),this.showDropdown=!1,void(this.meets=[...this.meets_sorted_by_province].filter((s=>s.DistanceFromMe<=t)))):void 0}},data(){return{provinces:[{en:"Alberta",fr:"Alberta"},{en:"British Columbia",fr:"Colombie-Britannique"},{en:"Manitoba",fr:"Manitoba"},{en:"New Brunswick",fr:"Nouveau-Brunswick"},{en:"Newfoundland and Labrador",fr:"Terre-Neuve-et-Labrador"},{en:"Northwest Territories",fr:"Territoires du Nord-Ouest"},{en:"Nova Scotia",fr:"Nouvelle-Écosse"},{en:"Nunavut",fr:"Nunavut"},{en:"Ontario",fr:"Ontario"},{en:"Prince Edward Island",fr:"Île-du-Prince-Édouard "},{en:"Quebec",fr:"Québec"},{en:"Saskatchewan",fr:"Saskatchewan"},{en:"Yukon",fr:"Yukon"},{en:"Canada-Wide",fr:"À travers le Canada"}],meets:this.$meets,meets_sorted_by_province:this.$meets,showDropdown:!1,showProvDropdown:!1,locationCTA:"Please enable location, then click me."}},mounted(){void 0===this.activeProvince?this.$store.commit("setActiveProvince",{en:"Ontario",fr:"Ontario"}):this.$store.commit("setActiveProvince",this.activeProvince),this.sortByProvince(this.activeProvince),window.scrollTo(0,this.scrollY)}},a=r,c=e(1001),l=(0,c.Z)(a,o,i,!1,null,"005fc0c2",null),d=l.exports},6918:function(t,s,e){t.exports=e.p+"img/Calendar.c8f437a6.svg"},6639:function(t,s,e){t.exports=e.p+"img/Location.83f10a00.svg"}}]);
//# sourceMappingURL=282.430f2939.js.map