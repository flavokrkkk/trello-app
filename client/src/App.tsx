import { useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { useActions } from "./hooks/useActions";

function App() {
  const { authenticateUserAsync } = useActions();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authenticateUserAsync();
    }
  }, []);
  return (
    <>
      <NavBar title="Trello" />
      <AppRouter />
    </>
  );
}

export default App;
