import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import close from '../../assets/images/close.svg';

import './popup.scss';
import { userSlice } from '../../store/reducers/UserSlice';
import { useEffect, useRef } from 'react';

export const Popup = () => {
  const dispatch = useAppDispatch();
  const { setTargetUser } = userSlice.actions;
  const { targetUser } = useAppSelector((state) => state.userReducer);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    dispatch(setTargetUser(null));
  };

  const handlePopupContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    let elem = e.target as HTMLDivElement;
    if (elem.className === 'popup-container') {
      dispatch(setTargetUser(null));
    }
  };

  useEffect(() => {
    const htmlDocument = document.documentElement as HTMLElement;
    console.log(htmlDocument);

    if (targetUser === null) {
      console.log('target user is null');
      htmlDocument.classList.remove('dark');
      return;
    }
    htmlDocument.classList.add('dark');
    console.log('target user is not null');
  }, [targetUser]);

  if (targetUser !== null) {
    return (
      <div className="popup-container" onClick={handlePopupContainer}>
        <div className="popup" ref={popupRef}>
          <div className="user-name">
            <h2>{targetUser?.name}</h2>
            <img onClick={handleClose} src={close} alt="close" />
          </div>

          <div className="user-info">
            <div className="phone">
              <p>Телефон:</p>
              <p>{targetUser?.phone}</p>
            </div>
            <div className="email">
              <p>Почта:</p>
              <p>{targetUser?.email}</p>
            </div>
            <div className="email">
              <p>Дата приёма:</p>
              <p>{targetUser?.hire_date}</p>
            </div>
            <div className="position">
              <p>Должность:</p>
              <p>{targetUser?.position_name}</p>
            </div>
            <div className="position">
              <p>Подразделение:</p>
              <p>{targetUser?.department}</p>
            </div>
          </div>
          <div className="addition-info">
            <p>Дополнительная информация</p>
            <p>
              Разработчики используют текст в качестве заполнителя макта
              страницы. Разработчики используют текст в качестве заполнителя
              макта страницы.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};
