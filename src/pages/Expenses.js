import React, { useState } from "react";

const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
    type:"",
  });


  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const [balance, setBalance] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = document.getElementById("typebox");
    let typex = x.value;
    let newTodo = {
      type: typex,
      text: message.text,
      id: new Date().getTime().toString(),
    };
    if (typex == "+") {
      setBalance(balance + Number(message.text));
    }
    else {
      setBalance(balance - Number(message.text));
    }
    setList([...list, newTodo]);
    setMessage({
      type : "",
      text: "",
      id: "",
    });
  };

  return (
    <div>
      <div className="formbox">
      <h1 id="balance">balance : {balance}</h1>
      <form>
        <select id="typebox" >
          <option value="+">+</option>
          <option value="-">-</option> 
        </select>
        <input
          type="number"
          name="message"
          id="message"
          placeholder="enter amount"
          value={message.text}
          onChange={changeMessage}
          />
        <button onClick={handleSubmit} type="submit">
            add
        </button>

      </form>
      </div>

      <hr />
      {list.length === 0 && <h4>There are no transactions</h4>}
      <ul>
        {list.map((eachItem) => {
          const { type, text, id } = eachItem;
          const style = [{ color: "red" }, { color: "green" },];
          return (
            <li key={id}>
              <span id="date"> { Date()}       </span>
              <span id='type' style={(type == "+") ? style[1] : style[0] }>  {type} </span>
              <span style={(type == "+") ? style[1] : style[0]}>{text}</span>


            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;