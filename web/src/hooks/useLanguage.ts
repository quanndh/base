import React from 'react';
import { useRouter } from 'next/router';
import { LanguageEnum } from 'src/graphql/type.interface';
export function useLanguage(): LanguageEnum {
  const { query } = useRouter();
  const lang = React.useMemo(() => (query?.lang === 'en' ? LanguageEnum.EN : LanguageEnum.VI), [query?.lang]);
  return lang;
}
