import React from 'react';
import styles from './styles.module.less';

const Blank: React.SFC = React.memo(({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
});

export default Blank;
