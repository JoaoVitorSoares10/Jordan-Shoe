import Styled from "styled-components";
import background from "../../Assets/images/wallpaper.jpeg";

export const Container = Styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    color: #fff;

    padding: 8rem 5rem;

    position: relative;

    z-index: 1;

    &::after{
        content: ' ';
        position: absolute;
        inset: 0; 
        z-index: -1;
        opacity: 0.6; 
        background: #000;
    }

    @media (max-width: 720px) {
        padding: 6rem 2rem;
    }
`;

export const InfoArea = Styled.div`
    max-width: 360px;
    line-height: 1.5rem;

    h2 {
        margin-bottom: 1rem;
    }
`;