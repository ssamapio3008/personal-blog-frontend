import styled from 'styled-components'

export const Container = styled.div`

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-size: cover;

    width: 100%;
    min-height: 100vh;

    align-items: center;
    

    display: grid;
    grid-template-rows: 56px auto;
    grid-template-areas: "header"
    "content";

`;

export const Content = styled.div`

    grid-area: content;

    width: fit-content;
    margin: auto;


`;