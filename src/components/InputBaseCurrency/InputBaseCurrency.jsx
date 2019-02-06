import React from 'react';
import {InputBaseCurrencyField} from './InputBaseCurrencyStyle';

const InputBaseCurrency = (props) => {
    const {baseCurrency, handleChangeBaseCurrency} = props;

    return(
        <InputBaseCurrencyField 
            type="number"
            value={baseCurrency}
            onChange={handleChangeBaseCurrency}
        />
    )

}

export default InputBaseCurrency;