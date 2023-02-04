const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('We Open Express Server!!')
})

app.listen(PORT, () => {
    console.log(`The Server is listening on port ${PORT}`)
})
