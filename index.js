let url = 'https://jsonplaceholder.typicode.com/users';
const tb = document.getElementById('introducir');

async function db(){
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        
        let body = ''
        for (let i = 0; i < datos.length; i++) {
            body += `
              <tr class="table-primary">
                <th><strong>${i + 1}</strong></th> 
                <td>${datos[i].name}</td>
                <td>${datos[i].username}</td>
              </tr>
            `;
          }
        
        tb.innerHTML = body;
    }
    catch(error){
        console.log(error);
    }
}

db();