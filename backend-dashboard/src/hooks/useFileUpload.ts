import { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';
import { request } from 'src/helpers/request';
import { merge } from 'lodash';
export const useFileUpload = (config?: AxiosRequestConfig) => {
  const upload = useCallback(
    (file: File, customConfig?: AxiosRequestConfig) => {
      const formData = new FormData();
      formData.append('file', file);
      return request
        .post(process.env.REACT_APP_UPLOAD_URL ?? '', formData, {
          ...merge(config, customConfig, {
            headers: {
              ...merge(config?.headers, customConfig?.headers),
              'Content-Type': 'multipart/form-data',
            },
          }),
        })
        .finally(() => {
          //
        });
    },
    [config],
  );
  return [upload];
};
