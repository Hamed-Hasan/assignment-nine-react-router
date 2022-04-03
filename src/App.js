
'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home'
import Reviews from './component/Reviews/Reviews'
import Dashboard from './component/DashBord/DashBoard'
import Blogs from './component/Blogs/Blogs'
import About from './component/About/About'
import NotFound from './component/NotFound/NotFound'
function App() {

  return (
    <div>
   <NavBar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/reviews' element={<Reviews/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/blogs' element={<Blogs/>} />
  <Route path='/about' element={<About/>} />
  <Route path='*' element={<NotFound/>} />
</Routes>

    </div>
  );
}

export default App;
