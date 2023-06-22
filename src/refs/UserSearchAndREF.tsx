import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'xx', age: 20 },
  { name: 'oo', age: 20 },
  { name: 'ww', age: 20 },
];

type User = { name: string; age: number };

const UserSearchREF: React.FC = () => {
  // apply a type that describes the type of element it refers to (ctrl+click to see more)
  // | null - because the ref may not be added to any element
  // and give the REF itself a default value of null - in braces
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    // type guard if null
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const found = users.find((user) => {
      return user.name === name;
    });
    setUser(found);
  };

  return (
    <div>
      User Search plus useREF <br />
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>FIND</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearchREF;
