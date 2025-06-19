import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
})


app.get('/api/products',(req,res)=>{

const products = [
    {
        id:1,
        name:"product1",
        description:"This is description."

    },
    {
        id:2,
        name:"product2",
        description:"This is description."

    },
    {
        id:3,
        name:"product3",
        description:"This is description."

    },
    {
        id:4,
        name:"product4",
        description:"This is description."

    },
    {
        id:5,
        name:"product5",
        description:"This is description."

    },
];
res.send(products)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at PORT ${port}`)
})