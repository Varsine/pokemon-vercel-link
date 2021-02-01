import React from 'react';
import PropTypes from 'prop-types';
import withError from 'next-with-error';

import 'styles/index.global.scss';

import { configureStore } from 'libraries/index';

import ErrorPage from './404';

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};


MyApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default configureStore.withRedux(withError(ErrorPage)(MyApp));