//http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// Global
var youtubePlayer = null;
function onYouTubeIframeAPIReady() {
  //console.log("onYouTubeIframeAPIReady");
  youtubePlayer = new YT.Player('video', {
    height: '390',
    width: '640',
    videoId: '',
    playerVars: { 'autoplay': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'getVideoLoadedFraction': onLoaded
    }
  });
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //console.log("onPlayerReady");
  //event.target.playVideo();
  ocultarPlayer();
}

function onLoaded(event){
  //console.log(event);
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
//var done = false;
function onPlayerStateChange(event) {
  //console.log("onPlayerStateChange",event);
  if(event.data == YT.PlayerState.ENDED){
    stopVideo();    
  }
  /*
  if(youtubePlayer.getState()==0){
    stopVideo();
  }
  */
  /*
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
  */
}

function mostrarPlayer(){
  document.getElementById("video").style.display = 'block';    
}

function ocultarPlayer(){
  document.getElementById("video").style.display = 'none';  
}
function stopVideo() {
  //console.log("stopVideo");
  ocultarPlayer();
  youtubePlayer.stopVideo();
}

// API Search
// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  //console.log("googleApiClientReady");
  iniciarAPIBuscador();
}

function iniciarAPIBuscador(){
  //console.log("iniciarAPIBuscador");
  gapi.client.setApiKey('AIzaSyDTJFT2LmfkZoU5MpyWZugXijG-KAGclQ4');
  gapi.client.load('youtube', 'v3', function() {
    console.log("API Cargada");
  });  
}