import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const initialTheme = "light"
const initialLanguage = "es"
const initialAuth = null
const translations = {
    es: {
      headerTitle: "Mi aplicación SIN Context API",
      headerSubtitle: "Mi cabecera",
      headerLight: "Claro",
      headerDark: "Oscuro",
      buttonLogin: "Iniciar Sesión",
      buttonLogout: "Cerrar Sesión",
      mainWelcome: "Bienvenid@ invitad@",
      mainHello: "Hola Usuari@",
      mainContent: "Mi contenido principal",
      footerTitle: "Mi pié de página",
    },
    en: {
      headerTitle: "My application without Context API",
      headerSubtitle: "My header",
      headerLight: "Light",
      headerDark: "Dark",
      buttonLogin: "Login",
      buttonLogout: "Logout",
      mainWelcome: "Welcome Guest",
      mainHello: "Hello User",
      mainContent: "My main content",
      footerTitle: "My footer",
    },
  }

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme)
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translations[language])
    const [auth, setAuth] = useState(initialAuth)
    
    const handleTheme = (e) => {
        if(e.target.value === "light")
        setTheme("light")
        else
        setTheme("dark")
    }

    const handleTexts = (e) => {        
        setLanguage(e.target.value)
        setTexts(translations[e.target.value])
    }

    const handleAuth = (e) => {
        // auth ? setAuth(null) : setAuth(true)
        if(auth)
        setAuth(null)
        else
        setAuth(true)
    }

    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme} texts={texts} handleTexts={handleTexts} auth={auth} handleAuth={handleAuth} />
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts} />
        </div>
    )
}

export default MyPage