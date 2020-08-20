import React, { memo, SFC } from 'react';
import { Button } from 'antd';
import { AppRoutes } from 'src/helpers/app.routes';
import { useHistory } from 'react-router-dom';
import Image from 'src/assets/images/rob.png';
import { useTranslation } from 'react-i18next';

import styles from './../index.module.less';

const Error404: SFC = memo(() => {
  const history = useHistory();
  const { t } = useTranslation();
  const goToHomePage = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push(AppRoutes.home);
  };
  return (
    <div className={styles.iso404Page}>
      <div className={styles.iso404Content}>
        <h1>404</h1>
        <h3>{t('Looks like you got lost')}</h3>
        <p>{t('The page your looking for doesnt exist or has been moved.')}</p>
        <Button type="primary" onClick={goToHomePage} shape="round" style={{ marginTop: 15 }}>
          {t('Back home')}
        </Button>
      </div>
      <div className={styles.iso404Artwork}>
        <img alt="404" src={Image} />
      </div>
    </div>
  );
});

export default Error404;
