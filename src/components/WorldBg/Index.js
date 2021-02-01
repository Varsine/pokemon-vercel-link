import React from 'react'

import styles from './WorldBg.scss'

const WorldBg = () => (
	<div className={styles.column}>
		<div className={styles.column__world}>
			<div className={styles.column__world__circle}>
				<div className={styles.column__world__circle__moon} />
			</div>
			<div className={styles.column__world__earth} />
		</div>
	</div>
)

export default WorldBg
