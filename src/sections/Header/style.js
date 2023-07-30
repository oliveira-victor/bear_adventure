import styled from 'styled-components'

export const HeaderStyle = styled.header`
    max-width: 1920px;
    height: 72px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;

    & img {
        height: 44px;
    }

    & button {
        width: 100px;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        background-color: transparent;
        border-radius: 14px;
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            background-color: #000;
            color: #fff;
            font-weight: lighter;
            transform: scale(1.15);
        }
    }

    @media (max-width: 768px) {
        height: 72px;
        justify-content: space-between;
        padding: 10px 10px;

        & img {
        height: 44px;
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
    }
`