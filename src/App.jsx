import Heading from "./components/Heading";
import List from "./components/List";
import Pi, { doublePi } from "./components/pi";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <List />
      <p>{Pi}</p>
      <p>{doublePi}</p>
    </div>
  );
}
