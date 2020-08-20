import React, { FC, memo } from 'react';
//internal
import Avatar from './AvatarDropdown';
import styles from './index.module.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: FC<{ rightProps?: object }> = memo(() => {
  return (
    <div className={styles.right}>
      <Avatar />
    </div>
  );
});

export default GlobalHeaderRight;
