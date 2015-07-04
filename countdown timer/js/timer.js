var clicked = 0
var params = 0;
var counter;

var leadingZero = function(n) {
      if (n < 10 && n >= 0)
           return '0' + n;
       else
           return n;
    };


var pageUrl = window.location.search.substring(1);

if(pageUrl == ""){
     params = 1;
  }

function getUrlParameter(urlParam)
{
    var urlVars = pageUrl.split('&');
    
    for (var i = 0; i < urlVars.length; i++) 
    {
        var reqdParam = urlVars[i].split('=');
        if (reqdParam[0] == urlParam) 
        {
            return reqdParam[1];
        }
    }
}


$(function(){
        var mins = Number((params == 0) ? getUrlParameter('mins'): $('#mins').text()),
        hrs = Number((params == 0) ? getUrlParameter('hrs'): $('#hrs').text()),
        secs = Number((params == 0) ? getUrlParameter('secs'): $('#secs').text());

        if(params == 0){
          $('#hrs').text(leadingZero(hrs));
          $('#mins').text(leadingZero(mins)); 
          $('#secs').text(leadingZero(secs));
        }
        $('#pause-btn').click(function(e){
            e.preventDefault();
            clicked = 1;
        });

        $('#exit-btn').click(function(e){
            e.preventDefault();
            clearInterval(counter);
            window.location.href = "exit.html";
        });

        counter=setInterval(function () { 
          if(clicked == 1){
            clearInterval(counter);
            window.location.href = "resume.html?hrs="+leadingZero(hrs)+'&mins='+leadingZero(mins)+'&secs='+leadingZero(secs);
          }else if(hrs === 0 && mins === 0 && secs === 0){ 
            window.location.href = "exit.html";
          }else{
            if (secs === 0 && mins === 0) {
              hrs--;
              mins = 59;
              secs = 59;
             
           } else if(secs === 0) {
              mins--;
              secs = 59;
           } else
              secs--;
          } 
          
          $('#hrs').text(leadingZero(hrs));
          $('#mins').text(leadingZero(mins)); 
          $('#secs').text(leadingZero(secs));

        }, 1000);


});