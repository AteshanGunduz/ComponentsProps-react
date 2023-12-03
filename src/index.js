import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import users from "./data";

function StatCard(props) {
  const { name, points } = props;
  return (
    <div className="stat-card">
      <h5>{name}</h5>
      <h1>{points}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>React Component and props</h2>
      <div>
        {users.map((user) => {
          return <StatCard {...user} key={user.id} />;
        })}
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
