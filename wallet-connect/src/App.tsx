import { useAuth } from "./hooks/useAuth";
import { setUpNetwork } from "./utilis/function";

function App() {
  console.log(setUpNetwork("5"));

  console.log(useAuth());
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
