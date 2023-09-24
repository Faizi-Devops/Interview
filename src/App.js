import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login'; // Import your Login component
import Otp from "./Otp/Otp"
import Users from "./Users/Users"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Users" element={<Users />} />
        {/* Define other routes here */}
      </Routes>
    </div>
  );
}

export default App;