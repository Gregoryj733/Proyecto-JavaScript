//toda la logica para la conexion al servidor


//listar todos los clientes


let btn_get_cliente =  document.querySelector('#btn_buscar_rut');


function render(data){

//campos de las tablas

	document.querySelector("#rt").innerHTML =`
	<input type="text" value="${data[0].rut}" id="input_rt">`;
    
    document.querySelector("#nc").innerHTML =`
    <input type="text" value="${data[0].nombre_cliente}" id="input_nc">`
    
    document.querySelector("#nop").innerHTML =`
    <input type="text" value="${data[0].nroOper}" id="input_nop">`; 
    
    document.querySelector("#sf").innerHTML =`
    <input type="text" value="${data[0].financiado}" id="input_sf">`;
    
    document.querySelector("#to").innerHTML =`
    <input type="text" value="${data[0].tasaOp}" id="input_to">`; 
    
    document.querySelector("#ce").innerHTML =`
    <input type="text" value="${data[0].codEjecutivo}" id="input_ce">`; 
    
    document.querySelector("#ne").innerHTML =`
    <input type="text" value="${data[0].nombreEjecutivo}" id="input_ne">`;
    
    document.querySelector("#sc").innerHTML =`
    <input type="text" value="${data[0].sucursal}" id="input_sc">`;

    
//botones de acciones
    document.querySelector("#eliminar").innerHTML =
    `<button type="button" onclick="deleteCliente(this)"class="btn btn-danger " id="delete" value="${data[0]._id}">
       <i class="fa fa-trash"></i> Eliminar</button>`;

    document.querySelector("#actulizar").innerHTML =
    `<button type="button" onclick="updateCliente(this)" class="btn btn-info " id="update" value="${data[0]._id}">
       <i class="fa fa-pen"></i> Actulizar</button>`;
}



function getClienteRut(){

	axios.get('/cliente/' + document.querySelector('#rut').value)
	  .then(function (response) {
	    // handle success
	    document.querySelector('#rut').value = "";

	    render(response.data);

	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  });
}


function form_valid(event){

	var form = document.getElementById("form_nuevo_cliente");

	event.preventDefault();

	var valid = false;

	for (var i = 0; i < (form.length - 2); i++) {
		
		if(form.elements[i].value.length > 0){
			valid = true;
			
		}else {
			
			valid =  false;
			
		}
	}

	//todo correcto
	if (valid) {

		storeCliente();//se guarda los datos

	}

}

function storeCliente(){
	axios({
	  method: 'post',
	  url: 'http://localhost:3000/cliente',
	  data: {
	       nroOper: document.querySelector("#input_nop1").value,
		   rut: document.querySelector("#input_rt1").value,
		   nombre_cliente :document.querySelector("#input_nc1").value,
		   financiado: document.querySelector("#input_sf1").value,
		   tasaOp : document.querySelector("#input_to1").value,
		   codEjecutivo : document.querySelector("#input_ce1").value,
		   nombreEjecutivo :document.querySelector("#input_ne1").value,
		   sucursal: document.querySelector("#input_sc1").value
	  }
	})
	.then(function (response) {

	    alert('Cliente Guardado!');
	    document.querySelector("#input_nop1").value = "";
		document.querySelector("#input_rt1").value = "";
		document.querySelector("#input_nc1").value = "";
		document.querySelector("#input_sf1").value = "";
		document.querySelector("#input_to1").value = "";
		document.querySelector("#input_ce1").value = "";
		document.querySelector("#input_ne1").value = "";
		document.querySelector("#input_sc1").value = "";
	    location.href ="http://localhost:3000";

	})
	.catch(function (error) {
	    // handle error
	    console.log(error);
	});
}

function updateCliente(){
	axios({
	  method: 'put',
	  url: '/cliente/' + document.querySelector('#update').value ,
	  data: {
	       nroOper: document.querySelector("#input_nop").value,
		   rut: document.querySelector("#input_rt").value,
		   nombre_cliente :document.querySelector("#input_nc").value,
		   financiado: document.querySelector("#input_sf").value,
		   tasaOp : document.querySelector("#input_to").value,
		   codEjecutivo : document.querySelector("#input_ce").value,
		   nombreEjecutivo :document.querySelector("#input_ne").value,
		   sucursal: document.querySelector("#input_sc").value
	  }
	})
	.then(function (response) {

	    alert('Cliente Actulizado!');
	    location.href ="http://localhost:3000";

	})
	.catch(function (error) {
	    // handle error
	    console.log(error);
	});
}

function deleteCliente(){


	axios.delete('/cliente/' + document.querySelector('#delete').value)
	  .then(function (response) {
	    // handle success
	    alert('Cliente Eliminado!');

	    location.href ="http://localhost:3000";

	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  });
}

btn_get_cliente.addEventListener('click', getClienteRut);


