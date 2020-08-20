import React, { FC, memo, useState, useEffect } from 'react';
import { Prompt, NavLink } from 'react-router-dom';
import { PageHeader, Form, Input, Spin, TreeSelect, Button } from 'antd';
import { notification } from 'antd';
import { AppRoutes } from 'src/helpers/app.routes';
import { useTranslation } from 'react-i18next';
import { useCreateCategoryMutation } from 'src/graphql/mutations/createCategory.generated';
import { useEditCategoryMutation } from 'src/graphql/mutations/editCategory.generated';
import { useGetAllCategoryQuery } from 'src/graphql/queries/getAllCategory.generated';
import { useGetDetailsCategoryLazyQuery } from 'src/graphql/queries/getDetailsCategory.generated';
import { useHistory, useParams } from 'react-router-dom';
import { Category, LanguageEnum } from 'src/graphql/type.interface';
import ErrorPage from 'src/components/Errors/500/500';
import { coverFormatData, getTitleLang } from 'src/helpers/common';
import { useApolloError } from 'src/hooks/useApolloError';

interface Props {
  typeCategory?: string;
}
const CategoryCreate: FC<Props> = memo((props) => {
  const { typeCategory } = props;
  const [state, setState] = useState({ isChangeValue: false });
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const history = useHistory();
  const categoryId = useParams<{ id?: string }>()?.id;

  const { data: dataParentCate } = useGetAllCategoryQuery();
  const dataParentCategories = (dataParentCate?.getAllCategory || []) as Category[];

  const [
    fetchCategoryDetail,
    { data: dataCategoryDetails, loading: loadingDetail, error },
  ] = useGetDetailsCategoryLazyQuery();
  useEffect(() => {
    if (categoryId && typeCategory) fetchCategoryDetail({ variables: { id: categoryId } });
  }, [categoryId, typeCategory, fetchCategoryDetail]);

  const [handleCreateCategory, { loading }] = useCreateCategoryMutation({
    onCompleted: () => {
      notification.success({
        message: 'Notice',
        description: 'Category has created new successful!',
      });
      setState({ ...state, isChangeValue: false });
      handleCancel();
    },
    onError: useApolloError().apolloErrors,
  });

  const [handleEditCategory, { loading: loadingEdit }] = useEditCategoryMutation({
    onCompleted: () => {
      notification.success({
        message: 'Notice',
        description: 'Category has edited successful!',
      });
      setState({ ...state, isChangeValue: false });
      handleCancel();
    },
    onError: useApolloError().apolloErrors,
  });

  const categoryDetail = dataCategoryDetails?.getDetailsCategory as Category;

  const routes = [
    {
      path: AppRoutes.category,
      breadcrumbName: t('Category'),
    },
    {
      path: 'category-add',
      breadcrumbName: typeCategory
        ? t(`Edit ${dataCategoryDetails?.getDetailsCategory?.translations?.[0]?.name}`)
        : t('Add new'),
    },
  ];
  const itemRender = (route: any, params: any, routes: any, paths: any) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <NavLink to={`/${paths.join('/')}`}>{route.breadcrumbName}</NavLink>
    );
  };
  const handleChangeField = () => {
    setState({ ...state, isChangeValue: true });
  };
  const handleFinish = (values: any) => {
    const params = {
      description: values?.description,
      parentId: values?.parent,
      translations: [
        {
          name: values?.categoryVI,
          lang: LanguageEnum.VI,
        },
        {
          name: values?.categoryEN,
          lang: LanguageEnum.EN,
        },
      ],
    };

    if (!typeCategory) {
      handleCreateCategory({ variables: { input: params } });
    } else {
      const newParams = Object.assign({ ...params }, { id: categoryDetail?.id });
      handleEditCategory({ variables: { input: newParams } });
    }
  };
  const handleCancel = () => {
    history && history.length > 2 ? history.goBack() : history.push(AppRoutes.category);
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  if (categoryId && !categoryDetail) return null;
  const treeData = coverFormatData(dataParentCategories, categoryId) || [];
  if (error) return <ErrorPage />;
  return (
    <div>
      <Spin spinning={loading || loadingEdit || loadingDetail}>
        <Prompt when={state?.isChangeValue} message="Are you sure you want to leave?" />
        <PageHeader className="site-page-header" breadcrumb={{ routes, separator: '>', itemRender }} title={''} />
        <div>
          <Form
            {...formItemLayout}
            form={form}
            initialValues={{
              categoryVI: getTitleLang(categoryDetail?.translations, LanguageEnum.VI),
              categoryEN: getTitleLang(categoryDetail?.translations, LanguageEnum.EN),
              parent: categoryDetail?.parent?.id,
              description: categoryDetail?.description,
            }}
            onFieldsChange={handleChangeField}
            onFinish={handleFinish}
            scrollToFirstError
          >
            <Form.Item
              name="categoryVI"
              label="Category name (VI)"
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <Input maxLength={100} />
            </Form.Item>
            <Form.Item
              name="categoryEN"
              label="Category name (EN)"
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <Input maxLength={100} />
            </Form.Item>
            <Form.Item name="parent" label="Parent">
              <TreeSelect
                style={{ width: '100%' }}
                showSearch
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                treeNodeFilterProp="title"
                placeholder="Please select"
                allowClear
              />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea autoSize={true} maxLength={1000} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                {typeCategory ? 'Update' : 'Add new'}
              </Button>
              <Button htmlType="reset" onClick={() => handleCancel()}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Spin>
    </div>
  );
});

export default CategoryCreate;
