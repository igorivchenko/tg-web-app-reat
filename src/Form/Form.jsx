import { useEffect, useState } from 'react';
import s from './Form.module.css';
import useTelegram from '../hooks/useTelegram';

const Form = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('');
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Відправити дані',
    });
  }, [tg]);

  useEffect(() => {
    if (!country || !city) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, tg]);

  const onChangeCountry = (evt) => {
    setCountry(evt.target.value);
  };
  const onChangeCity = (evt) => {
    setCity(evt.target.value);
  };
  const onChangeSubject = (evt) => {
    setSubject(evt.target.value);
  };

  return (
    <form className={s.form}>
      <h3>Введіть ваші дані:</h3>
      <input
        className={s.input}
        type="text"
        placeholder="Країна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={s.input}
        type="text"
        placeholder="Місто"
        value={city}
        onChange={onChangeCity}
      />
      <select className={s.select} value={subject} onChange={onChangeSubject}>
        <option value="phisycal">Фіз. особа</option>
        <option value="legal">Юр. особа</option>
      </select>
    </form>
  );
};

export default Form;
