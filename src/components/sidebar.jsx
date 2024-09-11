import { Avatar } from './avatar'
import styles from './sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1664461664321-c9b95d47f0a4?q=500&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem de perfil pessoal" />

            <div className={styles.profile}>
              <Avatar src="https://github.com/diego3g.png" />

                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20}/>editar seu perfil</a>
            </footer>
        </aside>

    )
}