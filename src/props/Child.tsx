interface ChildProps {
  colour: string;
  onClick: ()=>void;
  children?: React.ReactNode;
}

// 'props' destructured
export const Child1 = ({ colour, onClick }: ChildProps) => {
  return (
    <div>
      CHILD1 {colour} <br />
      <button onClick={onClick}>click</button>
    </div>
  );
};

// the component will receive props of type ChildProps
export const Child2: React.FC<ChildProps> = ({ colour, onClick, children }) => {
  return (
    <div>
      CHILD2 {colour} <br />
      {children} <br />
      <button onClick={onClick}>click</button>
    </div>
  );
};
