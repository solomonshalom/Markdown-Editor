import { useState } from "react";
// This is the package we need now
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markDown, setMarkdown] = useState();
  const element = <h1>Hello, world!</h1>;
 // ok so i have named my file react markdown thats why
  return (
    <>
      <div className="container">
        <h1 className="header">Markdown Editor</h1>
        <textarea
          value={markDown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="textarea"
        ></textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
      <footer>By Solomon Shalom Lijo</footer>
    </>
  );
};

export default Markdown;
