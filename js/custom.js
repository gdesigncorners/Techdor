jQuery(function($) {

 // animation counter
      $('.number').animationCounter({

        start: 0,
        step:2,
        end: 1250,
        delay:10

      });  

      $('.client').animationCounter({

        start: 0,
        step:5,
        end: 2550,
        delay:10

      });  

      $('.project').animationCounter({

        start: 0,
        step:5,
        end: 3550,
        delay:10

      }); 
  });