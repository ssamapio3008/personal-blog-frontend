import { Container } from "./style";

export function Input({...rest}) {

    return(

        <Container>

            <input {...rest} />

        </Container>

    );

}