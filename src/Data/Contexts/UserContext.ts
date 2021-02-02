// Utils
import { createContext } from 'react';
// Services
import LocalStorage from '../../Network/Services/Storage/LocalStorage';
// Types
import * as AuthTypes from '../../Data/Model/Auth.type';

export interface IUserContext {
  user: AuthTypes.IUser | undefined;
  updateUser: (user: AuthTypes.IUser) => void;
}
const UserContext = createContext<IUserContext>({
  user: LocalStorage.get(LocalStorage.keys.user),
  updateUser: (user: AuthTypes.IUser | undefined) => {
    LocalStorage.set(LocalStorage.keys.user, user);
  },
});

export default UserContext;
