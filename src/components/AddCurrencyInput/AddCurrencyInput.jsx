import React from 'react';
import {
    AddCurrencyInputContainer,
    AddCurrencyInputField,
    AddCurrencyInputButton
} from './AddCurrencyInputStyle';

const AddCurrencyInput = (props) => {
    const { handleClickAddCurrency, selectedCurrency, currencyData, selectedAddCurrency, handleChangeAddCurrency } = props;

    const unselectedCurrency = currencyData.filter((obj) => !selectedCurrency.includes(obj.CurrencyCode));
    const optionAddCurrency = unselectedCurrency.map((obj) =>{
        return(
            <option key={obj.CurrencyCode} value={obj.CurrencyCode}>{obj.CurrencyCode} - {obj.CurrencyName}</option>
        )
    });
    return(
        <div>
            <AddCurrencyInputContainer>

                <AddCurrencyInputField 
                    value={selectedAddCurrency}
                    onChange={handleChangeAddCurrency}
                >
                    <option value='' disabled>Select Currency</option>
                    {optionAddCurrency}

                </AddCurrencyInputField>

                <AddCurrencyInputButton onClick={handleClickAddCurrency}>Submit</AddCurrencyInputButton>
                
            </AddCurrencyInputContainer>
        </div>
    )

}

export default AddCurrencyInput;