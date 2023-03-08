import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import FGBButton from '../../components/FGBButton/FGBButton';
import UserContext from '../../user/UserContext';
import * as util from '../../js/util';
import styles from './Profile.module.css';

export default () => {

  const userDataUrl = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_USER;
  const updateUserUrl = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_USER_UPDATE;

  const [userContext, setUserContext] = React.useContext(UserContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState({});
  const [originData, setOriginData] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(userDataUrl, { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        data = { ...data, fullName: util.fullNameOfObj(data) };
        setData(data);
        setOriginData(data);
      })
      .catch(e =>  {
        console.log(e);
        navigate('/');
      });
  }, []);

  const onEdit = () => { setIsEdit(!isEdit) }

  const onSubmit = async (event) => {
    event.preventDefault();

    setData({ ...data, fullName: util.fullNameOfObj(data) });
    let { fullName, password, ...copiedNewData } = data;
    let updatedData = {};
    for (let key in copiedNewData) {
      if (copiedNewData[key] !== originData[key]) {
        updatedData[key] = copiedNewData[key];
      }
    }

    const options = {
      method: 'PATCH',
      body: JSON.stringify(updatedData),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    };
    await fetch(updateUserUrl, options)
      .then(response => {
        setOriginData(data);
        setUserContext({
          fullName: data.fullName,
          img: userContext.img,
          letter: data.name?.substr(0, 1),
          token: userContext.token
        });
        alert('Данные сохранены!');
      })
      .catch(e => {
        setData(originData);
        console.log(e);
        alert('Данные не удалось сохранить!');
      });

    setIsEdit(false);
  }

  const onLoadPhoto = () => {}

  const onChangeValue = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <header className={styles.header}>
        <FGBButton
          color='blue'
          onClick={onEdit}
          secondClasses={styles.button}
          startIcon={<FontAwesomeIcon icon={faPenToSquare}/>}
        >
          { !isEdit ? 'Изменить' : 'Отменить' }
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
              !isEdit ? <p>{ data.fullName ? data.fullName : 'Фамилия Имя Отчество' }</p>
                :
                <div className={styles.full_name}>
                  <input
                    className={styles.input}
                    name="family"
                    onChange={onChangeValue}
                    placeholder="Фамилия"
                    type="text"
                    value={data.family}
                  />
                  <input
                    className={styles.input}
                    name="name"
                    onChange={onChangeValue}
                    placeholder="Имя"
                    type="text"
                    value={data.name}
                  />
                  <input
                    className={styles.input}
                    name="father"
                    onChange={onChangeValue}
                    placeholder="Отчество"
                    type="text"
                    value={data.father}
                  />
                </div>
            }
            {
              !isEdit ? <label className={styles.label}>Почта :<span>{data.email}</span></label>
                :
                <label className={styles.label}>
                  Почта :
                  <input
                    className={styles.input}
                    name="email"
                    onChange={onChangeValue}
                    type="text"
                    value={data.email}
                  />
                </label>
            }
            {
              !isEdit ? <label className={styles.label}>Пароль :</label>
                :
                <label className={styles.label}>
                  Пароль :
                  <input
                    className={styles.input}
                    name="password"
                    onChange={onChangeValue}
                    type="password"
                    value={data.password}
                  />
                </label>
            }
            {
              !isEdit ?
                <label className={styles.label}>Дата рождения :
                  <span>{ util.getDate(data.birthdate) }</span>
                </label>
                :
                <label className={styles.label}>
                  Дата рождения :
                  <input
                    className={styles.input}
                    name="birthdate"
                    onChange={onChangeValue}
                    type="date"
                    value={data.birthdate}
                  />
                </label>
            }
            {
              !isEdit ? <label className={styles.label}>Город :<span>{data.city}</span></label>
                :
                <label className={styles.label}>
                  Город :
                  <input
                    className={styles.input}
                    name="city"
                    onChange={onChangeValue}
                    type="text"
                    value={data.city}
                  />
                </label>
            }
            {
              data.isPlayer ? <span>Вы зарегистрированы как игрок</span> :
                !isEdit ? <span>Вы не зарегистрированы как игрок</span> :
                <label className={styles.label}>Зарегистрировать как игрока?
                  <input
                    name="isPlayer"
                    onChange={onChangeValue}
                    type="checkbox"
                    value={data.isPlayer}
                  />
                </label>
            }
            <FGBButton
              disabled={!isEdit}
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