var myslideshow = ["img/4geeksclass.jpeg","img/matrix.gif","img/4geeksdevcomm.jpeg","img/4geeksdeveloper.jpeg","img/4geekslaptop.jpeg","img/4geekslinkedin.jpeg","img/4geekslogo.jpg","img/4geeksmentor.jpeg","img/4geekslogo.jpg","img/4geeksprintad.jpeg","img/4geekstutor.jpeg"];

$( document ).ready(function() {

	var slideshow = myslideshow.length;
	for (var i = 0; i < slideshow; i++) {
	   // alert(myslideshow[i]);
	}

	var count = 0;

	    $('#rightArrow').click(function(){
 		 count = count+1;
  		if (count > slideshow){
  			count = 0;
  		}
		$('#imagetoslide').attr("src", myslideshow[count]);  
	    });

	    $('#leftArrow').click(function(){
 		 count = count-1;
  		if (count < 0){
  			count = slideshow;
  		}
		$('#imagetoslide').attr("src", myslideshow[count]);  
	    });

	window.setInterval(function(){
  		count = count+1;
  		if (count > slideshow){
  			count = 0;
  		}
		$('#imagetoslide').attr("src", myslideshow[count]);  
	}, 3000);
});

