

	function scrollToAnchor(event, element){

         event.preventDefault();

         //settings
         var timeInterval = 10;
         var duration = 1000;

         var fromY = document.body.scrollTop;                          //y-coordinate to scroll from
         var toY = document.querySelector(element.hash).offsetTop;     //y-coordinate to scroll to

         var distance = toY - fromY;                                   //Distance
         var n = duration / timeInterval;                              //Quantity of intervals


         //If distance <- we need to floor as it is positive
         var interval = (distance > 0) ? Math.floor(distance / n) : -Math.floor(-distance / n);

         var rest = Math.abs(distance % n);

         var timer = setInterval(function () { //Start animation. The function will run n times and scroll by interval px
             if(n-- > 0){
                   if(rest-- > 0){
                       window.scrollBy(0, interval + (distance > 0 ? 1 : -1))
                   } else{
                       window.scrollBy(0, interval);
                   }
             } else{
                 clearInterval(timer);          //Finish animation
             }

         }, timeInterval);

     }

     


























