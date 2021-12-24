const videoElement = document.getElementById('video');
const picButton = document.getElementById('picBtn');
const shareButton = document.getElementById('shareBtn');
// prompt to select medie stream, pass to video element,then play
async function selectMediaStream() {
    try{
           const mediastream = await navigator.mediaDevices.getDisplayMedia();
           videoElement.srcObject = mediastream;
           videoElement.onloadedmetadata = () =>{
               videoElement.play();
           }
           console.log(mediastream);
    }catch(error){
      console.log('whoops! error here :',error);
    }
}
picButton.addEventListener('click', async() =>{
    //disable button 
    picButton.disabled = true;
    //start pic in pic 
    await videoElement.requestPictureInPicture();
    //reset button
    picButton.disabled = false; 
});
shareButton.addEventListener('click',selectMediaStream);
//on load
//selectMediaStream();