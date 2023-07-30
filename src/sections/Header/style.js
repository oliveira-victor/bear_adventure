import styled from 'styled-components'

export const HeaderStyle = styled.header`
    max-width: 1920px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;

    & img {
        width: 200px;
    }

    & button {
        width: 100px;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        background-color: transparent;
        border-radius: 14px;
        cursor: pointer;
    }
`