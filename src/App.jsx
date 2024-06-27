import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Loader from "./components/Loader";
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="App ">
      <Home />
    </div>
  );
}

export default App;
