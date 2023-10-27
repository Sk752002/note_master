import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const Createnote = (props) => {
  const [expand, setexpand] = useState(false);

  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const setevent = (event) => {
    const { name, value } = event.target;
    setnote((olditem) => {
      return {
        ...olditem,
        [name]: value,
      };
    });
  };

  const addevent = (event) => {
    event.preventDefault();
    props.passnote(note);
    setnote({
      title: "",
      content: "",
    });
  };

  const show = () => {
    setexpand(true);
  };

  const hide = () => {
    setexpand(false);
  };

  return (
    <>
      <div className="crnotes" onDoubleClick={hide}>
        <form>
          {expand ? (
            <input
              type="text"
              value={note.title}
              placeholder="Title"
              onChange={setevent}
              name="title"
              autoComplete="off"
            />
          ) : null}
          <br />
          <textarea
            rows=""
            cols=""
            value={note.content}
            type="text"
            placeholder="Write A Note..."
            onChange={setevent}
            name="content"
            onClick={show}
          ></textarea>

          {expand ? (
            <Button className="btn" onClick={addevent}>
              {" "}
              <AddIcon className="icon" />{" "}
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Createnote;
