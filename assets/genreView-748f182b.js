import{_ as f,I as w,b as v,r as p,o as l,c as d,a as e,d as n,w as g,j as y,t as u,f as x,g as b,h as k,p as V,i as I}from"./index-8c42705b.js";const S={components:{Icon:w},data(){return{genreName:"",videoKey:null,selectedMovieId:null,movies:[]}},created(){this.fetchGenreName(),this.fetchMovies()},methods:{fetchGenreName(){const i="https://api.themoviedb.org/3/genre/movie/list?api_key=e322ec768a4787f47c3a2896362e2b67",a=this.$route.params.id;console.log(a),v.get(i).then(t=>{const c=t.data.genres.find(r=>r.id===parseInt(a));this.genreName=c?c.name:"Unknown Genre"}).catch(t=>{console.error("Error fetching genre name:",t)})},fetchMovies(){const s="e322ec768a4787f47c3a2896362e2b67",i=this.$route.params.id,a=`https://api.themoviedb.org/3/discover/movie?api_key=${s}&with_genres=${i}`;v.get(a).then(t=>{this.movies=t.data.results,this.movies.length>0&&this.showMovieVideo(this.movies[0].id)}).catch(t=>{console.error("Error fetching movie:",t)})},showMovieVideo(s){this.selectedMovieId=s,this.fetchVideos(s),this.scrollToVideoSection()},scrollToVideoSection(){this.$refs.videoSection.scrollIntoView({behavior:"smooth",block:"start"})},fetchVideos(s){const a=`https://api.themoviedb.org/3/movie/${s}/videos?api_key=e322ec768a4787f47c3a2896362e2b67`;v.get(a).then(t=>{const o=t.data.results;o.length>0&&(this.videoKey=o[0].key)}).catch(t=>{console.error("Error fetching movies:",t)})},showMovieDetail(s){return this.$router.push({path:`/movie/details/${s}`,params:{id:s}})},getVideoUrl(s){return`https://www.youtube.com/${s}`}}},h=s=>(V("data-v-03fe7859"),s=s(),I(),s),E={class:"container-fluid"},$=h(()=>e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),C={class:"collapse navbar-collapse",id:"navbarsExample02"},K=h(()=>e("ul",{class:"navbar-nav mx-auto"},[e("span",{class:"navbar-brand mx-auto"},"Star-Films")],-1)),M={class:""},N={class:"container-fluid"},B={style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},G={class:"breadcrumb"},T=h(()=>e("li",{class:"breadcrumb-item"},[e("a",{href:"#",style:{"text-decoration":"none",color:"inherit"}},"Home")],-1)),z=h(()=>e("li",{class:"breadcrumb-item"},"category",-1)),D={class:"breadcrumb-item active","aria-current":"page"},F={class:"container-fluid my-4"},L={class:"text-left text-white"},U={key:0,ref:"videoSection"},j=["src"],H={class:"row g-2"},q=["onClick"],A=["src"];function J(s,i,a,t,o,c){const r=p("Icon"),_=p("router-link");return l(),d(b,null,[e("nav",{class:y(["navbar navbar-expand bg-black",{navbar:!0,scrolled:s.isScrolled}]),"aria-label":"Second navbar example"},[e("div",E,[n(_,{class:"navbar-brand",to:"/"},{default:g(()=>[n(r,{icon:"mingcute:arrow-left-fill",color:"white",width:"40",class:"p-2 mt-1"})]),_:1}),$,e("div",C,[K,e("div",M,[n(r,{icon:"akar-icons:search",color:"white",width:"20",class:"head-add mx-3"}),n(_,{class:"navbar-brand",to:"/"},{default:g(()=>[n(r,{icon:"clarity:user-solid",color:"white",width:"20",class:"head-add"})]),_:1})])])])],2),e("div",N,[e("nav",B,[e("ol",G,[T,z,e("li",D,u(o.genreName),1)])])]),e("div",null,[e("div",F,[e("h2",L,u(o.genreName),1),o.videoKey?(l(),d("div",U,[e("iframe",{src:"https://www.youtube.com/embed/"+o.videoKey,class:"iframe2",frameborder:"0",allowfullscreen:""},null,8,j)],512)):x("",!0),e("div",H,[(l(!0),d(b,null,k(o.movies,m=>(l(),d("div",{class:"col-4 col-md- 3 col-lg-3",key:m.id,onClick:O=>c.showMovieVideo(m.id)},[e("img",{src:"https://image.tmdb.org/t/p/original/"+m.poster_path,class:"img-fluid mt-3",alt:""},null,8,A)],8,q))),128))])])])],64)}const Q=f(S,[["render",J],["__scopeId","data-v-03fe7859"]]);export{Q as default};
