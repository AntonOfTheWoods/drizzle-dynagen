import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Label, Input, generateSql } from "../";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

const matable = pgTable("help", {
  id: uuid().notNull().primaryKey(),
  title: text().notNull(),
  body: text(),
});

function App() {
  const [count, setCount] = useState(0);
  const [inputCustomCountValue, setInputCustomCountValue] = useState("");

  const handleClickCustomCount = () => {
    if (inputCustomCountValue === "") {
      setCount((count) => count + 1);
    } else {
      setCount(Number(inputCustomCountValue));
    }
  };
  useEffect(() => {
    generateSql({ tables: [matable] }).then((x) => {
      console.log(x.sqlStatements[0]);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Label>My Label</Label>
        <br />
        <Input
          placeholder="Custom count"
          value={inputCustomCountValue}
          onChange={(e) => setInputCustomCountValue(e.target.value)}
        />
        <br />
        <Button onClick={handleClickCustomCount}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
