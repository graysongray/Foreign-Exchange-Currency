import React, { Component } from 'react';


import CurrencyList from '../../components/CurrencyList/CurrencyList';
import AddCurrencyButton from '../../components/AddCurrencyButton/AddCurrencyButton';
import AddCurrencyInput from '../../components/AddCurrencyInput/AddCurrencyInput';
import InputBaseCurrency from '../../components/InputBaseCurrency/InputBaseCurrency';
import CurrencyData from '../../utils/CurrencyData';
import ApiUrl from '../../utils/ApiUrl';

import axios from 'axios';

import {
	Container,
	Card,
	CardHeader,
	CardSubtitle,
	CardBody,
} from './ForeignExchangeMainStyle.js';

class ForeignExchangeMain extends Component {
	constructor(props) {
		super(props)
		this.state = {
			baseCurrency:10,
			currencyData: CurrencyData,
			selectedCurrency:[
				'IDR', 'EUR', 'GBP', 'SGD' 
			],
			selectedAddCurrency:'',
			showMoreCurrency: false,
			apiLoaded :false,
			apiLoading :false,
		}
	}

	componentDidMount(){
		this.getCurrency();
	}

	getCurrency = () => {
		const {currencyData} = this.state;
		const self = this;

		this.setState({
			apiLoading:true
		});
		axios.get(ApiUrl)
			.then((res)=>{
				const apiData = res.data;

				const updatedCurrencyData = currencyData.map((val)=>{
					const rates = apiData.rates[val.CurrencyCode];
					val.Rates = rates;
					return val;
				})
				self.setState({
					currencyData: updatedCurrencyData,
					apiLoaded : true,
					apiLoading : false
				});
		}).catch((error)=>{
			alert(error);
			self.setState({
				apiLoading:false
			})
		})
	}

	handleChangeBaseCurrency = (e)=>{
		this.setState({
			baseCurrency : e.target.value
		});
	}

	handleClickMoreCurrency = () =>{
		this.setState({
			showMoreCurrency: true,
		})
	}

	handleClickAddCurrency = () =>{
		const {selectedAddCurrency, selectedCurrency} = this.state;

		if(selectedAddCurrency !== ''){
			selectedCurrency.push(selectedAddCurrency);
			this.setState({
				showMoreCurrency : false,
				selectedAddCurrency : ''
			})
		}else{
			alert('Select currency first!');
		}
		
		
	}

	handleChangeAddCurrency= (e) =>{
		this.setState({selectedAddCurrency : e.target.value})
	}
	handleRemoveCurrency = (currencyCode) =>{
		const {selectedCurrency} = this.state;

		const newArray =  selectedCurrency.filter(val => val !== currencyCode);
		this.setState({
			selectedCurrency :newArray
		});
	}

  	render() {
		const { baseCurrency, currencyData, selectedCurrency, showMoreCurrency, apiLoading , selectedAddCurrency} = this.state;

		return (
			<Container>
				<Card>
					<CardHeader>
						<h3>USD - United States Dollar</h3>
						<CardSubtitle>

							<label>USD</label>

							<InputBaseCurrency
								baseCurrency = {baseCurrency}
								handleChangeBaseCurrency = {this.handleChangeBaseCurrency}
								currencyData = {currencyData}
								selectedCurrency = {selectedCurrency}
							/>

						</CardSubtitle>
						
					</CardHeader>

					<CardBody>

						<CurrencyList 
							baseCurrency = {baseCurrency}
							currencyData = {currencyData}
							selectedCurrency = {selectedCurrency}
							handleRemoveCurrency = {this.handleRemoveCurrency}
							apiLoading = {apiLoading}
						/>

						{ showMoreCurrency && 
							<AddCurrencyInput 
								handleClickAddCurrency = {this.handleClickAddCurrency}
								currencyData = {currencyData}
								selectedCurrency = {selectedCurrency}
								selectedAddCurrency = {selectedAddCurrency}
								handleChangeAddCurrency = {this.handleChangeAddCurrency}
							/>
						}
						
						{ !showMoreCurrency && 
							<AddCurrencyButton 
								handleClickMoreCurrency={this.handleClickMoreCurrency}
							/>
						}
						
					</CardBody>
				</Card>

			</Container>
		);
	}
}

export default ForeignExchangeMain;
