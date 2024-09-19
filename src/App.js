
import './App.css';
import Navbar from './components/navbar';
import HomeMain from './components/home/homeMain';
import ShopMain from './components/shop/shopMain';
import Login from './components/login/login';
import ShopDetail from './components/shopDetail';
import Search from './components/search/searchMain';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
<<<<<<< HEAD
import Feedback from './components/feedback/feedback';
=======
import Contact from './components/contact_us/contact';
>>>>>>> 268ba37d5571489e4fbfb28365fedb531879c6ff


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <Navbar />
        <Routes>
            <Route path='/' element={<HomeMain />} />
            <Route path='/shop' element={<ShopMain />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop-detail/:id' element={<ShopDetail />} />
            <Route path='/search/' element={<Search />} />
            <Route path='/feedback' element={<Feedback />} />
        </Routes>
        <Footer />
=======
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/shop' element={<ShopMain />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop-detail/:id' element={<ShopDetail />} />
        <Route path='/search/:name' element={<Search />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
>>>>>>> 268ba37d5571489e4fbfb28365fedb531879c6ff
    </div>
  );
}

export default App;
