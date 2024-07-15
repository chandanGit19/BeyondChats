
// import './App.css';

import Navbar from "./component/Navbar";
import Leftside from "./pages/Leftside";


function App() {
  return (
   <>
  <div className="w-screen overflow-hidden sticky top-0">
  <Navbar/>
  </div>
   <div>
      <Leftside />
      
    </div>
   </>
  );
}

export default App;
