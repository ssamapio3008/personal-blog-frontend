import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

`;