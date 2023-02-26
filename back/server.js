const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.set('port', PORT)

// Set CORS option
const corsOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corsOptions))

app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
// Parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// Parse requests of content-type: application/json
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    })
)
// Express.js에서 get 메서드를 통해 GET request를 다룰 수 있다.
// EndPoint : domain name 다음에 붙는 value
// ex) www.naver.com/blog/mevn-crud
// 이 경우, domain은 www.naver.com 이고
// requested endpoint는 /blog/mevn-crud가 된다.

// app.get(endpoint, callback)
app.get('/', (req, res) => {
    res.send('We Open Express Server!!')
})

app.listen(PORT, () => {
    console.log(`The Server is listening on port ${PORT}`)
})
