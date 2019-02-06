import styled from 'styled-components';

export const CurrencyListContainer = styled.div`
	position:relative;
	display:flex;
	border: 1px solid black;
	justify-content:space-between;
	margin-bottom:.5em;
`;

export const CurrencyBody=styled.div`
	position:relative;
	width:100%;
	padding:.25em;
	h4 {
		margin: 0;
		font-size: 1em;
		font-style: italic;
		font-weight: bold;
	}
	h5{
		margin:0;
		font-size: 1em;
		font-style: italic;
		font-weight: 500;
	}
`;

export const CurrencySubtitle = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	font-size: 1.25em;
`;

export const CurrencyButton = styled.button`
    position:relative;
    width:50px;
	margin: 0;
	border:none;
    border-left: 1px solid black;
    background: white;
    align-items: center;
    justify-content: center;
    cursor: pointer;
	&:hover {
        background: #f1f1f1;
    }
    font-size:1.5em;
`;