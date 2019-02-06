import React from 'react';
import {
    AddCurrencyContainer
}from './AddCurrencyButtonStyle';

const AddCurrencyButton = (props) => {
    const { handleClickMoreCurrency } = props;
    return(
        <AddCurrencyContainer onClick={handleClickMoreCurrency}>
            <span>(+) Add More Currencies</span>
        </AddCurrencyContainer>
    )
}

export default AddCurrencyButton;
