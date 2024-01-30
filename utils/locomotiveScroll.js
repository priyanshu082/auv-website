
//for scrolling to page
useEffect(()=>{

    const locomotiveScroll= new LocomotiveScroll();
     function scrollTo(params){
       const {target,options}=params;
       locomotiveScroll.scrollTo(target,options);
     }
   
     scrollTo({target:div.current,options:{
      //  offset:100,
       immeddiate:true,
   
     }})
  },[])