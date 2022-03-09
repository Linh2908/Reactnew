import React, { useState } from "react";
import formEdit from "./formEdit.module.css";
function FormEdit({ ticket, cancel, onEditTicket, onCancel }) {
  const [content, setContent] = useState(ticket);
  const [isCancel, setisCancel] = useState(cancel);

  return (
    <div className={formEdit.main}>
      <div className={formEdit.wrap}>
        <input
          className={formEdit.input}
          value={content.text}
          onChange={(e) =>
            setContent({
              ...content,
              text: e.target.value,
            })
          }
        />
        <div className={formEdit.btn_wrap}>
          <button onClick={() => onEditTicket(content)}>Edit</button>
          <button onClick={() => onCancel(isCancel)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default FormEdit;
