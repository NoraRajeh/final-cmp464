const express = require('express')
const path = require('path')
const app = express();
const PORT = 5000
// const clientPath = path.resolve(__dirname, '../client/dist')
const db = require('./db')
app.use(express.json());
// app.use(express.static(clientPath))
app.get('/api/recipes', db.getRecipe)


//Render Website
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
// })

//Create Links
app.post('/api/recipes', db.createRecipe)

//Delete Links
app.delete('/api/recipes/:id', db.deleteRecipe)

//Start Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})