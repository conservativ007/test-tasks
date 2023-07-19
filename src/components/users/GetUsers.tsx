import { useEffect } from 'react';
import { ShowUsers } from './ShowUsers';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { userSlice } from '../../store/reducers/UserSlice';
import { getAllUsers } from '../helpers/getAllUsers';

import './users.scss';

export const GetUsers = () => {
  const { users } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const { setUsers } = userSlice.actions;

  useEffect(() => {
    getAllUsers().then((data) => dispatch(setUsers(data)));
  }, []);

  if (users.length > 0) {
    return (
      <div className="users">
        {users.map((user, index) => (
          <ShowUsers key={index} {...user} />
        ))}
      </div>
    );
  }

  return <h1>Users not found...</h1>;
};
