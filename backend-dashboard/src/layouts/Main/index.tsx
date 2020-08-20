import BasicLayout, { BasicLayoutProps as ProLayoutProps, MenuDataItem, Settings } from '@ant-design/pro-layout';
import React, { memo, ReactNode, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import RightContent from './GlobalHeader/RightContent';
import { useRouteTranslation } from 'src/components/router/config.routes';
import { MenuOutlined } from '@ant-design/icons';
import { useLocalStorage } from 'react-use';
import styles from './index.module.less';
import { useMounted } from 'src/hooks/useMounted';
import { getAntLayoutElement } from 'src/helpers/common';
import Page403 from 'src/components/Errors/403';
import Authorized from 'src/helpers/utils/Authorized';
import { SiderMenuProps } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu';

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  settings: Settings;
  children?: ReactNode;
}

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : [],
    };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });

const Main: React.FC<BasicLayoutProps> = memo((props) => {
  const { children, settings } = props;
  const [collapsed, setCollapsed] = useLocalStorage('collapsed', window.localStorage.getItem('collapsed'));
  const { pathname } = useLocation();
  const mounted = useMounted();
  const route = useRouteTranslation();

  useEffect(() => {
    if (mounted) {
      const antLayoutElement = getAntLayoutElement();
      antLayoutElement?.scrollTo(0, 0);
    }
  }, [pathname, mounted]);

  function renderMenuHeader(logoDom: ReactNode, titleDom: ReactNode, props?: SiderMenuProps) {
    return (
      <span>
        {logoDom}
        {titleDom}
      </span>
    );
  }
  return (
    <BasicLayout
      disableMobile
      route={route}
      className={styles.customLayout}
      logo={<MenuOutlined style={{ fontSize: 25, color: 'white' }} />}
      menuHeaderRender={renderMenuHeader}
      menuItemRender={(item, defaultDom) => {
        return item.isUrl ? defaultDom : <NavLink to={item?.path ?? ''}>{defaultDom}</NavLink>;
      }}
      menuDataRender={menuDataRender}
      rightContentRender={(rightProps) => <RightContent rightProps={rightProps} {...settings} />}
      {...props}
      {...settings}
      collapsed={collapsed === 'true'}
      onCollapse={(val) => {
        setCollapsed(String(val));
      }}
      contentStyle={{ height: '100%' }}
      title={'Starter Kit'}
      fixSiderbar={true}
      fixedHeader={true}
    >
      <Authorized authority="" noMatch={Page403}>
        <div style={{ padding: 15, height: '100%' }}>{children}</div>
      </Authorized>
    </BasicLayout>
  );
});

export default Main;
