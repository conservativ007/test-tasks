import './search.scss';
import search from '../../assets/images/search.svg';

import { useAppDispatch } from '../../hooks/redux';

import { userSlice } from '../../store/reducers/UserSlice';
import { ChangeEvent } from 'react';
import { getAllUsers } from '../helpers/getAllUsers';

export const Search = () => {
  const URL = 'http://localhost:3000';

  const dispatch = useAppDispatch();
  const { setUsers } = userSlice.actions;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    let searchingValue = e.target.value.toLowerCase();

    let UrlFindUser = `${URL}?term=${searchingValue}`;
    let response = fetch(UrlFindUser);

    response
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)));

    if (searchingValue === '') {
      getAllUsers().then((data) => dispatch(setUsers(data)));
    }
  };

  return (
    <div className="search">
      <input type="text" onChange={handleSearch} />
      <img src={search} alt="search" />
    </div>
  );
};
