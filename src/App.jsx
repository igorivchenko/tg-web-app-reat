import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <>
      <h1>Bot-Frontend</h1>
      <button type="button" onClick={onClose}>
        Закрити
      </button>
    </>
  );
}

export default App;
