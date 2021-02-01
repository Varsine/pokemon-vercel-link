import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ArrowIcon } from '../../icons/next.svg'
import noop from '../../utils/noop'

import styles from './Pagination.scss'

const Pagination = ({ limit, selectPaginationNum, clickNext, clickPrev, currentPage }) => {
	const pageCount = Math.ceil(1118 / limit)
	const paginationNum = [ ...Array(pageCount).keys() ]
	const startPage = currentPage <= 3 ? 1 : currentPage - 3
	const endPage = currentPage === pageCount - 3 ? pageCount : currentPage + 3

	const renderPaginationItems = paginationNum.slice(startPage, endPage).map((num, idx) => {
		return (
			<div
				className={classNames(styles.column__number_unselect, {
					[styles.column__number_selected]: currentPage === num
				})}
				key={`pagination ${idx}`}
				onClick={() => selectPaginationNum(num)}>
				<div
					className={classNames(styles.column__number_unselect__child, {
						[styles.column__number_selected__child]: currentPage === num
					})}>
					{num}
				</div>
			</div>
		)
	})

	return (
		<div className={styles.column}>
			<div className={styles.column__prev} onClick={clickPrev}>
				<ArrowIcon className={styles.column__icon} />
			</div>
			{renderPaginationItems}
			<div className={styles.column__next} onClick={clickNext}>
				<ArrowIcon className={styles.column__icon} />
			</div>
		</div>
	)
}

Pagination.defaultProps = {
	limit: 10,
	selectPaginationNum: noop,
	clickNext: noop,
	clickPrev: noop,
	currentPage: 1
}

Pagination.propTypes = {
	limit: PropTypes.number,
	selectPaginationNum: PropTypes.func,
	clickNext: PropTypes.func,
	clickPrev: PropTypes.func,
	currentPage: PropTypes.number
}
export default Pagination
