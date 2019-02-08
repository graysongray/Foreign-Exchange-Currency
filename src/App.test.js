import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

const setup = () => {
  const utils = render(<App />)
  const input = utils.getByLabelText('currency-input');
  return {
    input,
    ...utils,
  }
}

describe('App Test', () => {
  test('App Render without crashing the page', () => {
    render(<App />)
  })
})

describe('Base Currency Input Test', () => {
  test('It should not allow "LETTERS" to be inputted in Base Currency Value', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '$1500'}}) //special character not allowed ($)
    expect(input.value).toBe('') //should be empty
  })

  test('It should not allow "SYMBOLS" to be inputted in Base Currency Value', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '$1500'}}) //symbol not allowed ($)
    expect(input.value).toBe('') //should be empty
  })

  test('It should not allow "SPACE" to be inputted in Base Currency Value', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '150 000'}}) //symbol not allowed ($)
    expect(input.value).toBe('') //should be empty
  })
  
  test('Allow dot (.) as decimal seperator in Base Currency Value', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: '1500.123'}}) //symbol not allowed ($)
    expect(input.value).toBe('1500.123') //should be empty
  })
  

})