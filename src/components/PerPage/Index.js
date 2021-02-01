/** @format */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import action from '../../store/actions/index'
import selector from '../../store/selectors/index'
import { ReactComponent as PgDnIcon } from '../../icons/pgDn.svg'

import styles from './PerPage.scss'

const PerPage = () => {
	const limit = useSelector(selector.limit)
	const dispatch = useDispatch()
	const [ isSelect, setIsSelect ] = useState(false)

	const changePageLimit = (num) => {
		setIsSelect(!isSelect)
		dispatch(action.changeLimit(num))
	}
	return (
		<div className={styles.column} onClick={() => setIsSelect(!isSelect)}>
			<div className={styles.column__count} onClick={() => setIsSelect(!isSelect)}>
				<div className={styles.column__count__value}>Per {limit}</div>
				<PgDnIcon />
			</div>
			<div className={!isSelect ? styles.column__select_close : styles.column__select_open}>
				<div className={styles.column__select_open__inner}>
					<div onClick={() => changePageLimit(10)} className={styles.column__select_open__inner__option}>
						Per 10
					</div>
					<div onClick={() => changePageLimit(20)} className={styles.column__select_open__inner__option}>
						Per 20
					</div>
					<div onClick={() => changePageLimit(50)} className={styles.column__select_open__inner__option}>
						Per 50
					</div>
				</div>
			</div>
		</div>
	)
}

export default PerPage
