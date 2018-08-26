const Cliente = require('../models/cliente');


module.exports = {
    
    index(req, res) {
	 
     Cliente.find().then( clientes => {

        res.status(200).json( clientes);

     }).catch( error => console.log(error));

    },

    show(req, res) {

		Cliente.find({ rut: req.params.rut }).then( cliente => {

          res.status(200).json(cliente);

        }).catch( error => console.log(error));
    },

    store(req, res) {

    

		let cliente = new Cliente(req.body);

        cliente.save().then( cliente => {

            res.status(201).json( cliente);

        }).catch( error => console.log(error));
    },

    update(req, res) {

		Cliente.findByIdAndUpdate( req.params.id, req.body ,(err, cliente) => {
           
            if (err) {

                return res.status(500).json(err);
            }

            return res.status(200).json(cliente);
          }
        );
    },

    delete(req, res) {

		Cliente.deleteOne({ _id: req.params.id }).then( cliente => {

            res.status(200).json(cliente);

        }).catch( error => console.log(error));
    }


}