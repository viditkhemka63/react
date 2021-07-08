import "./App.scss";
import Card from "./ components/card";
import { useEffect, useState } from "react";

function effect() {
  console.log("use Effect called");
}
function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [searchField, setSearchField] = useState("");

  useEffect(async () => {
    if (searchField.length === 0) return;
    var res = await fetch(
      `https://dev.to/search/feed_content?per_page=60&page=0&class_name=Article&search_fields=${searchField}`
    );
    res = await res.json();
    setData(res.result);
    console.log(res);

    // .then((res) => res.json())
    // .then((res) => {
    //   console.log(res);
    //   setData(res.result);
    // });
  }, [count]);

  function onChangeHandler(e) {
    // e.preventdefault();
    console.log(e.target.value);
    setSearchField(e.target.value);
  }

  return (
    <>
      <div onClick={() => setCount(count + 1)} className="container">
        {/* <button onClick={() => setCount(count + 1)}>test1</button> */}
        <div style={{ display: "flex" }}>
          <input type="text" onChange={onChangeHandler} />
          <button onClick={() => setCount(count + 1)}> search </button>
        </div>
        {data &&
          data.map((row, index) => {
            return (
              <Card
                key={index}
                title={row.title}
                likes={row.public_reactions_count}
                comments={row.comments_count}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
