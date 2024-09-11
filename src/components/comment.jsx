import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react'

export function Comment({content, deleteComment}) {

    const[likeCount, setLikeCount] = useState(0)


    function handlleDeleteComment() {
       deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar  hasBoarder={false} src="https://github.com/diego3g.png" alt="imagem de perfil do usuario"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diegp Fernandes</strong>
                            <time title='11 de maio as sei la' dateTime='2024'>Publicado há 2h</time>
                        </div>

                        <button onClick={handlleDeleteComment} title='Deletar comentario'>
                            <Trash size={22}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
