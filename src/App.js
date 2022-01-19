import { useEffect, useState } from "react";
import "./App.css";
import lottery from "./lottery";

function App() {
  const [manager, setManager] = useState(null);

  useEffect(() => {
    const getManager = async () => {
      const result = await lottery.methods.manager().call();
      setManager(result);
    };
    getManager();

    return () => {
      return;
    };
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>
        This contract is managed by <strong>{manager}</strong>
      </p>
    </div>
  );
}

export default App;
