import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    height: 56px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    padding: 0 35px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Perfil = styled.div`

    width: fit-content;
    color: white;
    display: flex;
    align-items: center;


    > button {

        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
       

        > img {

            width: 40px;
            height: 40px;
            border-radius: 50%;
            align-self: center;

        }

}

    > span {

        margin-left: 10px;

    }

`;

export const Input = styled.input`

    width: 230px;
    height: 25px;

    border: none;
    border-radius: 8999px;
    padding: 5px 10px;
    margin-right: 115px;

`;

export const turnOff = styled.button`

    border: none;
    background: none;

    display: flex;
    right: 0;
    justify-self: end;
`;