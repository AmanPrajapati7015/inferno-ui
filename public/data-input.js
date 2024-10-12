const socket = io();




document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const speed = document.getElementById('speed').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const temperature = document.getElementById('temperature').value;
    const battery = document.getElementById('battery').value;
    const network = document.getElementById('network').value;

    const formData = {
        speed,
        latitude,
        longitude,
        temperature,
        battery,
        network
    };

    console.log('Form Data:', formData);
    
    socket.emit('update data', formData);
    
});
