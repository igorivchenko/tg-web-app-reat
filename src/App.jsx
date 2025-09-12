import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <>
      <h1>Bot-Frontend</h1>
      <button onClick={onToggleButton} type="button">
        Toggle
      </button>
    </>
  );
}

export default App;
