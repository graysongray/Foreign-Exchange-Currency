import React from 'react';
import {
    CurrencyListContainer,
    CurrencyBody,
    CurrencySubtitle,
    CurrencyButton,
}from './CurencyListStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CurrencyList = (props) => {
    const { baseCurrency, currencyData, selectedCurrency, handleRemoveCurrency, apiLoading} = props;
    
    const CurrencyListBlock = selectedCurrency.map((currencyCode)=>{
        const currency = currencyData.find(obj => obj.CurrencyCode === currencyCode);
        let currencyRate, currencyName, currencyValue;
        
        if(currency !== undefined){
            currencyRate = currency.Rates;
            currencyName = currency.CurrencyName;
            currencyValue = baseCurrency * currencyRate;
            currencyValue = currencyValue.toLocaleString(undefined, {maximumFractionDigits:4})
        }
        
        return (
            <CurrencyListContainer key={currencyCode}>
                <CurrencyBody>
                    <CurrencySubtitle>
                        <label>{currencyCode}</label>
                        <label>{!apiLoading ? currencyValue :<FontAwesomeIcon icon="spinner" spin  size="xs" />}</label>
                    </CurrencySubtitle>
                    <h4>{currencyCode} - {currencyName}</h4>
                    <h5>1 {currencyCode} = {currencyCode} </h5>
                </CurrencyBody>

                <CurrencyButton onClick={(e)=>handleRemoveCurrency(currencyCode)}>
                    <span>(-)</span>
                </CurrencyButton>
            </CurrencyListContainer>
        )
    })


    return(
        <div>
            {CurrencyListBlock}

            {selectedCurrency.length === 0 &&
                <CurrencyListContainer>
                    <CurrencyBody>
                        <span>No currency selected, please add first!</span>
                    </CurrencyBody>
                </CurrencyListContainer>
            }
        </div>
    )
    

}
export default CurrencyList;