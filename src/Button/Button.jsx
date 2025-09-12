import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.button}>
      Закрити
    </button>
  );
};

export default Button;
