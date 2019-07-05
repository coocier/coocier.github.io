(() => {

  const showFancybox = () => {

    return () => {
     if ($.fancybox){
         $('[data-fancybox="gallery"]').fancybox({
          // Options will go here
         });
       }
    };
  };

  showFancybox();
  
})();