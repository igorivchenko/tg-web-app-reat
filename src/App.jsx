import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <h1>Bot-Frontend</h1>
    </>
  );
}

export default App;
