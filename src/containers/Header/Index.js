/** @format */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { PerPage, Search } from '../../components/Index'
import action from '../../store/actions/index'
import selector from '../../store/selectors/index'

import styles from './Header.scss'

const Header = () => {
	const dispatch = useDispatch()
	const [ searchName, setSearchName ] = useState('')
	const [ searchType, setSearchType ] = useState('')
	const data = useSelector(selector.data)
	const offset = useSelector(selector.offset)
	const limit = useSelector(selector.limit)

	const changeSearchName = (e) => {
		setSearchName(e.target.value)
		const setData = data.filter((item) => item.name.includes(searchName))
		searchName.length > 1 ? dispatch(action.filterData(setData)) : dispatch(action.getCurrentData(offset, limit))
	}

	const changeSearchType = (e) => {
		setSearchType(e.target.value)
		const setData = data.filter((item) => {
			return item.types[0].type.name.includes(searchType)
		})
		searchType.length > 1 ? dispatch(action.filterData(setData)) : dispatch(action.getCurrentData(offset, limit))
	}

	return (
		<header className={styles.app}>
			<div className={classNames(styles.app__basis, 'container')}>
				<Search value={searchName} onChange={changeSearchName} placeholder='Search pokemon by name' />
				<Search value={searchType} onChange={changeSearchType} placeholder='Select type tags' />
				<PerPage />
			</div>
		</header>
	)
}

export default Header
