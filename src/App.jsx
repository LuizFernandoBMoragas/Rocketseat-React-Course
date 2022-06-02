import { Post } from "./post";
import "./app.css";

export function App() {
  return (
    <div className="App">
      <Post
        author="Luiz Fernando"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda sequi, saepe repudiandae praesentium expedita perspiciatis iure at repellat a atque! Veritatis nostrum, fugiat repudiandae quasi expedita a deserunt excepturi."
      />
      <Post author="Emili Maia" content="Amor da minha vida todinho" />
    </div>
  );
}
