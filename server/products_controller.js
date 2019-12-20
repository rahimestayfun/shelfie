module.exports = {

getAll: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
    .then(products=>res.status(200).json(products))
},

create: (req, res) => {
    const dbInstance = req.app.get('db');
    const {image_url, name, price}= req.body;
    dbInstance.create_product([image_url, name, price])
    .then(responser => res.status(200).json(response))
}
}