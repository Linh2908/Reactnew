import React, { useCallback, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import FormEdit from "../FormEdit";
import Ticket from "../Ticket";
import { convert } from "./convert";

function TodoList() {
  const [title, setTitle] = useState("");
  const [ticket, setTicket] = useState("todos");
  const [item, setItem] = useState();
  const [isChange, setIsChange] = useState(false);
  const inputRef = useRef();
  const [content, setContent] = useState({
    todos: {
      key: "todos",
      tickets: [],
    },
    inProgress: {
      key: "in-progress",
      tickets: [],
    },
    done: {
      key: "done",
      tickets: [],
    },
    needReview: {
      key: "need-review",
      tickets: [],
    },
  });
  const handleSubmit = () => {
    if (!title) {
      alert("Please enter content for ticket!");
    } else if (title.length < 4) {
      alert("Please enter at least 4 characters!");
    } else {
      setTicket("todos");
      setContent((prev) => ({
        ...prev,
        todos: {
          ...prev.todos,
          tickets: [
            ...prev.todos.tickets,
            {
              id: uuid(),
              text: title,
              createDate: new Date().toISOString(),
              currentCollumnkey: "todos",
            },
          ],
        },
      }));
      setTitle("");
      inputRef.current.focus();
    }
  };

  const handleColumnChange = useCallback(
    (currentCollumnKey, targetColumnKey) => {
      let currentCollumn = convert(currentCollumnKey);
      let targetCollumn = convert(targetColumnKey);

      const newListCurrent = [...content[currentCollumn].tickets];
      const lastItem = newListCurrent.pop();
      setTicket(targetCollumn);

      setContent((prev) => ({
        ...prev,
        [currentCollumn]: {
          ...prev[currentCollumn],
          tickets: newListCurrent,
        },
        [targetCollumn]: {
          ...prev[targetCollumn],
          tickets: [
            ...prev[targetCollumn].tickets,
            {
              ...lastItem,
              currentCollumnkey: targetColumnKey,
              createDate: new Date().toISOString(),
            },
          ],
        },
      }));
    },
    [content]
  );

  const handleDeleteTicket = useCallback(
    (key, ticketId) => {
      let collumnKey = convert(key);

      const newTicket = content[collumnKey].tickets.filter(
        (ticket) => ticket.id !== ticketId
      );
      setTicket(collumnKey);
      setContent((prev) => ({
        ...prev,
        [collumnKey]: {
          key,
          tickets: newTicket,
        },
      }));
    },
    [content]
  );

  const handleGetInfoTicket = (item) => {
    console.log(item);
    const currentCol = convert(item.currentCollumnkey);
    const _tickets = content[currentCol].tickets.filter(ticket => ticket.id !== item.id);
    console.log(_tickets);
    setIsChange(true);
    setItem(item);
    setTicket(currentCol);
    setContent(prev => ({
      ...prev,
      [currentCol] : {
        ...prev[currentCol],
        tickets : [
          ..._tickets,
          item,
        ]
      }
    }));
  };

  const handleEditTicket = (_content) => {
    if (!_content.text) {
      alert("Please enter content for ticket!");
    } else if (_content.text.length < 4) {
      alert("Please enter at least 4 characters!");
    } else {
      const currentCol = convert(_content.currentCollumnkey);
      setTicket(currentCol);
      const _tickets = content[currentCol].tickets.filter(ticket => ticket.id !== _content.id);
      setContent(prev => ({
        ...prev,
        [currentCol] : {
          ...prev[currentCol],
          tickets : [
            ..._tickets,
            {
              ..._content,
              createDate : new Date().toISOString(),
            },
          ]
        }
      }));
      setIsChange(false);

    }
  };
  const handleCancel = (isCancel) => {
    setIsChange(!isCancel);
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Submit</button>

      <hr />
      <table>
        <thead>
          <tr>
            <th>TO DO</th>
            <th>IN PROGRESS</th>
            <th>DONE</th>
            <th>NEED REVIEW</th>
          </tr>
        </thead>
        <tbody>
          <>
            {content.todos.tickets &&
              content.todos.tickets.map((item) => (
                <tr key={item.id}>
                  <td onClick={() => handleGetInfoTicket(item)}> { item.text }</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            {content.inProgress.tickets &&
              content.inProgress.tickets.map((item) => (
                <tr key={item.id}>
                  <td></td>
                  <td onClick={() => handleGetInfoTicket(item)}>{item.text}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            {content.done.tickets &&
              content.done.tickets.map((item) => (
                <tr key={item.id}>
                  <td></td>
                  <td></td>
                  <td onClick={() => handleGetInfoTicket(item)}>{item.text}</td>
                  <td></td>
                </tr>
              ))}
            {content.needReview.tickets &&
              content.needReview.tickets.map((item) => (
                <tr key={item.id}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td onClick={() => handleGetInfoTicket(item)}>{item.text}</td>
                </tr>
              ))}
          </>
        </tbody>
      </table>
      {content[ticket].tickets.length !== 0 && (
        <Ticket
          content={content[ticket].tickets}
          onDeleteTicket={handleDeleteTicket}
          onChangeCollumnKey={handleColumnChange}
        />
      )}

      {
        isChange && <FormEdit ticket={item} cancel={isChange} onEditTicket={handleEditTicket} onCancel={handleCancel}/>
      }
    </div>
  );
}

export default TodoList;
