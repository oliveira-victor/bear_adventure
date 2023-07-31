import styled from 'styled-components'
import background from './assets/background.webp'

export const HeroStyle = styled.div`
    max-width: 1920px;
    height: 100vh;
    background-image: url('${background}');
    background-size: cover;
    display: flex;
    align-items: center;

    @media (min-width: 769px) and (max-width: 1080px) {
        display: block;
        padding-top: 10%;
    }
`

export const HeroElementsContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #fff;
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.9);

    .presents {
        text-align: center;
    }

    .phoneImage {
        width: 400px;
    }

    .gameTitleImg {
        width: 24vw;
        display: block;
        margin: 14px auto;
    }

    .downloadButtonsContainer {
        display: flex;
        justify-content: center;
        gap: 60px;
        padding-top: 40px;

        img {
            width: 200px;
        }

        img:hover {
            transform: translateY(-4px);
            box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
        }
    }

    @media (max-width: 630px) {
        display: block;
        width: 90%;
        font-size: 4vw;

        .phoneImage {
            display: none;
        }

        .gameTitleImg {
        width: 80%;
        display: block;
        margin: 14px auto;
        }

        .downloadButtonsContainer {
            padding-top: 10px;
            gap: 8px;
            display: block;

            img {
                width: 160px;
                padding: 10px 0;
                display: block;
                margin: 0 auto;
            }

            img:hover {
                transform: translateY(-4px);
                box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
            }
        }
    }

    @media (min-width: 631px) and (max-width: 1080px) {
        width: 90%;

        .downloadButtonsContainer {
            display: block;
        }

        .phoneImage {
        width: 80%;
        display: block;
        margin: 0 auto;
        }
    }
`
export const ExtraPhoneImg = styled.div`
display: none;

@media (max-width: 630px) {
    display: block;
    position: relative;

    .freeToPlay {
        background-color: green;
        color: #fff;
        font-weight: bolder;
        font-size: 1em;
        width: 100px;
        height: 100px;
        text-align: center;
        border-radius: 50%;
        border: 4px solid #fff;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 10px;
        left: 20px;
        padding: 10px;
        transform: rotate(-20deg);
    }

    & img {
        width: 70%;
        padding: 40px 10px;
        display: block;
        margin: 0 auto;
    }
}
    
`