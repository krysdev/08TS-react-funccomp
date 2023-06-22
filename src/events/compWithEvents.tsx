const CompWithEvents: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { // separate function - inference not applied automatically
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => { 
    console.log(event)
  }

  return (
    <div>
      onChange event <br />
      <input onChange={(e) => console.log(e)} />  {/*  inline function - inference for e applied */}
      <br />
      <input onChange={onChange} />
      <br /><br />
      <div draggable onDragStart={onDragStart}>DRAG ME</div>
    </div>
  );
};

export default CompWithEvents;
