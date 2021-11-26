import { useState } from "react";
// This is the package we need now
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markDown, setMarkdown] = useState();
 // ok so i have named my file react markdown thats why
  return (
    <>
      <div className="container">
        <textarea
          value={markDown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="textarea"
        ></textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdown;
