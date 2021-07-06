import "./App.scss";
import Card from "./ components/card";
import { useEffect, useState } from "react";

function effect() {
  console.log("use Effect called");
}
function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://dev.to/search/feed_content?per_page=60&page=0&class_name=Article&search_fields=react"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.result);
      });
  }, [count]);

  return (
    <>
      <div onClick={() => setCount(count + 1)} className="container">
        {/* <button onClick={() => setCount(count + 1)}>test1</button> */}

        {data &&
          data.map((row) => {
            return (
              <Card
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
