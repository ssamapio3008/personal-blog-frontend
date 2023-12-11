import styled from "styled-components";

export const Container = styled.div`

    width: calc(450px, 90%);

    border-radius: 10px;
    box-shadow: 0 1rem 2rem -1rem rgb(0,0,0, 0.3) ;
    padding: 10px 20px 20px;
    background: #dfdfdf;

    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    gap: 4px;
    > img {
        object-fit: cover;
        width: 350px;
        border-radius: 8px;

    }

    > p {

        border-top: 1px solid gray;

        margin-top: 3px;

        font-size: 15px;
        text-align: justify;
        

    }


`;

export const Info = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 8px;
    gap: 4px;
    > button {

        border: 1px solid ${({ theme }) => theme.COLORS.BROWN};
        background: transparent;

        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        > img {

            max-width: 40px;
            max-height: 40px;
            border-radius: 50%;

        }

    }

    > a {

        text-decoration: none;
        color: black;

        font-size: 15px;

        margin-left: 2px;


        &:hover{

            text-decoration: underline;

        }

    }
`;

export const Interaction = styled.div`

    width: 100%;
    margin-top: 3px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    p{
        text-align: right;
        font-size: 14px;
    }
    >div{
        display: flex;
        gap: 5px;
        svg{
            font-size: 20px;
        }
    }
`;