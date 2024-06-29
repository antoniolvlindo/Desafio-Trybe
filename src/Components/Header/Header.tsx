import logo from '../../assets/logo.png'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={ styles.header }>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poller+One&display=swap');
      </style>
      <img src={ logo } alt="logo da trybe" />
      <h1>TRYBE NEWS</h1>
    </header>
  )
}

export default Header