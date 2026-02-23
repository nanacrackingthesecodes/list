import logo from './logo.svg';
import './App.css';
import Mylist from './components/Mylist/Mylist';
import Navigation from './components/Navigation/Navigation';
import { Gallery } from './components/Gallery/Gallery';
import { UserTable } from './components/UserTable/UserTable';

const imageData = [
  { id: 1, url: "annehathaway.jpg", title: "1", author: "Энн Хетевейн" },
  { id: 2, url: "emilyblunt.jpg", title: "2", author: "Эмили Блант" },
  { id: 3, url: "merylstrepp.jpg", title: "3", author: "Мерил Стрип" }
];

const usersData = [
  { id: 1, name: "Диана", age: 16, city: "Одеса" },
  { id: 2, name: "Маша", age: 18, city: "Львов" },
  { id: 3, name: "Николай", age: 24, city: "Киев" }
];
function App() {
  const formatAge = (age) => `${age} років`;
  return (
    <div className="App">
      {/* <Mylist/> */}
      {/* <Navigation menu={menu} activeId={2} /> */}
      
      <div style={{ padding: '20px'}}>
        <h2>2</h2>
        <Gallery images={imageData}/>
      </div>

      <div style={{padding: '20px'}}>
        <h2>3</h2>
        <UserTable users={usersData} formatAge={formatAge} />
      </div>
    </div>
  );
}

export default App;
