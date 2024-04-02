import React from "react"
import trollFace from "../assets/TrollFace.png"
import reactLogo from "../assets/react.svg"

export default function Header({handleThemeToggle, darkMode}){

    const style = {
        
    }

    return (
        <header>
            <div className="header-container">
                <img src={trollFace} alt="Troll Face" className="troll-logo"/>
                <h1>Meme Generator</h1>
                <div className="misc-container">
                    <p>Built with React</p>
                    <img src={reactLogo} alt="React logo" />
                    <p>🌞</p>
                    <div className={`toggle-container ${darkMode ? "dark-mode" : ""}`} onClick={handleThemeToggle}>
                        <div className="toggle-circle dark-mode"></div>
                    </div>
                    <p>🌛</p>
                </div>
            </div>
        </header>
    )
}
