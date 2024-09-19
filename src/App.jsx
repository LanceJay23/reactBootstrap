import { useState } from 'react'
import { Navbar, Contain, Account, Boxes, Fundament, Reacts, Questions, Instructors, Contacts, Footer, Mmodal } from './mainpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Contain/>
    <Account/>
    <Boxes/>
    <Fundament/>
    <Reacts/>
    <Questions/>
    <Instructors/>
    <Contacts/>
    <Footer/>
    <Mmodal/>
    </>
  )
}

export default App
