import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import FGBButton from '../../components/FGBButton/FGBButton';
import UserContext from '../../user/UserContext';

import styles from './Profile.module.css';
import { useCookies } from 'react-cookie';

export default () => {

  const [cookies, setCookie, removeCookie] = useCookies();
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [isSave, setIsSave] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [fields, setFields] = React.useState({
    family: '',
    name: '',
    father: '',
    email: '',
    password: '',
    birthdate: '',
    city: '',
    isPlayer: false
  });

  const userDataUrl = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_USER;
  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    fetch(userDataUrl, {credentials: 'include'})
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(e =>  console.log(e));
  }, []);

  const onEdit = () => {
    setIsEdit(true);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const newUserData = {
      email: fields.email,
      password: fields.password,
      family: fields.family,
      name: fields.name,
      father: fields.father,
      birthdate: fields.birthdate,
      city: fields.city,
      isPlayer: fields.isPlayer
    };
    const fullName = [fields.family, fields.name, fields.father].join(' ').trim();

    const options = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(newUserData)
    };
    let url = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_USER_UPDATE;
    const res = await fetch(url, options);

    if (res.ok) {
      setUserContext({fullName, letter: fields.name?.substr(0, 1)});
      setUserData({fullName, ...newUserData});
    } else {
      alert('Данные не удалось сохранить!');
    }
    setIsEdit(false);
  }

  const onLoadPhoto = () => {
  }

  const onChangeValue = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Фамилия Имя Отчество</h1>
        <FGBButton
          color='blue'
          onClickAction={onEdit}
          secondClasses={styles.button}
          startIcon={<FontAwesomeIcon icon={faPenToSquare}/>}
        >
          Изменить
        </FGBButton>
      </header>
      <form onSubmit={onSubmit}>
        <div className={styles.container}>
          <img
            className={styles.photo}
            alt="Нет фото"
            onClick={onLoadPhoto}
            src="/img/users/buskoi.jpg"
          />
          <div className={styles.description}>
            {
              userData.fullName
                ?
                <p>{userData.fullName}</p>
                :
                <div className={styles.full_name}>
                  <input
                    className={styles.input}
                    name="family"
                    onChange={onChangeValue}
                    placeholder="Фамилия"
                    type="text"
                    value={fields.family}
                  />
                  <input
                    className={styles.input}
                    name="name"
                    onChange={onChangeValue}
                    placeholder="Имя"
                    type="text"
                    value={fields.name}
                  />
                  <input
                    className={styles.input}
                    name="father"
                    onChange={onChangeValue}
                    placeholder="Отчество"
                    type="text"
                    value={fields.father}
                  />
                </div>
            }
            {
              userData.email && !isEdit
                ?
                <label className={styles.label}>Почта :<span>{userData.email}</span></label>
                :
                <label className={styles.label}>
                  Почта :
                  <input
                    className={styles.input}
                    name="email"
                    onChange={onChangeValue}
                    type="text"
                    value={fields.email}
                  />
                </label>
            }
            {
              userData.password
                ?
                <label className={styles.label}>Пароль :</label>
                :
                <label className={styles.label}>
                  Пароль :
                  <input
                    className={styles.input}
                    name="password"
                    onChange={onChangeValue}
                    type="password"
                    value={fields.password}
                  />
                </label>
            }
            {
              userData.birthdate
                ?
                <label className={styles.label}>Дата рождения :<span>{userData.birthdate}</span></label>
                :
                <label className={styles.label}>
                  Дата рождения :
                  <input
                    className={styles.input}
                    name="birthdate"
                    onChange={onChangeValue}
                    type="text"
                    value={fields.birthdate}
                  />
                </label>
            }
            {
              userData.city
                ?
                <label className={styles.label}>Город :<span>{userData.city}</span></label>
                :
                <label className={styles.label}>
                  Город :
                  <input
                    className={styles.input}
                    name="city"
                    onChange={onChangeValue}
                    type="text"
                    value={fields.city}
                  />
                </label>
            }
            {
              !userData.isPlayer
                ?
                <label className={styles.label}>Зарегистрировать как игрока?
                  <input
                    name="isPlayer"
                    onChange={onChangeValue}
                    type="checkbox"
                    value={fields.isPlayer}
                  />
                </label>
                :
                <span>Вы зарегистрированы как игрок</span>
            }
            <FGBButton
              color='blue'
              secondClasses={styles.button}
              startIcon={<FontAwesomeIcon icon={faFloppyDisk}/>}
            >
              Сохранить
            </FGBButton>
          </div>
        </div>
      </form>
    </>
  );
}