import { axiosInstance } from 'libraries/index';

import { GET_DATA, FILTER_DATA, SELECT_LIMIT, CURRENT_COUNT, SELECT_OFFSET } from '../reducers/pokemonReducer'

export const getCurrentData = (offset, limit) => async (dispatch) => {
	const reqs = await axiosInstance
		.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
		.then((res) => res.data)
		.catch((err) => console.log(err))
	const requests = reqs.results.map(async (item) => await axiosInstance.get(item.url))

	Promise.all(requests).then((responses) => {
		const filteredData = responses.map((response) => {
			const { data } = response
			const { name, types, stats, sprites } = data
			const newData = {
				name: name,
				types: types,
				stats: stats,
				img: sprites.back_default
			}
			return newData
		})
		dispatch({ type: GET_DATA, payload: filteredData })
	})
}

export const filterData = (data) => {
	return {
		type: FILTER_DATA,
		payload: data
	}
}

export const changeLimit = (limit) => {
	return {
		type: SELECT_LIMIT,
		payload: limit
	}
}

export const currentCount = (count) => {
	return {
		type: CURRENT_COUNT,
		payload: count
	}
}

export const changeOffset = (offset) => {
	return {
		type: SELECT_OFFSET,
		payload: offset
	}
}
