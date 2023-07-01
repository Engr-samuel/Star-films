import{_ as k,H as E,F as I,I as K,b as v,r as w,o as s,c as o,a as t,n as z,d as n,w as y,t as l,e as g,f as u,g as _,h as m,p as C,i as V}from"./index-5f1e5627.js";const S={data(){return{movies:[],cast:[],videoKey:null,studios:null,images:null}},components:{Header:E,FooterVue:I,Icon:K},mounted(){this.fetchMovies(),this.fetchCast(),this.fetchVideos(),this.fetchImages(),this.fetchRecommendations()},computed:{limitedCast(){return this.cast.slice(0,5)},formattedRuntime(){const a=Math.floor(this.movies.runtime/60),p=this.movies.runtime%60;return`${a}h ${p}m`}},methods:{fetchMovies(){const a="e322ec768a4787f47c3a2896362e2b67",h=`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${a}`;v.get(h).then(c=>{this.movies=c.data}).catch(c=>{console.error("Error fetching movies:",c)})},fetchVideos(){const a="e322ec768a4787f47c3a2896362e2b67",h=`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${a}`;v.get(h).then(c=>{const e=c.data.results;e.length>0&&(this.videoKey=e[1].key)}).catch(c=>{console.error("Error fetching movies:",c)})},fetchImages(){const a="e322ec768a4787f47c3a2896362e2b67",h=`https://api.themoviedb.org/3/movie/${this.$route.params.id}/images?api_key=${a}`;v.get(h).then(c=>{this.images=c.data.posters}).catch(c=>{console.error("Error fetching movies:",c)})},fetchRecommendations(){const a="e322ec768a4787f47c3a2896362e2b67",h=`https://api.themoviedb.org/3/movie/${this.$route.params.id}/recommendations?api_key=${a}`;v.get(h).then(c=>{this.recommendations=c.data.results}).catch(c=>{console.error("Error fetching movies:",c)})},fetchCast(){const a="e322ec768a4787f47c3a2896362e2b67",h=`https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${a}`;v.get(h).then(c=>{this.cast=c.data.cast}).catch(c=>{console.error("Error fetching movies:",c)})},getLogoPath(a){return`https://image.tmdb.org/t/p/original${a}`}}},d=a=>(C("data-v-d3b9e6bc"),a=a(),V(),a),F={class:"d-none -d-md-none d-lg-block"},M={class:"navbar navbar-expand","aria-label":"Second navbar example"},R={class:"container"},T=d(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),D={class:"collapse navbar-collapse",id:"navbarsExample02"},L=d(()=>t("ul",{class:"navbar-nav me-auto"},null,-1)),N={class:""},B={class:"container content"},P={class:"row"},G={class:"col-lg-8"},H={class:"p-5 pb-2 display-3"},A={class:"d-flex"},j={class:"btn btn-md play-btn bg-white text-black px-4 ml-0 mt-0",style:{margin:"3rem","margin-right":"0.5rem"}},q=d(()=>t("span",null,"Play",-1)),J={key:1},O={class:"container my-5"},Q={class:"row"},U={class:"col-lg-7"},W={class:"container"},X={class:"top d-flex"},Y={class:"title",style:{color:"green","font-weight":"600"}},Z={style:{"padding-left":"10px"},class:"text-secondary"},$={style:{"padding-left":"10px"},class:"text-secondary"},tt={key:0,class:"title text-secondary",style:{"padding-left":"10px"}},et={class:"item my-4"},st=d(()=>t("span",{class:"text-white",style:{"font-weight":"700"}},"Avalable in: ",-1)),ot={class:"title text-white"},it={class:"pt-3 text-secondary"},at={key:0},ct=["src"],nt={class:"col-lg-5 mt-3"},lt={class:"item"},rt=d(()=>t("span",{class:"text-white",style:{"font-weight":"600"}},"Cast:",-1)),dt={class:"item mt-4"},ht=d(()=>t("span",{class:"text-white",style:{"font-weight":"600"}},"Genres:",-1)),_t={class:"item mt-4"},mt=d(()=>t("span",{class:"text-white",style:{"font-weight":"600"}},"Genres:",-1)),pt={class:"bg-white mt-4"},ut={class:"row"},vt=["src"],gt={class:"container"},bt=d(()=>t("h3",{class:"text-white"},"More Like This",-1)),ft={class:"row row-cols-md-4 row-cols-lg-6"},yt=["src"],wt={class:"d-block d-md-block d-lg-none"},xt={class:"navbar navbar-expand bg-black","aria-label":"Second navbar example"},kt={class:"container"},Et=d(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),It={class:"collapse navbar-collapse",id:"navbarsExample02"},Kt=d(()=>t("ul",{class:"navbar-nav me-auto"},null,-1)),zt={class:""},Ct={key:0},Vt=["src"],St={key:0},Ft={class:"text-white p-2",style:{"font-weight":"600","font-size":"2opx"}},Mt={class:"top d-flex p-2"},Rt={class:"title text-success",style:{color:"","font-weight":"600"}},Tt={style:{"padding-left":"10px"},class:"text-secondary"},Dt={style:{"padding-left":"10px"},class:"text-secondary"},Lt={key:0,class:"title text-secondary",style:{"padding-left":"10px"}},Nt={class:"bt p-2"},Bt={class:"btn bg-white text-black",style:{width:"100%","font-weight":"600","border-radius":"4px"}},Pt={class:"btn bg-dark mt-1 text-white",style:{width:"100%","font-weight":"600","border-radius":"4px"}},Gt={class:"overview"},Ht={class:"p-2 text-secondary",style:{"font-size":"14px"}},At={class:"item p-2 pt-0"},jt=d(()=>t("span",{class:"text-white",style:{"font-weight":"600","font-size":"12px"}},"Starring: ",-1)),qt={class:"container mt-3"},Jt=d(()=>t("h3",{class:"text-white pb-3",style:{"border-bottom":"3px solid red"}},"More Like This",-1)),Ot={class:"row"},Qt=["src"];function Ut(a,p,h,c,e,b){const r=w("Icon"),f=w("router-link"),x=w("FooterVue");return s(),o(_,null,[t("main",F,[e.movies?(s(),o("div",{key:0,class:"background-img",style:z({backgroundImage:`url(https://image.tmdb.org/t/p/w1280${e.movies.backdrop_path} )`})},[t("nav",M,[t("div",R,[n(f,{class:"navbar-brand",to:"/"},{default:y(()=>[n(r,{icon:"mingcute:arrow-left-fill",color:"white",width:"40",class:"p-2 mt-1"})]),_:1}),T,t("div",D,[L,t("div",N,[n(r,{icon:"akar-icons:search",color:"white",width:"20",class:"head-add"}),n(f,{class:"navbar-brand",to:"/"},{default:y(()=>[n(r,{icon:"clarity:user-solid",color:"white",width:"20",class:"head-add"})]),_:1})])])])]),t("div",B,[t("div",P,[t("div",G,[t("h1",H,l(e.movies.original_title),1),t("div",A,[t("button",j,[n(r,{icon:"ion:play-sharp",color:"black",width:"30"}),g(),q]),n(r,{icon:"fluent:add-20-regular",color:"white",width:"40",class:"bg-dark p-2 mt-1 add"}),n(r,{icon:"typcn:thumbs-ok",color:"white",width:"40",class:"bg-dark p-2 mt-1 m-2 add"})])])])])],4)):u("",!0),e.movies?(s(),o("div",J,[t("div",O,[t("div",Q,[t("div",U,[t("div",W,[t("div",X,[t("h6",Y,l(e.movies.release_date),1),t("h6",Z,l(b.formattedRuntime),1),t("h6",$,[g(l(e.movies.status)+" ",1),n(r,{icon:"mingcute:check-fill",color:"green"})]),e.movies.adult==!1?(s(),o("h6",tt,[n(r,{icon:"uil:18-plus",color:"green"})])):u("",!0)]),t("div",et,[st,(s(!0),o(_,null,m(e.movies.spoken_languages,i=>(s(),o("span",{key:i.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(i.english_name+", "),1))),128))]),t("h3",ot,l(e.movies.tagline),1),t("p",it,l(e.movies.overview),1),e.videoKey?(s(),o("div",at,[t("iframe",{src:"https://www.youtube.com/embed/"+e.videoKey,class:"iframe",frameborder:"0",allowfullscreen:""},null,8,ct)])):u("",!0)])]),t("div",nt,[t("div",lt,[rt,(s(!0),o(_,null,m(b.limitedCast,i=>(s(),o("span",{key:i.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(i.name+", "),1))),128))]),t("div",dt,[ht,(s(!0),o(_,null,m(e.movies.genres,i=>(s(),o("span",{key:i.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(i.name+", "),1))),128))]),t("div",_t,[mt,(s(!0),o(_,null,m(e.movies.spoken_languages,i=>(s(),o("span",{key:i.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(i.english_name+", "),1))),128))]),t("div",pt,[t("div",ut,[(s(!0),o(_,null,m(e.movies.production_companies,i=>(s(),o("div",{class:"col-lg-3 col-md-3 col-3 py-3 px-4",key:i.id},[t("img",{src:"https://image.tmdb.org/t/p/original/"+i.logo_path,alt:"",class:"img-fluid studio d-flex"},null,8,vt)]))),128))])])])])])])):u("",!0),t("div",gt,[bt,t("div",ft,[(s(!0),o(_,null,m(a.recommendations,i=>(s(),o("div",{class:"col",key:i.id},[t("img",{src:"https://image.tmdb.org/t/p/original/"+i.poster_path,class:"img-fluid mt-3",alt:""},null,8,yt)]))),128))])]),n(x)]),t("main",wt,[t("nav",xt,[t("div",kt,[n(f,{class:"navbar-brand",to:"/"},{default:y(()=>[n(r,{icon:"mingcute:arrow-left-fill",color:"white",width:"40",class:"p-2 mt-1"})]),_:1}),Et,t("div",It,[Kt,t("div",zt,[n(r,{icon:"akar-icons:search",color:"white",width:"20",class:"head-add"}),n(f,{class:"navbar-brand",to:"/"},{default:y(()=>[n(r,{icon:"clarity:user-solid",color:"white",width:"20",class:"head-add"})]),_:1})])])])]),e.videoKey?(s(),o("div",Ct,[t("iframe",{src:"https://www.youtube.com/embed/"+e.videoKey,class:"iframe2",frameborder:"0",allowfullscreen:""},null,8,Vt),e.movies?(s(),o("div",St,[t("h1",Ft,l(e.movies.original_title),1)])):u("",!0),t("div",Mt,[t("h6",Rt,l(e.movies.release_date),1),t("h6",Tt,l(b.formattedRuntime),1),t("h6",Dt,[g(l(e.movies.status)+" ",1),n(r,{icon:"mingcute:check-fill",color:"white"})]),e.movies.adult==!1?(s(),o("h6",Lt,[n(r,{icon:"uil:18-plus",color:"red"})])):u("",!0)]),t("div",Nt,[t("button",Bt,[n(r,{icon:"ion:play-sharp",color:"black",width:"20"}),g(" Play")]),t("button",Pt,[n(r,{icon:"material-symbols:download",color:"white",width:"20"}),g(" Download")])]),t("div",Gt,[t("p",Ht,l(e.movies.overview),1),t("div",At,[jt,(s(!0),o(_,null,m(b.limitedCast,i=>(s(),o("span",{key:i.id,class:"text-secondary",style:{"font-size":"12px","font-weight":"600"}},l(i.name+", "),1))),128))])])])):u("",!0),t("div",qt,[Jt,t("div",Ot,[(s(!0),o(_,null,m(a.recommendations,i=>(s(),o("div",{class:"col-4",key:i.id},[t("img",{src:"https://image.tmdb.org/t/p/original/"+i.poster_path,class:"img-fluid mt-3",alt:""},null,8,Qt)]))),128))])])])],64)}const Xt=k(S,[["render",Ut],["__scopeId","data-v-d3b9e6bc"]]);export{Xt as default};
