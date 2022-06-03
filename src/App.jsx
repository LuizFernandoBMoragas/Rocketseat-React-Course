import { Post } from "./post";
import { Header } from "./components/header";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luiz Fernando"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda sequi, saepe repudiandae praesentium expedita perspiciatis iure at repellat a atque! Veritatis nostrum, fugiat repudiandae quasi expedita a deserunt excepturi."
          />
          <Post
            author="Emili Maia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda sequi, saepe repudiandae praesentium expedita perspiciatis iure at repellat a atque! Veritatis nostrum, fugiat repudiandae quasi expedita a deserunt excepturi."
          />
        </main>
      </div>
    </div>
  );
}
