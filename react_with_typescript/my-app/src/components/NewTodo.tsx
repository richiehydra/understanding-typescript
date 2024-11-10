import React, { FormEvent, useRef } from "react";

type todoItem = {
  addtodo: (data: string) => void;
};

const NewTodo: React.FunctionComponent<todoItem> = (props) => {
  var information = useRef<HTMLInputElement>(null);

  const SaveData = (e: FormEvent) => {
    e.preventDefault();
    let info = information.current!.value;
    props.addtodo(info);
  };

  return (
    <>
      <form onSubmit={SaveData}>
        <div>
          <label>Enter the Item</label>
          <input type="text" id="data" ref={information} />
          <button id="btn">Submit</button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
