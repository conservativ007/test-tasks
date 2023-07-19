import { IUser } from '../../types';

export const getAllUsers = (): Promise<IUser[]> => {
  const URL = 'http://localhost:3000';
  let response = fetch(URL);
  return response.then((response) => response.json()).then((data) => data);
};
