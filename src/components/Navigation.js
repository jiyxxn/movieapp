import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <div className="nav">
      <Link to={"/"}>HOME</Link>
      <Link to={"/about"}>ABOUT</Link>
    </div>
  )
}

export default Navigation


/*
Home.js 클래스형 -rcc
About.js 함수형 - rfce

SPA(single page application)
→ SPA를 만드려면 react router dom을 설치해야 함
npm install react-router-dom

router 라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
*/