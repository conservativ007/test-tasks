import { IUser } from '../../types';
import phone from '../../assets/images/phone.svg';
import message from '../../assets/images/message.svg';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';

export const ShowUsers = (user: IUser) => {
  const dispatch = useAppDispatch();
  const { setTargetUser } = userSlice.actions;

  const userHandler = (user: IUser) => {
    dispatch(setTargetUser(user));
  };

  return (
    <div className="user" onClick={() => userHandler(user)}>
      <h2 className="user-name">{user.name}</h2>
      <div className="user-phone">
        <img src={phone} alt="phone" />
        <p>{user.phone}</p>
      </div>
      <div className="user-message">
        <img src={message} alt="phone" />
        <p>{user.email}</p>
      </div>
    </div>
  );
};
