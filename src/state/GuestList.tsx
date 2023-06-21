import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <div>
      LIST
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>ADD</button>
    </div>
  );
};

export default GuestList;
