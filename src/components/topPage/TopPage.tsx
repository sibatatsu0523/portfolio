import './TopPage.css';
import { useNavigate } from 'react-router-dom';


const TopPage = () => {
  const navigate = useNavigate();

  return (
    <div className='topPage'>
      <button onClick={() => navigate('/about')} className='button'>
      <h1>ABOUT</h1>
      </button>
      <button onClick={() => navigate('/skill')} className='button'>
      <h1>SKILL</h1>
      </button>
      <button onClick={() => navigate('/products')} className='button'>
      <h1>PRODUCTS</h1>
      </button>
      <button onClick={() => navigate('/certification')} className='button'>
      <h1>CONNECT</h1>
      </button>
    </div>
  );
}

export default TopPage;