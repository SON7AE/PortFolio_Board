# To do board

##  1. 개요

이 프로젝트는 Create, Read, Update, Delete (이하 CRUD) 기능구현을 목적으로 한 포트폴리오 입니다. <br />
이 프로젝트를 함께 진행해봄으로써 Git 형상관리, 컴포넌트 구조설계, API 활용, Vue.js에 대한 전반적인 이해 등<br />
현업에 투입됐을 때, 전체적인 흐름을 가볍게 익힐 수 있는 교육과정 입니다. <br />

-   사용 언어 : Vue.js (Version 3)
-   사용 레퍼런스 API : Composition API

---

## 2. 프로젝트 환경설정

-   페이지 라우팅 : Vue Router를 활용한 페이지 라우팅
    -   `npm install vue-router@4`
-   상태관리 : Pinia로 중앙집중식 State 상태관리
    -   `npm install pinia`
-   서버통신 : Axios로 API 통신
    -   `npm install axios`
-   UI 라이브러리 : Element Plus를 활용하여 필요한 부분에서의 UI 구현
    -   `npm install element-plus --save`

---

## 주의사항!

-   `npm i -D webpack-dev-server@next`로 설치(webpack-cli 버전(@4^)과 일치)!<br />
-   `package.json` 옵션으로 `browserslist` 추가!<br />
-   `.postcssrc.js` 생성(PostCSS 구성 옵션)!<br />
-   `.babelrc.js` 생성(Babel 구성 옵션)!<br />
