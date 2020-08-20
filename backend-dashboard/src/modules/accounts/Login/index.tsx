import React, { SFC } from 'react';
import styles from './index.module.less';
import CollectionForm from './CollectionForm';
interface Props {
  type?: string;
}
const LoginPage: SFC<Props> = (props) => {
  return (
    <div className={styles.wrapperLogin}>
      <div className={styles.login}>
        <div className={styles.logo}>
          <h3>Welcome to</h3>
          <h1>Starter Kit Admin</h1>
        </div>
        <CollectionForm />
      </div>
    </div>
  );
};

export default LoginPage;
