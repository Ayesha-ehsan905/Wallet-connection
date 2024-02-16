function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const baseUrl = import.meta.env.VITE_APP_CHAIN_ID;

  console.log(apiKey, baseUrl);
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
