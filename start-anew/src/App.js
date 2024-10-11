import './App.css';
import NavBar from './Components/NavBar';
import GroupBody from './Components/GroupBody';
import OnlineEx from './Components/OnlineEx';
import Cards from './Components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <GroupBody/>
        <OnlineEx/>
        <div className='flex flex-row'>
        <Cards 
        img = './image 12.png'
        supply = 'sold out'
        rating = '5.0'
        location = 'USA'
        title ='life lessons with katie zaferes'
        price  = '$136'
        />
         <Cards 
        img = './wedding-photography 1.png'
        supply = 'online'
        rating = '5.0'
        location = 'USA'
        title ='learn wedding photography'
        price  = '$126'
        />
          <Cards 
        img = './wedding-photography 1.png'
        supply = 'sold out'
        rating = '5.0'
        location = 'USA'
        title ='learn wedding photography'
        price  = '$126'
        />
        </div>
      </header>
    </div>
  );
}

export default App;
