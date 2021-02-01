import React from 'react';
import { HelmetLayout } from 'layouts/index';
import { Header, Landing } from 'containers/index';

const HomePage = () => (
  <HelmetLayout title="Pokemon" metaDescription="Home page">
    <Header/>
    <Landing/>
  </HelmetLayout>
);

export default HomePage;
