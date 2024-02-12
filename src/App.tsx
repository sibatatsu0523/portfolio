import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './components/topPage/TopPage';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Products from './components/products/Products';
import Book from './components/book/Book';

function App() {
  return (
    <div className='app'>
      <div className='head'><h1 id='theme'>My portfolio</h1></div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/book" element={<Book />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;