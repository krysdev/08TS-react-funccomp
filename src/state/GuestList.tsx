import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState(''); // useState<number> - TS inference
  const [guests, setGuests] = useState<string[]>([]); // here inference does not work properly so < >

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      LIST
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
};

export default GuestList;
