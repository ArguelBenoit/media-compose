import React from 'react';
import 'Styles/header.less';

export default props => {
  const { clickMenu, smallScreen } = props;
  return <header className={smallScreen ? 'smallScreen' : ''}>
    <div className="button-menu" onClick={clickMenu}>
      <div />
      <div />
      <div />
    </div>
    <h1>
      MediaMama
    </h1>
  </header>;
};
