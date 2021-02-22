import { useState, useEffect } from 'react'
import Popup from './components/Popup'



function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  

  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true)
    }, 3000);
  }, []);

  return (
    <div className="App">
      <h1>My Popup</h1>
      <br/><br/>
      <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Hi! im Popup</h1>
        <p>Close my popup!</p>
      </Popup>

      <Popup trigger={timePopup} setTrigger={setTimePopup}>
        <h1>Hi! im Popup</h1>
        <p>Close my popup!</p>
      </Popup>
    </div>
  );
}

export default App;
