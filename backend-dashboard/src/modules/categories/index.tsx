import React, { FC, memo } from 'react';
import { PageHeader, Table, Tooltip, Button, Input, Form, Popconfirm } from 'antd';
import { notification } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from './components/index.module.less';
import QueryString from 'src/helpers/query-string';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { AppRoutes } from 'src/helpers/app.routes';
import { useGetPagingCategoryQuery } from 'src/graphql/queries/getPagingCategory.generated';
import { useDeleteCategoryMutation } from 'src/graphql/mutations/deleteCategory.generated';
import { removeChildren, countIndex, getTitleLang } from 'src/helpers/common';
import ErrorPage from 'src/components/Errors/500/500';
import { useQueryParams } from 'src/hooks/useQueryParams';
import { ColumnProps } from 'antd/lib/table';
import { Category, LanguageEnum } from 'src/graphql/type.interface';
import { perPage } from 'src/helpers/constant';
import { useApolloError } from 'src/hooks/useApolloError';

interface UrlParams {
  keyword?: string;
  take?: string;
  skip?: string;
}
const CategoryPage: FC = memo(() => {
  const query = useQueryParams();
  const skip = Number(query.get('skip') ?? 1);
  const keyword = query.get('keyword');
  const history = useHistory();
  const { t } = useTranslation();
  //Fetch data categories
  const { data: fetDataCategories, loading, refetch, error } = useGetPagingCategoryQuery({
    variables: {
      limit: perPage,
      page: skip,
      search: keyword,
    },
    fetchPolicy: 'network-only',
  });

  //Delete category
  const [handleDeleteCategory] = useDeleteCategoryMutation({
    onCompleted: () => {
      notification.success({
        message: 'Notice',
        description: 'Category deleted successful!',
      });
      refetch();
    },
    onError: useApolloError().apolloErrors,
  });
  const dataCategories = removeChildren(fetDataCategories?.getPagingCategory?.items as Category[]);
  const dataCategoriesMeta = fetDataCategories?.getPagingCategory?.meta;
  const handleSearch = (values: string) => {
    history.replace({
      pathname: history.location.pathname,
      search: QueryString.stringify<UrlParams>({
        keyword: values,
      }),
    });
  };

  const onChangePagination = async (page: number) => {
    history.push({
      pathname: history.location.pathname,
      search: QueryString.replace<UrlParams>({
        skip: page?.toString(),
      }),
    });
  };
  const columns: ColumnProps<Category>[] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text: any, record: any, index: number) => <span>{countIndex(index + 1, skip, 20)}</span>,
    },
    {
      title: 'Category name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: {
        showTitle: false,
      },
      render: (text: any, record: any) => getTitleLang(record?.translations, LanguageEnum.VI),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: {
        showTitle: false,
      },
      render: (text: any, record: any) => (
        <Tooltip title={<div dangerouslySetInnerHTML={{ __html: record?.description }} />}>
          {record?.description}
        </Tooltip>
      ),
    },
    {
      title: 'Count',
      dataIndex: 'countPage',
      key: 'countPage',
      width: '12%',
      render: (text: any, record: any) => <span>{record?.countPage || 0}</span>,
    },
    {
      title: 'Last updated at',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text: any, record: any) => (
        <span>{record?.updatedAt ? moment(record?.updatedAt).format('YYYY/MM/DD') : ''}</span>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 110,
      render: (text: any, record: any) => (
        <>
          <Tooltip title={t('Edit')}>
            <Button icon={<EditOutlined />} style={{ marginRight: 5 }} href={AppRoutes.categoryEditId(record?.id)} />
          </Tooltip>
          <Tooltip title={t('Delete')}>
            <Popconfirm
              title={t('Are you sure to delete this item and its children?')}
              onConfirm={() => handleDeleteCategory({ variables: { id: record?.id } })}
              okText="Yes"
              cancelText="No"
            >
              <Button danger type="primary" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </>
      ),
    },
  ];

  if (error) return <ErrorPage />;
  return (
    <>
      <PageHeader
        title="Categories"
        extra={
          <Button icon={<PlusOutlined />} type="primary" href={AppRoutes.categoryCreate}>
            Add New
          </Button>
        }
      ></PageHeader>
      <div className={styles.categoryContainer}>
        <div className={styles.headFilter}>
          <Form name="category-search" style={{ width: 300 }} initialValues={{ keyword: keyword }}>
            <Form.Item name="keyword">
              <Input.Search placeholder="Search category" maxLength={100} onSearch={handleSearch} allowClear />
            </Form.Item>
          </Form>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataCategories as any}
          rowKey={(record) => record.id}
          pagination={{
            current: skip,
            pageSize: perPage,
            total: dataCategoriesMeta?.totalItems,
            onChange: onChangePagination,
            position: ['bottomRight'],
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
});

export default CategoryPage;
