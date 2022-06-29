import Heading from "./components/Heading";
import List from "./components/List";
import Pi, { doublePi } from "./components/pi";

import Card from "./components/cards";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <List />
      <p>{Pi}</p>
      <p>{doublePi}</p>
      <Card imageUrl="https://ilinks.io/static/images/main.webp" />
    </div>
  );
}
