import React from 'react';

import { FlexButton, FlexLink } from 'components/index';
import { paths } from 'routes/index';

import styles from './Error.scss';

const ErrorContainer = () => (
  <div className={styles.container}>
    <h1>404</h1>
    <FlexButton>
      <FlexLink to={paths.home}>Главная страница</FlexLink>
    </FlexButton>
  </div>
);

export default ErrorContainer;
