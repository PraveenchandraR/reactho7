import Contact from "./Contact";
import Home from "./Table";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
export default function RouterComponent() {

  
    return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/student' element={<StudentList />}/>
      <Route path='/editStudent:studentId' element={<StudentForm/>}/>
      <Route path='/newstudent' element={<StudentForm />}/>
    </Routes>
    
    </BrowserRouter>
      </>
    );
  }