import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import WelcomeMessage from "./components/WelcomeMess
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Counter from "./components/Counter";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  );
}

export default App;
