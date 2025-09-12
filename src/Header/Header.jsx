import Button from '../Button/Button';
import s from './Header.nodule.css';

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <header className={s.header}>
      <Button onClick={onClose} />
      <span className={s.username}>{tg.initDataUnsafe?.user?.username}</span>
    </header>
  );
};

export default Header;
