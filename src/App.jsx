import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Components/Home"
import SymptomsChecker from "./Pages/SymptomsChecker"
import LogginForm from "./Components/LogginForm"
import Consise from "./Pages/Consise"

const App = () => {
  return (
    <div>
      {/* 
      <div className="mt-full">
      

      </div> */}

      <BrowserRouter >
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/symptoms"  element={<SymptomsChecker />}/>
        <Route path="/login"  element={<LogginForm />}/>
        <Route path="/consise"  element={<Consise />}/>


       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App