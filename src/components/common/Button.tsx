import './GoBackTopPage.css';
import { useNavigate } from 'react-router-dom';

function GoBackTopPage() {
  const navigate = useNavigate();

  return (
  <button onClick={() => navigate('/')} className='common'>
  戻る
  </button>
  );
}

export default GoBackTopPage;