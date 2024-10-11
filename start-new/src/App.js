import logo from './logo.svg';
import './App.css';
import Jokes from './Components/Jokes';
import JokesDatashit from './Components/JokesDatashit';

function App() {
  console.log(JokesDatashit)
  const mappesArr = JokesDatashit.map((Data, index) => <Jokes key = {index} setup = {Data.setup} punchline = {Data.punchline}/>)
  console.log({mappesArr})
  return (
    <div>
      {mappesArr}
    </div>
  );
}

export default App;
