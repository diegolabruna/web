window.onload = function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.body.innerText = data.ip;
        })
        .catch(error => {
            document.body.innerText = 'No se pudo obtener la IP';
            console.error('Error al obtener la IP:', error);
        });
};
