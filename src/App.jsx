import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div style={{maxWidth: "900px",margin: "20px auto",padding: "15px"}}
      >
        <Routes>

          <Route path="/" element={<AllNotifications />}/>

          <Route path="/priority" element={  <PriorityNotifications />}/>

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;