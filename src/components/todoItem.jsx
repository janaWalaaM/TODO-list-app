import React, { useState } from "react";

function TodoItem(props) {
  // const [click, setclick] = useState(false);

  // function handelonClick() {
  //   setclick(!click);
  // }

  return (
    <li
      onClick={() => {
        props.deletitem(props.id);
      }}
      // style={{ textDecoration: click ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
