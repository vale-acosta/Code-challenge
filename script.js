document.getElementById('submit').addEventListener('click', () => {
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const fechaNacimiento =document.getElementById('fecha').value;


    const info = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(info),
    })
     .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});



