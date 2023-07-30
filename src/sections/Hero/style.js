import styled from 'styled-components'
import background from './assets/background.webp'

export const HeroStyle = styled.div`
    max-width: 1920px;
    height: 100vh;
    background-image: url('${background}');
    background-size: cover;
    display: flex;
    align-items: center;

    & img {
        width: 500px;
    }
`

export const HeroElementsContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    color: #fff;
`