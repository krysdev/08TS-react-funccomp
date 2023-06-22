import { useState } from 'react';

const users = [
  { name: 'x', age: 20 },
  { name: 'o', age: 20 },
  { name: 'w', age: 20 },
];

type User = { name: string; age: number };

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const found = users.find((user) => {
      return user.name === name;
    });
    setUser(found);
  };

  return (
    <div>
      User Search <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>FIND</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
