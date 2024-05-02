const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public')) // 사용할 폴더를 등록해줘야 함

// nodemon 설치를 통해서 파일 수정 시 알아서 서버를 재실행 해줌
app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행 중')
})

// 함수 안에 들어가는 함수들을 callback function 이라고 한다
app.get('/', (require, response) => {
    // __dirname은 현재 파일의 절대 경로가 들어있음
    response.sendFile(__dirname + '/index.html')
})

app.get('/news', (require, response) => {
    response.send('오늘 비ㅣㅣㅣㅣㅣㅣ')
})

app.get('/shop', (require, response) => {
    response.send('쇼핑 페이지ㅣㅣㅣ')
})