import headlinesReducer from '../../reducers/headlines-reducer';
import { findAllByTestId } from '@testing-library/react';
import * as c from '../../actions/ActionTypes';

describe('headlinesReducer', () => {
	let action;

	const defaultState = {
		isLoading: false,
		headlines: [],
		error: null
	};

	const loadingState = {
		isLoading: false,
		headlines: [],
		error: null
	};

	// Test One
	test('Should successfully return the default state if no action is passed', () => {
		expect(headlinesReducer(defaultState, { type: null })).toEqual({
			isLoading: false,
			headlines: [],
			error: null
		});
	});

	// Test Two
	test('Requesting headlines should successfully change function isLoading from false to true', () => {
		action = {
			type: c.REQUEST_HEADLINES
		};

		expect(headlinesReducer(defaultState, action)).toEqual({
			isLoading: true,
			headlines: [],
			error: null
		});
	});

	// Test Three
	test('Successfully getting headlines should change isLoading to false and update headlines', () => {
		const headlines = 'A headline';
		action = {
			type: c.GET_HEADLINES_SUCCESS,
			headlines
		};

		expect(headlinesReducer(loadingState, action)).toEqual({
			isLoading: false,
			headlines: 'A headline',
			error: null
		});
	});

	// Test Four
	test('Failing to get headlines should change isLoading to faalse and add an error message', () => {
		const error = 'you done got an error son';
		action = {
			type: c.GET_HEADLINES_FAILURE,
			error
		};

		expect(headlinesReducer(loadingState, action)).toEqual({
			isLoading: false,
			headlines: [],
			error: 'you done got an error son'
		});
	});
});
