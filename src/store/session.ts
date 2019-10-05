import { User } from '../types';

const sessionStorageKey = 'TypeRacer2019';
const users: User[] = [
  {
    gender: 'male',
    nickname: 'rudolf',
    password: '123123',
  },
  {
    gender: 'male',
    nickname: 'bob',
    password: '123123',
  },
  {
    gender: 'female',
    nickname: 'maria',
    password: '123123',
  },
  {
    gender: 'male',
    nickname: 'john',
    password: '123123',
  },
  {
    gender: 'female',
    nickname: 'oxy',
    password: '123123',
  },
];

const setUserToStorage = ({ password, ...user }: User) => {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(user));
};

export const getUser = (): User => {
  const user = sessionStorage.getItem(sessionStorageKey);
  return user ? JSON.parse(user) : user;
};

export const isAuthenticated = (): boolean => !!getUser();

export const signout = (): Promise<undefined> =>
  new Promise(resolve => {
    sessionStorage.removeItem(sessionStorageKey);
    resolve();
  });

export const signin = (
  user: Pick<User, 'nickname' | 'password'>,
): Promise<User> =>
  new Promise((resolve, reject) => {
    const userDb = users.find(
      ({ nickname, password }) =>
        user.nickname === nickname && user.password === password,
    );
    if (userDb) {
      setUserToStorage(userDb);
      resolve(userDb);
    } else {
      reject();
    }
  });
