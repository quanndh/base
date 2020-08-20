import React from 'react';
import { AppRoutes } from 'src/helpers/app.routes';
import { Route } from '@ant-design/pro-layout/lib/typings';
import { HomeOutlined, BarsOutlined, BuildOutlined, AppstoreAddOutlined, BankOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export const useRouteTranslation = () => {
  const { t } = useTranslation();
  const route: Route = {
    routes: [
      {
        path: AppRoutes.home,
        name: t('Dashboard'),
        icon: <HomeOutlined />,
        children: [
          {
            path: AppRoutes.home,
            name: t('Header'),
          },
          {
            path: AppRoutes.home,
            name: t('Menu'),
          },
          {
            path: AppRoutes.home,
            name: t('Footer'),
          },
          {
            path: AppRoutes.home,
            name: t('Sitemap'),
          },
        ],
      },
      {
        path: AppRoutes.home,
        name: t('Home management'),
        icon: <BankOutlined />,
      },
      {
        path: AppRoutes.home,
        name: t('Page management'),
        icon: <BarsOutlined />,
      },
      {
        path: AppRoutes.category,
        name: t('Category management'),
        icon: <AppstoreAddOutlined />,
      },
      {
        path: AppRoutes.html,
        name: t('Html'),
        icon: <BuildOutlined />,
      },
    ],
  };
  return route;
};
