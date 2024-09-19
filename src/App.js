
import './App.css';
import Navbar from './components/navbar';
import HomeMain from './components/home/homeMain';
import ShopMain from './components/shop/shopMain';
import Login from './components/login/login';
import ShopDetail from './components/shopDetail';
import Search from './components/search/searchMain';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Feedback from './components/feedback/feedback';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
