function androidRedirect(intentLocation){
    document.location = intentLocation;
}

function iphoneRedirect(notInstalledLocation,installedLocation){
  setTimeout(function() { 
    document.location = notInstalledLocation; }, 10);
  document.location =installedLocation;
}
function parseURL(url)
{
  
}

/*global $ navigator */

 function redirect(){
           
            var iphoneNotInstalledLocation = "https://itunes.apple.com/il/app/syr-bhmtnh/id"+$.urlParam("appid")+"?mt=8";
            var deeplink = document.createElement('a');
            deeplink.href =  $.urlParam("deeplink");
            var intentLocation = "intent://"+deeplink.pathname+"/#Intent;scheme="+deeplink.protocol.slice(0, -1)+";package="+$.urlParam("package")+";end";
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                iphoneRedirect(iphoneNotInstalledLocation, deeplink.href);
            } 
            else if (/android/i.test(navigator.userAgent)) {
                androidRedirect(intentLocation);
            }
            else {
                      window.location.replace($.urlParam("web"));
                     
            }
            
        };