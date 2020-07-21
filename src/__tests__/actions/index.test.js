import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Headline reducer action', () => {
	// Test One
	it('requestHeadlines should create REQUEST_HEADLINES action', () => {
		expect(actions.requestHeadlines()).toEqual({
			type: c.REQUEST_HEADLINES
		});
	});

	// Test Two
	it('getHeadlinesSuccess should create GET_HEADLINES_SUCCESS action', () => {
		const headlines = 'wow a headline';
		expect(actions.getHeadlinesSuccess(headlines)).toEqual({
			type: c.GET_HEADLINES_SUCCESS,
			headlines
		});
	});

	// Test Three
	it('getHeadlinesFailure should create GET_HEADLINES_FAILURE action', () => {
		const error = 'you done got an error son';
		expect(actions.getHeadlinesFailure(error)).toEqual({
			type: c.GET_HEADLINES_FAILURE,
			error
		});
	});
});
