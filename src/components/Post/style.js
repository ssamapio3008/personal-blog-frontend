import styled from "styled-components";

export const Container = styled.div`


    max-width: 300px;

    border-radius: 10px;
    box-shadow: 0 1rem 2rem -1rem rgb(0,0,0, 0.3) ;
    padding: 10px 20px 20px;
    background: #dfdfdf;

    display: flex;
    flex-direction: column;
    justify-content: center;


    > img {

        object-fit: cover;
        height: 250px;

        border-radius: 10px;

    }

    > p {

        border-top: 1px solid gray;

        margin-top: 3px;

        font-size: 10px;
        text-align: justify;
        

    }


`;

export const Info = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 8px;

    > button:first-child {

        border: 1px solid ${({ theme }) => theme.COLORS.BROWN};
        background: transparent;

        width: 20px;
        height: 20px;
        overflow: hidden;
        border-radius: 50%;

        > img {

            max-width: 20px;
            max-height: 20px;
            border-radius: 50%;

        }

    }

    > a {

        text-decoration: none;
        color: black;

        font-size: 8px;

        margin-left: 2px;

    }
`;

export const Interaction = styled.div`

    width: fit-content;
    margin-top: 3px;

    display: flex;
    gap: 5px;

`;