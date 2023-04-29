
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './css/sb-admin-2.css'
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import Login from './Login';
import Student from './Student';
import { Students } from './userContext';
import Studentview from './Studentview';
import Teachers from './Teachers';
import CreateTeacher from './CreateTeacher';
import EditTeacher from './EditTeacher';
import Teacherview from './Teacherview';




function App() {
  return (
    <BrowserRouter>

   <Students>
    <div id="wrapper">
   <Sidebar />
   <div id="content-wrapper" class="d-flex flex-column">
   <div id="content">
   <Topbar />
    <Routes>
 
 <Route path='/login' element={<Login />}/>
 <Route path=  '/dashboard' element={<Dashboard />} />
 <Route path='/student' element={<Student/>}/>
 <Route path=  '/student/:studentid' element={<Studentview />}/>
 <Route path='/create-student' element={<CreateStudent/>}/>
 <Route path='/student/edit/:id' element={<EditStudent/>}/>
 <Route path='/teachers' element={<Teachers/>}/>
 <Route path=  '/teachers/:teachersid' element={<Teacherview />}/>
 <Route path='/create-teacher' element={<CreateTeacher/>}/>
<Route path='/teachers/edit/:id' element={<EditTeacher/>}/>

    
    </Routes>
   
       </div>
     </div>
   </div> </Students>
     </BrowserRouter>
  );
}

export default App;
