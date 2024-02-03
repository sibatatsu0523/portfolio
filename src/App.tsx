import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './components/topPage/TopPage';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Certification from './components/certification/Certificaiton';
import Products from './components/products/Products';

function App() {
  return (
    <div className='app'>
      <h1>tatsuyaのポートフォリオ</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/certification" element={<Certification />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;