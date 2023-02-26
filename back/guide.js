// 1. 자주 사용하는 미들웨어

// 미들웨어는 익스프레스의 핵심이다.
// 요청과 응답의 중간(middle)에 위치하기 때문에 미들웨어(middleware)라고 부르는 것이다.
// 라우터와 에러 핸들러 또한 미들웨어의 일종이므로 미들웨어가 익스프레스의 전부라고 해도 과언이 아니다.
// 미들웨어는 요청과 응답을 조작해 기능을 추가하기도 하고, 나쁜 요청을 걸러내기도 한다.

// 미들웨어는 app.use와 함께 사용된다.
// app.use(미들웨어) 꼴이다. 익스프레스 서버에 미들웨어를 연결해본다.
// app.use에 매개변수가 req, res, next인 함수를 넣으면 된다.
// 미들웨어는 위에서부터 아래로 순서대로 실행되면서 요청과 응답 사이에 특별한 기능을 추가할 수 있다.
// 이번에는 next라는 세 번째 매개변수를 사용했는데, 다음 미들웨어로 넘어가는 함수이다.
// next를 실행하지 않으면 다음 미들웨어가 실행되지 않는다.

// ...

app.set('port', process.env.PORT || 3000)
// 미들웨어
app.use((req, res, next) => {
    console.log('모든 요청에 다 실행된다.')
    next()
})
// app.use나 app.get 같은 라우터에 미들웨어를 여러 개 장착할 수 있다.
// 현재 app.get 라우터에 미들웨어가 두개 연결되어 있다.
// 다만, 이때도 next를 호출해야 다음 미들웨어로 넘어갈 수 있다.
app.get(
    '/',
    (req, res, next) => {
        console.log('GET / 요청에서만 실행된다.')
        next()
    },
    (req, res) => {
        throw new Error('에러는 에러 처리 미들웨어로 간다.')
    }
)
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send(err.message)
})

app.listen(app.get('port'), () => {})

// ...

// dotenv를 제외한 다른 패지키는 미들웨어이다.
// dotenv는 process.env를 관리하기 위해 설치했다.
// npm install morgan cookie-parser express-session dotenv
