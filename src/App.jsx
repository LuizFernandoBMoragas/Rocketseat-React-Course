import { Post } from "./components/Post";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/96392226?v=4",
      name: "Luiz Fernando Barros Moragas",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala meu povoð " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz por que quis, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-06 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/96392226?v=4",
      name: "Emili Bombonatti Maia Moragas",
      role: "Lawyer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ð " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-07 19:00:00"),
  },
];

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
