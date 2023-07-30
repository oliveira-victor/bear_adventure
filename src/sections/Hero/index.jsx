import phone from './assets/phone.webp'
import { HeroStyle, HeroElementsContainer } from './style'

import title from './assets/gameTitle.webp'

const Hero = () => {
    return (
        <HeroStyle>
            <HeroElementsContainer>
                <div className="imgContainer">
                    <img src={phone} alt="Phone interface mockup" />
                </div>
                <div className="textContainer">
                    <p>Digital Dice presents:</p>
                    <img src={title} alt="Bear Adventure title" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis praesentium architecto exercitationem, ipsum alias voluptatem velit excepturi sit dicta, necessitatibus aliquid iusto illum. Similique autem maiores perspiciatis consequuntur quibusdam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quasi aliquam possimus odit quibusdam molestiae reprehenderit exercitationem voluptas, odio soluta at consectetur vel ratione autem impedit facilis blanditiis modi!
                    </p>
                </div>
            </HeroElementsContainer>
        </HeroStyle>
    )
}

export default Hero