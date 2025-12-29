import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/all")
      .then(res => setBuses(res.data));
  }, []);

  return (
    <div>
      <h1>Bus Locations</h1>
      {buses.map(bus => (
        <p key={bus._id}>
          {bus.busNumber} → {bus.latitude}, {bus.longitude}
        </p>
      ))}
    </div>
  );
}

export default App;
