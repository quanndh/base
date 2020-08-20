import React, { FC, memo } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from 'src/helpers/app.routes';
import { useLoginMutation } from 'src/graphql/mutations/login.generated';
import { MeDocument } from 'src/graphql/queries/me.generated';
import { useApolloError } from 'src/hooks/useApolloError';

const CollectionForm: FC = memo((props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const history = useHistory();
  const { apolloErrors } = useApolloError();

  const [loginAction, { loading }] = useLoginMutation({
    onCompleted: () => {
      history.push(AppRoutes.home);
    },
    onError: apolloErrors,
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data }) => {
      if (data?.login?.user) {
        proxy.writeQuery({
          query: MeDocument,
          data: {
            me: data.login.user,
          },
        });
        history.push(AppRoutes.home);
      }
    },
  });

  const onFinish = (values: any) => {
    loginAction({
      variables: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError={true}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: t('Please input required field!'),
            },
          ]}
        >
          <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} maxLength={320} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: t('Please input required field!') }]}
        >
          <Input.Password prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} maxLength={32} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {t('Login')}
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
});

export default CollectionForm;
