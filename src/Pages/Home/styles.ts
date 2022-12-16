import Styled from "styled-components";

export const Container = Styled.div``;

export const ContentTitle = Styled.div`
    text-align: center;

    h2 {
        margin-bottom: 0.5rem;
    }
`;

export const ContentCards = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 3rem;
`;

export const Content = Styled.main`
    padding: 3rem;
    margin: auto;

    max-width: 1200px;
`;