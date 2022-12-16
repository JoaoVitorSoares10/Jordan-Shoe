import Styled from "styled-components";

export const Container = Styled.div`
    height: 16rem;
    width: 16rem;

    background: var(--cardBackground);
    margin: 0.5rem;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        
        &:hover {
            transform: scale(1.1);
            transition: 1s all ease;
        }
    }
`;