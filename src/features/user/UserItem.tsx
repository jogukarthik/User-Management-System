// components/UserItem.tsx
import React from 'react';

interface Props {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

const UserItem: React.FC<Props> = ({ user }) => {
  console.log('UserItem Rendered:', user.name);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default React.memo(UserItem);
