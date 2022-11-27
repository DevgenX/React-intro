import { useState, useEffect } from 'react'

//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';




const App = () => {
  const [ searchField, setSearchField ] = useState(); // [value, setValue]
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters)
    // apply this effect whenever there is changes in the monster array or searchfield
  }, [monsters, searchField])

  const handleInputChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }
  return (
    <div className="App">
    <h1 className="app-title">Monster Rolodex</h1>
    <SearchBox 
    className='monsters-search-box'
    onChange={handleInputChange}
     placeholder='search monsters' 
     />
    {
    <CardList 
    monsters={filteredMonsters} 
    />
     }
    </div>
  );

}

// class App extends Component{
//   constructor() {
//   super();

//   this.state = {
//     monsters: [],
//     searchField: ''
//    };
//   }
//   // set the data once the website is rendered 
//   componentDidMount() {
//     // fetch the API or the data from the site
//     fetch('https://jsonplaceholder.typicode.com/users')
//     // convert the data into a json object
//       .then((response) => response.json())
//       // access the data, each data is called users
//       .then((users) =>
//        this.setState(
//         () => {
//         return { monsters: users};
//       },
//       () => {
//         console.log(this.state)
//       }
//       ))
//   }

//   handleInputChange = (e) => {
//     const searchField = e.target.value.toLowerCase()
//     this.setState(() => ( { searchField } ) )
//   }

//   render () {
//     // destructure objects to remove on repeatedly using this and this.state
//     const { monsters, searchField } = this.state;
//     const { handleInputChange } = this;
//       // filtered monsters is an array filtered depending on
//       // what is the input value
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//   return (
//     <div className="App">
//     <h1 className="app-title">Monster Rolodex</h1>
//     <SearchBox 
//     className='monsters-search-box'
//     handleInputChange={handleInputChange}
//      placeholder='search monsters' 
//      />
//     <CardList 
//     monsters={filteredMonsters} 
//     />
//     </div>
//   );
//   }
// }

export default App;
