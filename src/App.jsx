import { Post } from "./post";
import "./global.css";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="App">
      <Header />
      <Post
        author="Luiz Fernando"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda sequi, saepe repudiandae praesentium expedita perspiciatis iure at repellat a atque! Veritatis nostrum, fugiat repudiandae quasi expedita a deserunt excepturi."
      />
      <Post author="Emili Maia" content="Amor da minha vida todinho" />
    </div>
  );
}
