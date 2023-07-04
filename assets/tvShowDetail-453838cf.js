import{_ as S,H as z,F as I,I as C,b as f,r as y,o as t,c as o,a as s,n as K,d as a,w,t as l,e as u,f as v,g as h,h as _,p as V,i as D}from"./index-24fe56e5.js";const N={data(){return{movies:[],cast:[],seasons:[],episodes:[],Enum:"",selectedSeason:1,numberOfSeasons:"",numberOfEpisodes:"",videoKey:null,studios:null,images:null}},components:{Header:z,FooterVue:I,Icon:C},mounted(){this.fetchMovies(),this.fetchCast(),this.fetchImages(),this.fetchRecommendations(),this.showEpisodes(1)},computed:{formattedRuntime(){const n=Math.floor(this.movies.runtime/60),p=this.movies.runtime%60;return`${n}h ${p}m`}},methods:{fetchMovies(){const n="e322ec768a4787f47c3a2896362e2b67",m=`https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=${n}`;f.get(m).then(c=>{this.movies=c.data,this.numberOfSeasons=c.data.number_of_seasons,this.numberOfEpisodes=c.data.number_of_episodes,this.seasons=c.data.seasons}).catch(c=>{console.error("Error fetching movies:",c)})},showEpisodes(n){this.selectedSeason=n;const p="e322ec768a4787f47c3a2896362e2b67",i=`https://api.themoviedb.org/3/tv/${this.$route.params.id}/season/${n}?api_key=${p}`;f.get(i).then(g=>{this.episodes=g.data.episodes,console.log(this.episodes)}).catch(g=>{console.error("Error fetching episodes:",g)})},fetchImages(){const n="e322ec768a4787f47c3a2896362e2b67",m=`https://api.themoviedb.org/3/tv/${this.$route.params.id}/images?api_key=${n}`;f.get(m).then(c=>{this.images=c.data.posters}).catch(c=>{console.error("Error fetching movies:",c)})},fetchRecommendations(){const n="e322ec768a4787f47c3a2896362e2b67",m=`https://api.themoviedb.org/3/tv/${this.$route.params.id}/recommendations?api_key=${n}`;f.get(m).then(c=>{this.recommendations=c.data.results}).catch(c=>{console.error("Error fetching movies:",c)})},fetchCast(){const n="e322ec768a4787f47c3a2896362e2b67",m=`https://api.themoviedb.org/3/tv/${this.$route.params.id}/credits?api_key=${n}`;f.get(m).then(c=>{this.cast=c.data.cast}).catch(c=>{console.error("Error fetching movies:",c)})},showTvDetail(n){return this.$router.push({path:`/tv/details/${n}`,params:{id:n}}).catch(()=>{})&&setTimeout(()=>{window.location.reload()},2e3)},getLogoPath(n){return`https://image.tmdb.org/t/p/original${n}`}}},d=n=>(V("data-v-e80fa9c3"),n=n(),D(),n),T={class:"d-none -d-md-none d-lg-block"},A={class:"navbar navbar-expand navbar-dark","aria-label":"Second navbar example"},F={class:"container-fluid"},O=d(()=>s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1)),R={class:"collapse navbar-collapse",id:"navbarsExample02"},B=d(()=>s("ul",{class:"navbar-nav me-auto"},null,-1)),L={class:""},M={class:"container content"},P={class:"row"},j={class:"col-lg-8"},H={class:"p-5 pb-2 display-3"},G={class:"d-flex"},q={class:"btn btn-md play-btn bg-white text-black px-4 ml-0 mt-0",style:{margin:"3rem","margin-right":"0.5rem"}},J=d(()=>s("span",null,"Play",-1)),Q={key:1},U={class:"container my-5"},W={class:"row"},X={class:"col-lg-7"},Y={class:"container"},Z={class:"top d-flex"},$={class:"title",style:{color:"green","font-weight":"600"}},ss={style:{"padding-left":"0px"},class:"text-secondary"},es={style:{"padding-left":"10px"},class:"text-secondary"},ts={key:0,class:"title text-secondary",style:{"padding-left":"10px"}},os={class:"title text-white"},is={class:"pt-0 text-secondary"},ns={class:"item my-4"},as=d(()=>s("span",{class:"text-white",style:{"font-weight":"700"}},"Avalable in: ",-1)),cs={class:"item my-4 d-flex justify-content-space-between"},ls=d(()=>s("span",{class:"text-white d-flex",style:{"font-weight":"700"}},"Number of Seasons: ",-1)),ds={class:"form-select form-select-sm mb-3","aria-label":".form-select-sm example",style:{width:"30%"}},rs=["onClick"],hs={style:{cursor:"pointer","font-size":"20px","font-weight":"700 !important"}},_s={class:"item my-4"},ms=d(()=>s("span",{class:"text-white",style:{"font-weight":"700"}},[s("h1",null,"Episodes")],-1)),ps={class:"row"},us={class:"card bg-dark"},vs={class:"card-body"},gs={class:"text-secondary d-flex",style:{"font-size":"16px","font-weight":"600"}},fs={class:"pr-1",style:{"padding-right":"5px"}},bs={key:0},ys=["src"],ws={class:"col-lg-5 mt-3"},xs={class:"item"},ks=d(()=>s("span",{class:"text-white",style:{"font-weight":"600"}},"Cast: ",-1)),Es={class:"item mt-4"},Ss=d(()=>s("span",{class:"text-white",style:{"font-weight":"600"}},"Genres: ",-1)),zs={class:"item mt-4"},Is=d(()=>s("span",{class:"text-white",style:{"font-weight":"600"}},"Language: ",-1)),Cs={class:"bg-secondary mt-4",style:{"border-radius":"5px"}},Ks={class:"row"},Vs=["src"],Ds={class:"container"},Ns=d(()=>s("h3",{class:"text-white"},"Recommendations",-1)),Ts={class:"row row-cols-md-4 row-cols-lg-6"},As=["onClick"],Fs=["src"],Os={class:"d-block d-md-block d-lg-none"},Rs={key:0,class:"background-im"},Bs={class:"navbar navbar-expand bg-black","aria-label":"Second navbar example"},Ls={class:"container-fluid"},Ms=d(()=>s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1)),Ps={class:"collapse navbar-collapse",id:"navbarsExample02"},js=d(()=>s("ul",{class:"navbar-nav me-auto"},null,-1)),Hs={class:""},Gs={key:1},qs={key:0},Js=["src"],Qs={key:1,class:"container"},Us=d(()=>s("h3",null,"Opps! No Available Video...",-1)),Ws=[Us],Xs={key:2},Ys={class:"text-white p-2",style:{"font-weight":"600","font-size":"2opx"}},Zs={class:"top d-flex p-2"},$s={style:{"padding-left":"0px"},class:"text-secondary"},se={style:{"padding-left":"10px"},class:"text-secondary"},ee={key:0,class:"title text-secondary",style:{"padding-left":"10px"}},te={class:"bt p-2"},oe={class:"btn bg-white text-black",style:{width:"100%","font-weight":"600","border-radius":"4px"}},ie={class:"btn bg-dark mt-1 text-white",style:{width:"100%","font-weight":"600","border-radius":"4px"}},ne={class:"overview"},ae={class:"p-2 text-secondary",style:{"font-size":"14px"}},ce={class:"item p-2 pt-0"},le=d(()=>s("span",{class:"text-white",style:{"font-weight":"600","font-size":"12px"}},"Starring: ",-1)),de={class:"container"},re={class:"item my-4"},he=d(()=>s("span",{class:"text-white",style:{"font-weight":"600","font-size":"13px"}},"Avalable in: ",-1)),_e={class:"item my-4 d-flex justify-content-space-between"},me=d(()=>s("span",{class:"text-white d-flex",style:{"font-weight":"700"}},"Number of Seasons: ",-1)),pe={class:"form-select form-select-sm mb-3","aria-label":".form-select-sm example",style:{width:"30%"}},ue=["onClick"],ve={style:{cursor:"pointer","font-size":"20px","font-weight":"700 !important"}},ge={class:"item my-4"},fe=d(()=>s("span",{class:"text-white",style:{"font-weight":"700"}},[s("h1",null,"Episodes")],-1)),be={class:"row"},ye={class:"card bg-dark"},we={class:"card-body"},xe={class:"text-secondary d-flex",style:{"font-size":"16px","font-weight":"600"}},ke={class:"pr-1",style:{"padding-right":"5px"}},Ee={class:"container mt-5"},Se=d(()=>s("h3",{class:"text-white pb-3",style:{"border-bottom":"3px solid red"}},"Recommendations",-1)),ze={class:"row"},Ie=["src"];function Ce(n,p,m,c,i,g){const r=y("Icon"),b=y("router-link"),k=y("FooterVue"),E=y("footer-vue");return t(),o(h,null,[s("main",T,[i.movies?(t(),o("div",{key:0,class:"background-img",style:K({backgroundImage:`url(https://image.tmdb.org/t/p/w1280${i.movies.backdrop_path} )`})},[s("nav",A,[s("div",F,[a(b,{class:"navbar-brand",to:"/"},{default:w(()=>[a(r,{icon:"mingcute:arrow-left-fill",color:"white",width:"40",class:"p-2 mt-1"})]),_:1}),O,s("div",R,[B,s("div",L,[a(r,{icon:"akar-icons:search",color:"white",width:"20",class:"head-add"}),a(b,{class:"navbar-brand",to:"/"},{default:w(()=>[a(r,{icon:"clarity:user-solid",color:"white",width:"20",class:"head-add"})]),_:1})])])])]),s("div",M,[s("div",P,[s("div",j,[s("h1",H,l(i.movies.name),1),s("div",G,[s("button",q,[a(r,{icon:"ion:play-sharp",color:"black",width:"30"}),u(),J]),a(r,{icon:"fluent:add-20-regular",color:"white",width:"40",class:"bg-dark p-2 mt-1 add"}),a(r,{icon:"typcn:thumbs-ok",color:"white",width:"40",class:"bg-dark p-2 mt-1 m-2 add"})])])])])],4)):v("",!0),i.movies?(t(),o("div",Q,[s("div",U,[s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[s("h6",$,l(i.movies.release_date),1),s("h6",ss," Airred: "+l(i.movies.first_air_date),1),s("h6",es,l(i.movies.status),1),i.movies.adult==!1?(t(),o("h6",ts,[a(r,{icon:"uil:18-plus",color:"green",width:"20"})])):v("",!0)]),s("h1",os,l(i.movies.original_name),1),s("p",is,l(i.movies.overview),1),s("div",ns,[as,(t(!0),o(h,null,_(i.movies.spoken_languages,e=>(t(),o("span",{key:e.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(e.english_name+", "),1))),128))]),s("div",cs,[ls,s("select",ds,[(t(!0),o(h,null,_(i.seasons,e=>(t(),o("option",{key:e.id,onClick:x=>g.showEpisodes(e.season_number)},[s("span",hs,"Season: "+l(e.season_number),1)],8,rs))),128))])]),s("div",_s,[ms,s("div",ps,[(t(!0),o(h,null,_(i.episodes,e=>(t(),o("div",{class:"col-lg-3 g-2 mt-2",key:e.id},[s("div",us,[s("div",vs,[s("span",gs,[s("h6",fs,[a(r,{icon:"octicon:play-16"}),u(" Episode ")]),u(" "+l(e.episode_number),1)])])])]))),128))])]),i.videoKey?(t(),o("div",bs,[s("iframe",{src:"https://www.youtube.com/embed/"+i.videoKey,class:"iframe",frameborder:"0",allowfullscreen:""},null,8,ys)])):v("",!0)])]),s("div",ws,[s("div",xs,[ks,(t(!0),o(h,null,_(i.cast,e=>(t(),o("span",{key:e.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(e.name+", "),1))),128))]),s("div",Es,[Ss,(t(!0),o(h,null,_(i.movies.genres,e=>(t(),o("span",{key:e.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(e.name+", "),1))),128))]),s("div",zs,[Is,(t(!0),o(h,null,_(i.movies.spoken_languages,e=>(t(),o("span",{key:e.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(e.english_name+", "),1))),128))]),s("div",Cs,[s("div",Ks,[(t(!0),o(h,null,_(i.movies.production_companies,e=>(t(),o("div",{class:"col-lg-3 col-md-3 col-3 py-3 px-4",key:e.id},[s("img",{src:"https://image.tmdb.org/t/p/original/"+e.logo_path,alt:"",class:"img-fluid studio d-flex"},null,8,Vs)]))),128))])])])])])])):v("",!0),s("div",Ds,[Ns,s("div",Ts,[(t(!0),o(h,null,_(n.recommendations,e=>(t(),o("div",{class:"col",key:e.id,onClick:x=>g.showTvDetail(e.id)},[s("img",{src:"https://image.tmdb.org/t/p/original/"+e.poster_path,class:"img-fluid mt-3",alt:""},null,8,Fs)],8,As))),128))])]),a(k)]),s("main",Os,[i.movies?(t(),o("div",Rs,[s("nav",Bs,[s("div",Ls,[a(b,{class:"navbar-brand",to:"/"},{default:w(()=>[a(r,{icon:"mingcute:arrow-left-fill",color:"white",width:"40",class:"p-2 mt-1"})]),_:1}),Ms,s("div",Ps,[js,s("div",Hs,[a(r,{icon:"akar-icons:search",color:"white",width:"20",class:"head-add"}),a(b,{class:"navbar-brand",to:"/"},{default:w(()=>[a(r,{icon:"clarity:user-solid",color:"white",width:"20",class:"head-add"})]),_:1})])])])])])):v("",!0),i.movies?(t(),o("div",Gs,[i.videoKey?(t(),o("div",qs,[s("iframe",{src:"https://www.youtube.com/embed/"+i.videoKey,class:"iframe2",frameborder:"0",allowfullscreen:""},null,8,Js)])):(t(),o("div",Qs,Ws)),i.movies?(t(),o("div",Xs,[s("h1",Ys,l(i.movies.original_title),1)])):v("",!0),s("div",Zs,[s("h6",$s," Airred: "+l(i.movies.first_air_date),1),s("h6",se,[u(l(i.movies.status)+" ",1),a(r,{icon:"mingcute:check-fill",color:"white"})]),i.movies.adult==!1?(t(),o("h6",ee,[a(r,{icon:"uil:18-plus",color:"red"})])):v("",!0)]),s("div",te,[s("button",oe,[a(r,{icon:"ion:play-sharp",color:"black",width:"20"}),u(" Play ")]),s("button",ie,[a(r,{icon:"material-symbols:download",color:"white",width:"20"}),u(" Download ")])]),s("div",ne,[s("p",ae,l(i.movies.overview),1),s("div",ce,[le,(t(!0),o(h,null,_(n.limitedCast,e=>(t(),o("span",{key:e.id,class:"text-secondary",style:{"font-size":"12px","font-weight":"600"}},l(e.name+", "),1))),128))]),s("div",de,[s("div",re,[he,(t(!0),o(h,null,_(i.movies.spoken_languages,e=>(t(),o("span",{key:e.id,class:"text-secondary",style:{"font-size":"13px","font-weight":"600"}},l(e.english_name+", "),1))),128))]),s("div",_e,[me,s("select",pe,[(t(!0),o(h,null,_(i.seasons,e=>(t(),o("option",{key:e.id,onClick:x=>g.showEpisodes(e.season_number)},[s("span",ve,"Season: "+l(e.season_number),1)],8,ue))),128))])]),s("div",ge,[fe,s("div",be,[(t(!0),o(h,null,_(i.episodes,e=>(t(),o("div",{class:"col-6 g-2 col-md-4 col-lg-3 mt-2",key:e.id},[s("div",ye,[s("div",we,[s("span",xe,[s("h6",ke,[a(r,{icon:"octicon:play-16"}),u(" Episode ")]),u(" "+l(e.episode_number),1)])])])]))),128))])])])])])):v("",!0),s("div",Ee,[Se,s("div",ze,[(t(!0),o(h,null,_(n.recommendations,e=>(t(),o("div",{class:"col-4",key:e.id},[s("img",{src:"https://image.tmdb.org/t/p/original/"+e.poster_path,class:"img-fluid mt-3",alt:""},null,8,Ie)]))),128))])]),a(E)])],64)}const Ve=S(N,[["render",Ce],["__scopeId","data-v-e80fa9c3"]]);export{Ve as default};
