/** @format */

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import action from '../../store/actions/index'
import selector from '../../store/selectors/index'
import { Pagination, WorldBg } from '../../components/Index'

import styles from './Landing.scss'

const Landing = () => {
	const data = useSelector(selector.data)
	const offset = useSelector(selector.offset)
	const limit = useSelector(selector.limit)
	const currentPage = useSelector(selector.currentPage)

	const dispatch = useDispatch()

	useEffect(
		() => {
			const count = offset === 0 ? 1 : Math.ceil(offset / limit)
			dispatch(action.currentCount(count))
			dispatch(action.getCurrentData(offset, limit))
		},
		[ offset, limit ]
	)

	const selectPaginationNum = (num) => {
		dispatch(action.currentCount(num))
		dispatch(action.changeOffset(limit * num))
	}

	const clickNext = () => {
		const allpageCount = Math.ceil(1118 / limit)
		offset < allpageCount - 1 && dispatch(action.changeOffset(offset + limit))
		currentPage < allpageCount - 1 && dispatch(action.currentCount(currentPage + 1))
	}

	const clickPrev = () => {
		const prevOffset = offset === 0 ? 0 : offset - limit
		dispatch(action.changeOffset(prevOffset))
		currentPage > 1 && dispatch(action.currentCount(currentPage - 1))
	}

	return (
		<section className={styles.column}>
			<WorldBg />
			<div className={classNames(styles.column_basis, 'container')}>
				<Pagination
					limit={limit}
					selectPaginationNum={selectPaginationNum}
					clickNext={clickNext}
					clickPrev={clickPrev}
					currentPage={currentPage}
				/>

				<div className={styles.column__flip_card}>
					{data &&
						data.map((item, idx) => {
							return (
								<div className={styles.column__flip_card__basis} key={`item ${idx}`}>
									<div className={styles.column__flip_card__basis__inner}>
										<div className={styles.column__flip_card__basis__inner__front}>
											<span
												className={styles.column__flip_card__basis__inner__front__spinner_one}
											/>
											<span
												className={styles.column__flip_card__basis__inner__front__spinner_two}
											/>
											<span
												className={styles.column__flip_card__basis__inner__front__spinner_three}
											/>
											<span
												className={styles.column__flip_card__basis__inner__front__spinner_four}
											/>
											<img
												className={styles.column__flip_card__basis__inner__front__img}
												src={item.img}
												alt='cartImg'
											/>
											<div
												className={styles.column__flip_card__basis__inner__front__right_column}>
												<div
													className={
														styles.column__flip_card__basis__inner__front__right_column__name
													}>
													{item.name}
												</div>
												<div
													className={
														styles.column__flip_card__basis__inner__front__right_column__types
													}>
													{item.types.map((el, idx) => (
														<p
															className={
																styles.column__flip_card__basis__inner__front__right_column__types__type
															}
															key={`type ${idx}`}>
															{el.type.name}
														</p>
													))}
												</div>
											</div>
										</div>
										<div className={styles.column__flip_card__basis__inner__back}>
											{item.stats.map((el, idx) => {
												return (
													<p
														className={styles.column__flip_card__basis__inner__back__text}
														key={`stat ${idx}`}>{`${el.stat.name} : ${el.base_stat}`}</p>
												)
											})}
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
}

export default Landing
