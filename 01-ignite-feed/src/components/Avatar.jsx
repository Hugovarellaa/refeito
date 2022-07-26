import styles from './Avatar.module.css'

export function Avatar({ src, outlined = true }) {
  return (
    <img
      className={outlined ? styles.avatar : styles.avatarOutlined}
      src={src}
      alt=""
    />
  )
}