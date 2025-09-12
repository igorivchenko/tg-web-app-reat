import Button from '../Button/Button';
import useTelegram from '../hooks/useTelegram';
import s from './Header.nodule.css';

const Header = () => {
  const { onClose, user } = useTelegram;
  return (
    <header className={s.header}>
      <Button onClick={onClose} />
      <span className={s.username}>{user?.username}</span>
    </header>
  );
};

export default Header;
