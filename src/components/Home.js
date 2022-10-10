import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn, notes, search }) {
  const filteredNotes = notes.filter((eachNote) =>
    eachNote.message.toLowerCase().includes(search.toLowerCase())
  ).map((note) => (
    <>
      <div className="imgContainer">
        <img src={note.url} alt="Oops" />
        <h3>{note.title}</h3>
        <p>{note.message}</p>
        <h5>@{note.author}</h5>
      </div>
    </>
  ));
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <div className="imageCard">{filteredNotes}</div>;
}

export default Home;
