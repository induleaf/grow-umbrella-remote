import React from 'react';
import getList from './models/overviewList';
import Overview from './Overview';

const MainApp = (): React.ReactElement => {
  return (
    <div>
      <h1>TS-REMOTE</h1>
      <Overview list={getList('Bulb')} />
    </div>
  );
};

export default MainApp;
