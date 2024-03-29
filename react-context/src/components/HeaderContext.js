import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

const HeaderContext = () => {
    const {theme, handleTheme} = useContext(ThemeContext)
    const {texts, handleTexts} = useContext(LanguageContext)
    const {auth, handleAuth} = useContext(AuthContext)

    return (
        <header className={theme}>
            <h2>{texts.headerTitle}</h2>

            <h3>{texts.headerSubtitle}</h3>
            <select name="language" onChange={handleTexts}>
                <option value="es" >ES</option>
                <option value="en" >EN</option>
            </select>
            <input type="radio" name="theme" id="light" value="light" onClick={handleTheme}/>
            <label htmlFor="light" >{texts.headerLight}</label>
            <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme}/>
            <label htmlFor="dark" >{texts.headerDark}</label>
            <button onClick={handleAuth}>{auth ? texts.buttonLogout : texts.buttonLogin}</button>
        </header>
    )
}

export default HeaderContext