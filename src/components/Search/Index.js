import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { ReactComponent as SearchIcon } from '../../icons/search.svg'

import styles from './Search.scss'

const Search = ({ onChange, value, className, placeholder }) => (
	<div className={classNames(styles.column, className)}>
		<input
			onChange={onChange}
			value={value}
			className={styles.column__input}
			type='text'
			placeholder={placeholder}
		/>
		<SearchIcon />
	</div>
)

Search.defaultProps = {
	value: '',
	onChange: void 0,
	placeholder: 'search'
}

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
	placeholder: PropTypes.string
}

export default Search
