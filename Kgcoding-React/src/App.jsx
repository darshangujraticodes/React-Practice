import BgColorChange from "./components/BgColorChange";
import FetchApi from "./components/FetchApi";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <Header />
      <HeroContent />
      <BgColorChange />
      <TodoApp />
      <FetchApi />
    </>
  );
}

export default App;
