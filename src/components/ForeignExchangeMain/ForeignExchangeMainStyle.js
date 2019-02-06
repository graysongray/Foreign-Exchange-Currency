import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    width: 100%;
    
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

export const CardHeader = styled.header`
    position: relative;
    border-bottom: 1px solid black;

    h3 {
        margin: 0;
        font-size: 1em;
        font-style: italic;
        font-weight: bold;
    }
`;

export const CardSubtitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .5em;
    
    label {
        font-weight: bold;
        font-size: 1.5em;
    }
`;

export const CardBody = styled.div`

`;

export const Card = styled.div`
    position: relative;
    border: 1px solid black;
    width: 450px;
    margin: 1em  auto;

    /* &:nth-of-type(even) {
        background: red;
    } */


    ${CardHeader},
    ${CardBody} {
        padding : .8em;
    }
`;