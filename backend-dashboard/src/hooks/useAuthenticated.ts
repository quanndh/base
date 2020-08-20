import { useCurrentUser } from './useCurrentUser';

export function useAuthenticated(): boolean {
  const currentUser = useCurrentUser();
  return !!currentUser;
}
