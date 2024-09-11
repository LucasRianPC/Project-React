import styles from './avatar.module.css'

export function Avatar({ hasBoarder = true, src }) {
   

    return (
        <img className={hasBoarder ? styles.avatarWhitBoarder : styles.avatar} 
        src={src} alt="foto de perfil de usuario" />
    )
}