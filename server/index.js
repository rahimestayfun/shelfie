require('dotenv').config();
const express = require('express');
const app= express();
const massive= require('massive');
const PC = require('./controller')


const {SERVER_PORT, DATABASE_STRING}= process.env;

massive(DATABASE_STRING).then(db=>{
    app.set('db',db);
    console.log('Database connected');
})




app.use(express.json());

app.post('/api/product', PC.create);
app.get('/api/inventory', PC.getAll);




app.listen(3050, ()=>console.log("Server is running on 3050"))


