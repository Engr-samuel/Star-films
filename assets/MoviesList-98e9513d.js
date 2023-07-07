import{_ as k,I as M,g as V,a as m,r as u,o as d,c as h,b as e,e as c,w as _,j as v,k as p,F as f,d as w,h as C,f as I,t as N,p as S,i as E}from"./index-db2b32b3.js";const K={components:{Icon:M,FooterVue:V},data(){return{genreName:"",videoKey:null,selectedMovieId:null,movies:[],currentPage:1,totalPages:null,maxVisiblePages:5}},created(){this.fetchGenreName(),this.fetchMovies(this.currentPage)},computed:{paginationRange(){const t=[],o=Math.max(1,this.currentPage-Math.floor(this.maxVisiblePages/2)),n=Math.min(o+this.maxVisiblePages-1,this.totalPages);for(let s=o;s<=n;s++)t.push(s);return t}},methods:{fetchGenreName(){const o="https://api.themoviedb.org/3/genre/movie/list?api_key=e322ec768a4787f47c3a2896362e2b67",n=this.$route.params.id;console.log(n),m.get(o).then(s=>{const r=s.data.genres.find(l=>l.id===parseInt(n));this.genreName=r?r.name:"Unknown Genre"}).catch(s=>{console.error("Error fetching genre name:",s)})},fetchPreviousPage(){this.currentPage>1&&this.fetchMovies(this.currentPage-1)},fetchNextPage(){this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1)},fetchMovies(t){const n="https://api.themoviedb.org/3/discover/movie?api_key=e322ec768a4787f47c3a2896362e2b67";m.get(n,{params:{page:t}}).then(s=>{this.movies=s.data.results,this.currentPage=s.data.page,this.totalPages=s.data.total_pages,this.movies.length>0&&this.showMovieVideo(this.movies[0].id)}).catch(s=>{console.error("Error fetching movie:",s)})},showMovieVideo(t){this.selectedMovieId=t,this.fetchVideos(t),this.scrollToVideoSection()},scrollToVideoSection(){this.$refs.videoSection.scrollIntoView({behavior:"smooth",block:"start"})},fetchVideos(t){const n=`https://api.themoviedb.org/3/movie/${t}/videos?api_key=e322ec768a4787f47c3a2896362e2b67`;m.get(n).then(s=>{const i=s.data.results;i.length>0&&(this.videoKey=i[0].key)}).catch(s=>{console.error("Error fetching movies:",s)})},showMovieDetail(t){return this.$router.push({path:`/movie/details/${t}`,params:{id:t}})},getVideoUrl(t){return`https://www.youtube.com/${t}`}}},g=t=>(S("data-v-1f03891a"),t=t(),E(),t),L={class:"container-fluid"},F=g(()=>e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),R={class:"collapse navbar-collapse",id:"navbarsExample02"},T=g(()=>e("ul",{class:"navbar-nav mx-auto"},[e("span",{class:"navbar-brand mx-auto"},"Star-Films")],-1)),B={class:""},G={class:"container-fluid mt-5"},j={style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},z={class:"breadcrumb"},D={class:"breadcrumb-item"},U={href:"#",style:{"text-decoration":"none",color:"inherit"}},A=g(()=>e("li",{class:"breadcrumb-item"},"category",-1)),H=g(()=>e("li",{class:"breadcrumb-item active","aria-current":"page"},"Movies",-1)),$={class:"container-fluid"},q={class:"d-flex justify-content-between"},J=g(()=>e("h2",{class:"text-left text-white"},"All Movies",-1)),O={class:"page"},Q={class:"pagination pagination-sm"},W=["onClick"],X={key:0,ref:"videoSection",class:"videoContainer"},Y=["src"],Z={class:"row g-2"},ee=["onClick"],te=["src"];function se(t,o,n,s,i,r){const l=u("Icon"),b=u("router-link"),y=u("RouterLink"),x=u("footer-vue");return d(),h(f,null,[e("nav",{class:v(["navbar navbar-expand bg-black",{navbar:!0,scrolled:t.isScrolled}]),"aria-label":"Second navbar example"},[e("div",L,[c(b,{class:"navbar-brand",to:"/"},{default:_(()=>[c(l,{icon:"mingcute:arrow-left-fill",color:"white",width:"40",class:"p-2 mt-1"})]),_:1}),F,e("div",R,[T,e("div",B,[c(l,{icon:"akar-icons:search",color:"white",width:"20",class:"head-add mx-3"}),c(b,{class:"navbar-brand",to:"/"},{default:_(()=>[c(l,{icon:"clarity:user-solid",color:"white",width:"20",class:"head-add"})]),_:1})])])])],2),e("div",G,[e("nav",j,[e("ol",z,[e("li",D,[e("a",U,[c(y,{to:"/",style:{color:"#fff"}},{default:_(()=>[I("Home")]),_:1})])]),A,H])])]),e("div",null,[e("div",$,[e("div",q,[J,e("nav",O,[e("ul",Q,[e("li",{class:v(["page-item",{disabled:i.currentPage===1}])},[e("a",{class:"page-link",href:"#",onClick:o[0]||(o[0]=p((...a)=>r.fetchPreviousPage&&r.fetchPreviousPage(...a),["prevent"]))},[c(l,{icon:"ooui:previous-ltr",color:"white"})])],2),(d(!0),h(f,null,w(r.paginationRange,a=>(d(),h("li",{class:v(["page-item",{active:a===i.currentPage}]),key:a},[e("a",{class:"page-link",href:"#",onClick:p(P=>r.fetchMovies(a),["prevent"])},N(a),9,W)],2))),128)),e("li",{class:v(["page-item",{disabled:i.currentPage===i.totalPages}])},[e("a",{class:"page-link",href:"#",onClick:o[1]||(o[1]=p((...a)=>r.fetchNextPage&&r.fetchNextPage(...a),["prevent"]))},[c(l,{icon:"ooui:previous-rtl",color:"white"})])],2)])])]),i.videoKey?(d(),h("div",X,[e("iframe",{src:"https://www.youtube.com/embed/"+i.videoKey,class:"iframe2",frameborder:"0",autoplay:"",allowfullscreen:""},null,8,Y)],512)):C("",!0),e("div",Z,[(d(!0),h(f,null,w(i.movies,a=>(d(),h("div",{class:"col-3 col-md- 3 col-lg-3",key:a.id,onClick:P=>r.showMovieVideo(a.id)},[e("img",{src:"https://image.tmdb.org/t/p/original/"+a.poster_path,class:"img-fluid mt-3",alt:""},null,8,te)],8,ee))),128))])])]),c(x)],64)}const oe=k(K,[["render",se],["__scopeId","data-v-1f03891a"]]);export{oe as default};
