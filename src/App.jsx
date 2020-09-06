//eslint-disable-next-line
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note className="note" />
      <Footer />
    </div>
  );
}
export default App;
