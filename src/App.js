import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";

function App() {
  const [additem, setadditem] = useState([]);

  const addnote = (note) => {
    setadditem((olddata) => {
      return [...olddata, note];
    });
  };

  const deletenote = (id) => {
    setadditem((pdata) =>
      pdata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <Footer />
      <Createnote passnote={addnote} />

      {additem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={deletenote}
          />
        );
      })}
    </>
  );
}

export default App;
