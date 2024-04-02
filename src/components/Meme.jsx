import React from "react"

export default function Meme({darkMode, handleNewImage, memeImage}){

    const [topText, setTopText] = React.useState("Top Text")
    const [bottomText, setBottomText] = React.useState("Bottom Text")

    function handleChange(){
        setTopText(document.getElementById("top-text").value)
        setBottomText(document.getElementById("bottom-text").value)
    }

    return (
        <main>
            <form>
                <label htmlFor="top-text">
                    <input type="text" placeholder="Top Text" id="top-text" name="top-text" onChange={handleChange}/>
                </label>

                <label htmlFor="bottom-text">
                    <input type="text" placeholder="Bottom Text" id="bottom-text" name="bottom-text" onChange={handleChange}/>
                </label>
                <button className="img-btn" onClick={handleNewImage}>Get a new meme image 🖼️</button>
            </form>

            <div className="meme-container">
                <p className="meme-text-top">{topText}</p>
                <img src={memeImage} alt="meme-img" className="meme-img" />
                <p className="meme-text-bottom">{bottomText}</p>
            </div>
        </main>
    )
}