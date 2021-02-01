import { createSelector } from 'reselect'

export const selectState = (state) => state.reducer

export const data= createSelector(selectState, (state=>state.data))

export const offset= createSelector(selectState, (state=>state.offset))

export const limit= createSelector(selectState, (state=>state.limit))

export const currentPage= createSelector(selectState, (state=>state.currentPage))