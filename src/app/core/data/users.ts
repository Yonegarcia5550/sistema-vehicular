export interface User {
  username: string;
  password: string;
  role: string;
}

export const USERS: User[] = [
  {
    username: 'admin',
    password: '123',
    role: 'administrador'
  },
  {
    username: 'yo',
    password: '1234',
    role: 'usuario'
  },
  {
    username: 'invitado',
    password: '1555',
    role: 'viewer'
  }
];