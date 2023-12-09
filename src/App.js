import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import All from './components/All';
import LordKrishna from './components/LordKrishna';
import LatestCars from './components/LatestCars';
import LatestBikes from './components/LatestBikes';
import Festivals from './components/Festivals';
import Music from './components/Music';
import Movies from './components/Movies';
import Cooking from './components/Cooking';
import Bollywood from './components/Bollywood';

function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
      <Route path='/' element={<All/>} />
      <Route path='/lordkrishna' element={<LordKrishna/>} />
      <Route path='/latestcars' element={<LatestCars/>} />
      <Route path='/latestbikes' element={<LatestBikes/>} />
      <Route path='/festivals' element={<Festivals/>} />
      <Route path='/music' element={<Music/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/cooking' element={<Cooking/>} />
      <Route path='/bollywood' element={<Bollywood/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
