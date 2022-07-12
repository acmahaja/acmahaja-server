const express = require('express');
const app = express();

const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('*', (req, res) => {
    res.send({message:'Welcome to the backend, this place is currently under construction 🔨'})
})

const PORT = process.env.port || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on ` + PORT)
})

