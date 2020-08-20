import React, { memo } from 'react';
import { Avatar, Col, Menu, Row, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
//internal
import HeaderDropdown from '../HeaderDropdown';
import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { useLogoutMutation } from 'src/graphql/mutations/logout.generated';
import { useApolloError } from 'src/hooks/useApolloError';

import styles from './index.module.less';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface Props {}
const AvatarDropdown: React.SFC<Props> = memo((props) => {
  const { t } = useTranslation();
  const users = useCurrentUser();
  const [logout] = useLogoutMutation({
    onCompleted: () => {
      window.location.reload();
    },
    onError: useApolloError().apolloErrors,
  });

  const handleLogout = async () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to sign out of system?',
      onOk() {
        logout();
      },
    });
  };
  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]}>
      <Menu.Item key="users">
        <Row className={styles.blogProfile} gutter={18}>
          <Col span={8}>
            <Avatar
              size={80}
              className={styles.avatar}
              src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
              alt={users?.fullName || 'Admin'}
            />
          </Col>
          <Col span={16}>
            <p className={styles.name}>{users?.fullName || 'Admin'}</p>
            <p className={styles.tag}>
              <span className={styles.detail}>{users?.role || 'Admin'}</span>
            </p>
            <p className={styles.info}>{users?.email || 'admin@gmail.com'}</p>
          </Col>
        </Row>
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>
        {t('Log out')}
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
          alt={users?.fullName || 'Supper Admin'}
        />
      </span>
    </HeaderDropdown>
  );
});
export default AvatarDropdown;
