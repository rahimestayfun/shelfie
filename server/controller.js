module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
        // .then(()=>res.status(200).json('It is working'))
        .then(products=>res.status(200).json(products))
    },
    
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {image_url, name, price}= req.body;
        console.log(req.body)
        
        dbInstance.create_product([image_url, name, price])
        .then(() => res.status(200).json('All good.'))
        // .then(()=>res.status(200).json('It is really working'))
    }
    }