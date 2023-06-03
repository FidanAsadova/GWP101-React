import "./App.css";
import Cards from "./components/Cards";
import Header from "./layouts/Header";
import Home from "./pages/Home";

function App() {
  let data = [
    {
      id: 1,
      fisrtname: "Fidan",
      surname: "Asadova",
      city: "Goychay",
    },
    {
      id: 2,
      fisrtname: "Sevil",
      surname: "Huseynova",
      city: "Ganja",
    },
    {
      id: 3,
      fisrtname: "Gunay",
      surname: "Hummetova",
      city: "Tovuz",
    },
  ];
  console.log(data);

  return (
    <div className="App">
      <Header />
      <Home />
      <Cards data={data} />
    </div>
  );
}

export default App;
