import './App.css'
import AddEmployeeForm from './Component/AddEmployeeForm'
import Footer from './Component/Footer'
import Header from './Component/Header'
import ListOfEmploye from './Component/ListOfEmploye'

import { BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
           {/* http://localhost:3000 */}
          <Route path='/' element={<ListOfEmploye />} > </Route>

             {/* http://localhost:3000/employee */}
          <Route path='/employee' element={<ListOfEmploye />} ></Route>

             {/* http://localhost:3000/add-employee */}
           <Route path='/add-employee' element={<AddEmployeeForm/>} ></Route> 

             {/* http://localhost:3000/update-employee/2 */}
           <Route path='/update-employee/:id' element={<AddEmployeeForm/>} ></Route> 
           
        </Routes>
        <Footer />
      

      </BrowserRouter>

    </>
  )
}

export default App
