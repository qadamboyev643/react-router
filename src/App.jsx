
import './App.css'
import Header from './companet/header'
import Card from './pages/card'
import Contact from './pages/contact '
import Shop from './pages/shop'
import { Routes, Route } from 'react-router'
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/card' element={<Card />}></Route>
        <Route path='*' element={<h1>404 Not found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
