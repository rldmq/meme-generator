import React from "react"

import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App(){

    const [darkMode, setDarkMode] = React.useState(false)
    const [memeData, setMemeData] =  React.useState([])
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/26am.jpg")

    function handleThemeToggle(){
        // document.querySelector(".toggle-container").classList.toggle("dark-mode")
        setDarkMode(prev => !prev)
    }

    function handleNewImage(e){
        e.preventDefault()
        setMemeImage(memeData[Math.floor(Math.random() * memeData.length)].url)
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeData(data.data.memes))
    },[])

    return (
        <div className="app-container">
            <Header darkMode={darkMode} handleThemeToggle={handleThemeToggle}/>
            <Meme 
            darkMode={darkMode} 
            handleNewImage={handleNewImage}
            memeImage={memeImage} 
            />
        </div>
    )
}