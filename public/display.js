const socket = io(); 
// creating a new client on Peer server with 'display' as id.
let peer = new Peer('display', { host: '/', port: '3001', secure: true });

const videoContainer = document.getElementById('streams');

//this event is called so that this socket(client) can be added to displayRoom in socket io server 
// we will emit 'remove video' to this room to remove the video element of disconnected /sender client
socket.emit('display connect');

//answer the call from /sender client
peer.on('call', function(call) {
    call.answer(null);

    call.on('stream', function (remoteStream) {
        
        let id = call.peer;
        const videoDiv = createVideoDiv(remoteStream, id);

        videoContainer.appendChild(videoDiv);
    });

});

// the remove video that we taked about above
socket.on('remove video', (id)=>{
    videoElement = document.getElementById(id)
    if(videoElement)
        videoElement.remove();
})


socket.on('update data', (data)=>{
    console.log(data);
    updateData(data);
})


function createVideoDiv (stream, id){
    const videoDiv = document.createElement('div');
    videoDiv.id = id;
    videoDiv.classList.add('videoDiv');


    let videoElement = document.createElement('video');
    videoElement.autoplay = true;
    videoElement.playsInline = true;
    videoElement.muted = true;
    videoElement.srcObject = stream;
    
    const idPara = document.createElement('p');
    idPara.textContent = `Camera id : ${id}`;

    
    videoDiv.appendChild(videoElement);
    videoDiv.appendChild(idPara);

    return videoDiv;
}


function updateData(dataObj){

    document.getElementById('display-speed').textContent = dataObj.speed;
    document.getElementById('display-latitude').textContent = dataObj.latitude;
    document.getElementById('display-longitude').textContent = dataObj.longitude;
    document.getElementById('display-temperature').textContent = dataObj.temperature;
    document.getElementById('display-battery').textContent = dataObj.battery;
    document.getElementById('display-network').textContent = dataObj.network;
}