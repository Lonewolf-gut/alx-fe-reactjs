import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import WelcomeMessage from "./components/WelcomeMess
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ProfilePage from "./components/ProfilePage";
import Counter from "./components/Counter";
import "./App.css";
import UserContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  );
}

export default App;
