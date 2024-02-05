import './Modal.css';

export function Modal({show, setShow}: any) {
  if (show) {
    return (
      <div id="overlay">
        <div id="content">
          <h1>Azure</h1>

          <p>ああああああああああああああああああああああああああ</p>
          <p>ああああああああああああああああああああああああああ</p>
          <p>ああああああああああああああああああああああああああ</p>
          <p>ああああああああああああああああああああああああああ</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </div >
    )
  } else {
    return null;
  }
}