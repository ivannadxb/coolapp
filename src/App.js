import './App.css';
import image from './note.jpg';
import imageTwo from './hand.jpg';
import { MyList } from './MyList';

function App() {
  return (

<div className='app'>
<div className="container">

<img src={ image } width="250px" alt="notes"/>
</div>

<div className="container">
<h1> My List </h1>
</div>

<MyList/>

<div className="container">
<img src = { imageTwo} width="250px" alt="check mark"/>
</div>
</div>
);
}

export default App;