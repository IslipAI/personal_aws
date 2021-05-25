import './App.css';

//Components
import Navbar from './components/navbar/Navbar';
import Mainscroller from './components/mainscroller/Mainscroller'

function App() {
  return (
      <body>
        <div className="App">
          <Navbar/>
          <Mainscroller/>
        </div>
      </body>
  );
}

export default App;
