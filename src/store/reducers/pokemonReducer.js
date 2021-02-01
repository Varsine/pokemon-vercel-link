export const GET_DATA = 'GET_DATA'
export const FILTER_DATA = 'FILTER_DATA'
export const SELECT_LIMIT = 'SELECT_LIMIT'
export const CURRENT_COUNT = 'CURRENT_COUNT'
export const SELECT_OFFSET = 'SELECT_OFFSET'

const initialState = {
	data: [],
	offset: 0,
	limit: 10,
	currentPage: 1
}

const PokemonReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_DATA:
			return {
				...state,
				data: payload
			}
		case FILTER_DATA:
			return {
				...state,
				data: payload
			}
		case SELECT_LIMIT:
			return {
				...state,
				limit: payload
			}
		case SELECT_OFFSET:
			return {
				...state,
				offset: payload
			}
		case CURRENT_COUNT:
			return {
				...state,
				currentPage: payload
			}
		default:
			return state
	}
}

export default PokemonReducer
