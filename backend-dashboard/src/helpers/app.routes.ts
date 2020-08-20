export const AppRoutes = {
  home: '/home',
  about: '/about',
  login: '/login',
  register: '/auth/register',
  forgot: '/auth/forgot',
  page404: '/404',
  page500: '/500',

  //Category
  category: '/category',
  categoryCreate: '/category/create',
  categoryEdit: '/category/edit/:id',
  categoryEditId: (id: number | string) => `/category/edit/${id}`,

  //HTML
  html: '/html',
};
