import { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';
import { request } from 'src/helpers/request';
export const useFilesUpload = (config: AxiosRequestConfig) => {
  const upload = useCallback(
    (files: File[]) => {
      const formData = new FormData();
      files.map((file) => {
        formData.append('files[]', file);
        return true;
      });

      return request
        .post(process.env.REACT_APP_UPLOAD_URL ?? '', formData, {
          ...config,
          headers: {
            ...config?.headers,
            'Content-Type': 'multipart/form-data',
          },
        })
        .finally(() => {
          //
        });
    },
    [config],
  );
  return [upload];
};
