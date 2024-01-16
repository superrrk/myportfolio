import LinkedIn from "../pictures/LinkedIn.jpeg"
import Instagram from "../pictures/instagram.jpeg"
import Youtube from "../pictures/youtube.png"
import Me from "../pictures/me.jpeg"
import CatTyping from "../pictures/cattyping.webp"
import Dorm from "../pictures/dorm.jpeg"
import Banner from "../pictures/banner.png"
import Roommate from "../pictures/michelle.jpeg"

export default function portfolio()
{
    return(
        <>
        <div className="Main">
            
            <div id="banner">
                <img src={Banner} id="banner"/>
            </div>
            
            <div id="about">
                <p>
                hello im a college freshman in computer science
                taking on nyc after living in houston my whole life
                </p>
            </div>
               
             <marquee behavior="scroll" direction="left">
                <img src={Me} id="me"/>
                <img src={Dorm} id="full-width-img"/>
                <img src={CatTyping} id="full-width-img"/>
                <img src={Roommate} id="full-width-img"/>
            </marquee>

            <div id="updates">
                <h2> Updates </h2>
                
                <div className="Response">
                    <h3>01/7/24</h3>
                    <p> jade for a week visiting different companies</p>
                    <img src
                </div>

                <div className="Response">
                    <h3>12/7/23</h3>
                    <p> winter break. </p>
                </div>

                <div className="Response">
                    <h3>11/07/23</h3>
                    <p> I </p>
                </div>


            </div>
            

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

        </div>

        </>
    )
}
