import styled from "styled-components";

export const Container = styled.button`

    width: 100%;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 8px 8px;

    border: none;
    border-radius: 10px;

    margin-top: 10px;

    color: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;

`;