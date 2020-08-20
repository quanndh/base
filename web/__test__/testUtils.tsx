import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

const WrapProvider: React.FC<unknown> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: React.ReactElement, options: Omit<RenderOptions, 'queries'> = {}) =>
  render(ui, { wrapper: WrapProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
