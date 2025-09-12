import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';
import Header from './Header/Header';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <>
      <h1>Bot-Frontend</h1>
      <Header />
      <button onClick={onToggleButton} type="button">
        Toggle
      </button>
    </>
  );
}

export default App;
