import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './avatar.jsx'
import { Comment } from './comment.jsx'
import styles from './post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
    const [comments, setComents] = useState([
      'post muito bacana'
])
   
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'as' HH:MM'h'", {
        locale: ptBR
    })

    const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComents([...comments, newCommentText])        
        setNewCommentText('')
    }

    const [newCommentText, setNewCommentText] = useState('')

    function handlleNewCommentChange(){
        setNewCommentText(event.target.value)
    }


    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete
        })
        
        setComents(commentsWithoutDeletedOne)
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title= {publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publisheDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
        
        
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
         name = "comment"
         placeholder="Deixe um comentario"
         onChange = {handlleNewCommentChange}
         value={newCommentText}
         />
        
        <footer>
            <button type='submit'>Comentario</button>
        </footer>
        </form> 

        <div className={styles.commentList}>
           {comments.map(comment => {
            return <Comment key={comment} content={comment} deleteComment={deleteComment} 
             />
           })}
        </div>
        </article>
    )
}