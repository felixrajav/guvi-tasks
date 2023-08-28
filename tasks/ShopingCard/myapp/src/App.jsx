import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavicationBar from './NavicationBar';
import ShopingCard from './ShopingCard';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavicationBar count={count}/>
      <Header/>
      <ShopingCard setCount={setCount} />
      <Footer/>
    </>
  )
}

export default App
