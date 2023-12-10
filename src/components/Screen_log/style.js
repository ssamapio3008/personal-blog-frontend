import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
    border-radius: 10px;

    padding: 20px 64px 30px;

    > h1{

        font-size: 40px;
        color: ${({ theme }) => theme.COLORS.PINK};
        align-self: center;

    }

    > button:first-child {


        align-self: left;
        
    }

`; 