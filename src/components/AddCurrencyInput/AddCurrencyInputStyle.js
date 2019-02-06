import styled from 'styled-components';

export const AddCurrencyInputContainer = styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    border:1px solid black;
    background: white;
    width: 100%;
    margin:0 auto;
   
`;

export const AddCurrencyInputField = styled.select`
    position:relative;
    flex: 1;
    border:0px;
    height:50px;
    font-size:1em;
    outline: none;
`;

export const AddCurrencyInputButton = styled.button`
    position:relative;
    border: none;
    border-left: 1px solid black;
    padding: .25em;
    background: white;
    outline: none;
    cursor: pointer;

    font-size:1em;

    &:hover {
        background: #f1f1f1;
    }
`;

