import { Header } from "./components/header"
import { Post } from "./components/post"
import './global.css'
import styles from './app.module.css'
import { Sidebar } from "./components/sidebar"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: '<a href="">jane.design/doctorcare </a>'}, 
      {type: 'link', content: '<a href="">#novoprojeto #nlw #rocketseat</a>'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/felipeOrlando.png',
      name: ' Felipe orlando',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: '<a href="">jane.design/doctorcare </a>'}, 
      {type: 'link', content: '<a href="">#novoprojeto #nlw #rocketseat</a>'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
         })}
        </main>
      </div>
    </div>
  )
}

