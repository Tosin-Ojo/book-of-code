import React from "react";
import Cover from "./components/Cover/Cover";
import Page from "./components/Page/Page";
import Cards from "./components/Cards/Cards";
import functions from "./data/functions";
import mobileFunctions from "./data/functionsMobile";
import "./App.css";

const App: React.FC = () => {
  const pages = [];
  let i = 0;
  let functionsLength = functions.length;

  while (i < functionsLength) {
    if (i === 0)
      pages.push(
        <Page
          zIndex={functionsLength - i}
          index={i}
          key={i}
          back={functions[i].task}
          acknowledgement={functions[i].acknowledgement}
        />
      );
    else if (i !== functionsLength - 1)
      pages.push(
        <Page
          zIndex={functionsLength - i}
          index={i}
          key={i}
          back={functions[i].task}
          front={functions[i].solution}
        />
      );
    if (i === functionsLength - 1)
      pages.push(
        <Page
          zIndex={functionsLength - i}
          index={i}
          key={i}
          conclusion={functions[i].conclusion}
          front={functions[i].solution}
        />
      );
    i++;
  }

  return (
    <>
      <div className="App">
        <div className="cover">
          <div className="book">
            <Cover />

            {pages}

            <Cover last />
          </div>
        </div>
      </div>
      <div className="mobile__app">
        <div className="mobile__top">
          <h1 style={{ marginTop: "0.3em" }}>Book of Codes</h1>
          <h2>Oluwatosin Ojo</h2>
        </div>

        <div>
          {mobileFunctions.map((tasks) => (
            <div className="mobile">
              <Cards
                key={tasks.task.title}
                information={tasks.task}
                solution={tasks.solution}
              />
            </div>
          ))}
        </div>

        <div className="mobile__bottom">
          <p>
            compiled from
            <span>Freecodecamp</span>
            <span>LeetCode</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
