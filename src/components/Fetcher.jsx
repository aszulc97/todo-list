import { useState, useEffect } from "react";

export default function Fetcher(props) {
  const [character, setCharacter] = useState({ name: "Loading" });
  const [count, setCount] = useState(1);
  const [distabled, setDistabled] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + count)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setDistabled(false);
        // data.forEach(showArt);
      });
  }, [count]);

  function nextCharacter() {
    setDistabled(true);
    setCount((old) => old + 1);
    setCharacter({ name: "Loading" });
  }
  return (
    <div>
      <button disabled={distabled} onClick={nextCharacter}>
        Add 1
      </button>
      {count} - {character.name}
    </div>
  );
}
