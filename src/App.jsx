
import './App.css'
import Hero from './assets/components/hero/Hero'


import Nav from './assets/components/nav/Nav'
import UserInfo from './assets/components/userInfo/UserInfo'
import CardDiv from './assets/components/card/CardDiv';
import { Suspense } from 'react';

const fetchProducts = async () => {
  const res = await fetch('/data.json');
  return res.json();
}


function App() {
  const productsPromise = fetchProducts();
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <UserInfo></UserInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <CardDiv productsPromise={productsPromise}></CardDiv>
      </Suspense>





    </>
  )
}

export default App
