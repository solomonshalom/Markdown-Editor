import { useState } from "react";
// The main package used, can be installed through Yarn or NPM
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markDown, setMarkdown] = useState();
  const element = <h1>Hello, world!</h1>;
  return (
    <>
      <div className="container">
        <h1 className="header">Markdown <a href="https://markdownguide.org/">Editor</a></h1>
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
