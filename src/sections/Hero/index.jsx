import { HeroStyle, HeroElementsContainer, ExtraPhoneImg } from './style'

import phone from './assets/phone.webp'
import title from './assets/gameTitle.webp'
import googlePlay from './assets/googlePlay.svg'
import appStore from './assets/appStore.svg'

const Hero = () => {
    return (
        <>
            <HeroStyle>
                <HeroElementsContainer>
                    <div className="imgContainer">
                        <img src={phone} className='phoneImage' alt="Phone interface mockup" />
                    </div>
                    <div className="textContainer">
                        <p className='presents'>Digital Dice presents:</p>
                        <img src={title} className='gameTitleImg' alt="Bear Adventure title" />
                        <p>
                            An enchanted forest, but taken over by hunters in search of rewards. Gumph is a Bear about to become a hero in the defense of his home filled with magic, with his unique skills developed throughout his journey. Will he make it to get rid of all the vilains and their shotguns?
                        </p><br />
                        <p>
                            Bear Adventure is an adventure and strategy game. During the phases, you will need to show skills, quick reasoning and the capacity to solve puzzles. The more you play, the more exciting it gets! And you can also try the online multiplayer mode, where you will be able to choose the team of animals or hunters. Download now for free and let the adventure begin!
                        </p>
                        <div className="downloadButtonsContainer">
                            <a href="#">
                                <img src={appStore} alt="App Store button" />
                            </a>
                            <a href="#">
                                <img src={googlePlay} alt="Google Play button" />
                            </a>
                        </div>
                    </div>
                </HeroElementsContainer>
            </HeroStyle>
            <ExtraPhoneImg>
                <div className='freeToPlay'>FREE<br /> TO<br />  PLAY</div>
                <img src={phone} className='phoneImage' alt="Phone interface mockup" />
            </ExtraPhoneImg>
        </>
    )
}

export default Hero