function getUrlParameter(urlParam)
{
    var pageUrl = window.location.search.substring(1);
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

var urlHrs = getUrlParameter('hrs');
var urlMins = getUrlParameter('mins');
var urlSecs = getUrlParameter('secs');

$(function(){

        $('#resume-btn').click(function(e){
            e.preventDefault();
            window.location.href = "timer.html?hrs="+urlHrs+'&mins='+urlMins+'&secs='+urlSecs;
        });

        $('#hrs').text(urlHrs);
        $('#mins').text(urlMins); 
        $('#secs').text(urlSecs);

});