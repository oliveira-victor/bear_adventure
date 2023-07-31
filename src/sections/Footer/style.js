import styled from 'styled-components'

export const FooterStyle = styled.footer`
    background-color: #222;
    color: #fff;
    padding: 40px 0;

    .footerContainer {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        width: 50%;
        margin: 0 auto;
        justify-content: space-between;
    }

    .footerLogo  {
        width: 250px;
    }

    .icon {
        width: 40px;
        margin: 30px 10px;

        &:hover {
            transform: scale(1.08);
        }
    }

    & p {
        margin: 20px 0;
    }

    @media (max-width: 767px) {
        text-align: center;

        .footerIcons {
            width: 90%;
            margin: 0 auto;
        }

        .footerContainer {
            width: 90%;
        }

        .icon {
        width: 40px;
        margin: 40px 26px;

            &:hover {
                transform: none;
            }
        }
    }
`