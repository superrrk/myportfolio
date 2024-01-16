import LinkedIn from "../pictures/LinkedIn.jpeg"
import Instagram from "../pictures/instagram.jpeg"
import Youtube from "../pictures/youtube.png"

export default function portfolio()
{
    return(
        <>
       
        <h1>portfolio</h1>

        <div id="socials">
            <a href="https://www.linkedin.com/in/kellybtruong/" target="_blank">
                <img src={LinkedIn} id="LinkedIn" />
            </a>

            <a href="https://www.instagram.com/superrr.k/" target="_blank">
                <img src={Instagram} id="Instagram" />
            </a>

            <a href="https://www.youtube.com/channel/UCn6vfFkcZA4UfGCHtR7iX2g" target="_blank">
                <img src={Youtube} id="Youtube" />
            </a>
        </div>

        </>

    )
}