let indexController = {
    showIndex: (req, res) => {
        res.render('index')
    },

    calculoImc: (req, res) => {
        let altura = parseFloat(req.body.alturaInput);
        let peso = parseFloat(req.body.pesoInput);

        let imc = peso / (altura * altura);
    
          
         res.render('index', {imc: imc})
          
         
        
    }

    
}

module.exports = indexController;