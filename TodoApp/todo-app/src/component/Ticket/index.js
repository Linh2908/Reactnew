import React, { memo } from "react";

function Ticket({ content, onDeleteTicket, onChangeCollumnKey }) {
  console.log("re-render");

  const LIST = ["todos", "in-progress", "done", "need-review"];

  const length = content.length - 1;

  const key = content[length] ? content[length].currentCollumnkey : "";
  const newList = LIST.filter((item) => item !== key);
  return (
    <div>
      <h1>{content[length] ? content[length].text : ""}</h1>
      <h1>{content[length] ? content[length].createDate : ""}</h1>
      <h1>{content[length] ? content[length].currentCollumnkey : ""}</h1>

      <button
        onClick={() =>
          onChangeCollumnKey(content[length].currentCollumnkey, newList[0])
        }
      >
        Move to {newList[0]}
      </button>
      <button
        onClick={() =>
          onChangeCollumnKey(content[length].currentCollumnkey, newList[1])
        }
      >
        Move to {newList[1]}
      </button>
      <button
        onClick={() =>
          onChangeCollumnKey(content[length].currentCollumnkey, newList[2])
        }
      >
        Move to {newList[2]}
      </button>
      <button
        onClick={() =>
          onDeleteTicket(content[length].currentCollumnkey, content[length].id)
        }
      >
        DELETE
      </button>
    </div>
  );
}

export default memo(Ticket);
