import "./App.css";
import Users from "./components/Users";

function App() {
  const data = [
    {
      id: 1,
      name: "Fidan",
      surname: "Asadova",
      city: "Goychay",
    },
    {
      id: 2,
      name: "Rashid",
      surname: "Aliyev",
      city: "Ganja",
    },
    {
      id: 3,
      name: "Gunay",
      surname: "Hummetova",
      city: "Tovuz",
    },
  ];
  return (
    <div className="App">
      <h1>React</h1>
      <Users data={data} />
    </div>
  );
}

export default App;
