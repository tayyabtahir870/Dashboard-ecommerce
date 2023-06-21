import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layouts/Header';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Elements/Contact';
import Base from './Components/Layouts/Base';
import Content from './Components/Elements/Content';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Base>
      <Routes>
      <Route  index path='/' element={<Home/>}/>
        <Route   path='/contact' element={<Contact/>}/>
      </Routes>
      </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
