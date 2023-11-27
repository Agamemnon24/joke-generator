import React, { useState, useEffect } from "react";
import "./JokeGenerator.css";

function JokeGenerator() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const api = "https://v2.jokeapi.dev/joke/Any?type=twopart";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("There was an error while fetching:", error)
      );
  }, []);

  const generateJoke = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("There was an error while fetching:", error)
      );
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <div className="joke-container">
        <h1 className="joke-setup">{joke.setup}</h1>
        <h2 className="joke-delivery">{joke.delivery}</h2>
        <h2>&#128514;</h2>
        <button className="generate-button" onClick={generateJoke}>
          Generate Joke
        </button>
      </div>
    </div>
  );
}

export default JokeGenerator;
