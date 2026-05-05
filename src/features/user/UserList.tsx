// components/UserList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import UserItem from './UserItem';

const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);

  console.log('UserList Rendered');

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default React.memo(UserList);
