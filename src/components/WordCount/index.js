import { useState } from "react";

const WordCount = () => {
  const [count, setCount] = useState(0);
  const [words, setWords] = useState([]);
  const onChangeCount = (event) => {
    setCount(event.target.value);
  };
  const onSubmit = async (event) => {
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
      .then((response) => response.text())
      .then((data) => {
        var res = data.split(" ");
        setWords(res);
      });
    event.preventDefault();
  };

  const getTopCountWords = () => {
    var topWords = [];
    for (var i = 0; i < count; i++) {
      topWords.push(words[i]);
    }
    return topWords;
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Count:
        <input type="text" value={count} onChange={onChangeCount} />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <div>
        <h1>Top Words</h1>
        {getTopCountWords().map((eachWord, index) => (
          <p key={index}>{eachWord}</p>
        ))}
      </div>
    </form>
  );
};
export default WordCount;
