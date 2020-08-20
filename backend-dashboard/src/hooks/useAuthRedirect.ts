import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthenticated } from './useAuthenticated';
import { AppRoutes } from 'src/helpers/app.routes';

export function useAuthRedirect(to = AppRoutes.home): void {
  const { push } = useHistory();
  const isAuthenticated = useAuthenticated();
  useEffect(() => {
    if (isAuthenticated) {
      push(to);
    }
  }, [isAuthenticated, push, to]);
}
