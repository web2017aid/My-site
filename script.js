alert("Айдана");
<script type="text/javascript">
    	  
        function ShowTime(){
         	var date=new Date();
            var h=date.getHours();
	        var m=date.getMinutes()
	        var s=date.getSeconds();

	        if(h==0){	
		    h=12;
	        }
	        if(h<12){
		    h=h-12;
	        }
	        h=(h<10)?"0"+h:h;
	        m=(m<10)?"0"+m:m;
	        s=(s<10)?"0"+s:s;

	       var time=h+':'+m+":"+s;
	       var colorString='#'+h+m+s;
           document.getElementById("MyClockDisplay").innerText=time;
	       document.getElementById("MyClockDisplay").textContent=time;

          setTimeout(ShowTime,1000);
         }

         ShowTime();
	        
        </script>