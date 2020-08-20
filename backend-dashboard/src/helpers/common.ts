import { filter } from 'lodash';
import { LanguageEnum, Category } from 'src/graphql/type.interface';
export function getAntLayoutElement() {
  return document.querySelector('section.ant-layout:not(.ant-layout-has-sider)');
}

export const removeTypenameMenu = (val: any) => {
  return (
    val?.map((v: any) => {
      return {
        children: removeTypename(v?.children),
        icon: v?.icon,
        id: v?.id,
        pageId: v?.pageId,
        slug: v?.slug,
        text: v?.text,
        url: v?.url,
        megaMenu: v?.megaMenu,
      };
    }) ?? []
  );
};
export const removeTypename = (val: any) => {
  return (
    val?.map((v: any) => {
      return {
        children: removeTypename(v?.children),
        icon: v?.icon,
        id: v?.id,
        pageId: v?.pageId,
        slug: v?.slug,
        text: v?.text,
        url: v?.url,
      };
    }) ?? []
  );
};

export const removeChildren = (val: Category[]) => {
  const data =
    val?.map((v: Category) => {
      const child = {
        id: v?.id,
        parentId: v?.parentId,
        countPage: v?.countPage,
        translations: v?.translations,
        description: v?.description,
        createdAt: v?.createdAt,
        updatedAt: v?.updatedAt,
        pages: v?.pages,
        parent: v?.parent,
      };
      if (v?.children?.length) Object.assign(child, { children: removeChildren(v?.children) });
      return child;
    }) ?? [];
  return data;
};

export const countIndex = (index: number, page: number, take: number) => {
  const order = page > 1 ? (page - 1) * take + index : index;
  return order;
};

export const getTitleLang = (val: any, lang?: LanguageEnum) => {
  return filter(val, (ck) => ck.lang === lang)?.[0]?.name || '';
};

export const coverFormatData = (val: Category[], categoryId?: string, lang: LanguageEnum = LanguageEnum.VI) => {
  const currentData =
    val?.map((v: Category) => {
      const dataNew = {
        countPage: v?.countPage,
        createdAt: v?.createdAt,
        description: v?.description,
        id: v?.id,
        parent: v?.parent,
        translations: v?.translations,
        updatedAt: v?.updatedAt,
      };
      Object.assign(dataNew, {
        value: v?.id,
        title: getTitleLang(v?.translations, lang),
      });
      if (v?.id === categoryId) Object.assign(dataNew, { disabled: true });
      if (v?.children?.length) Object.assign(dataNew, { children: coverFormatData(v?.children) });
      return dataNew;
    }) ?? [];
  return currentData;
};
export const getFullAddress = (item: any) => {
  const arrData: string[] = [];

  if (item?.street && item?.street !== '') {
    arrData.push(item?.street);
  }
  if (item?.ward?.name && item?.ward?.name !== '') {
    arrData.push(item?.ward?.name);
  }
  if (item?.district?.name && item?.district?.name !== '') {
    arrData.push(item?.district?.name);
  }
  if (item?.province?.name && item?.province?.name !== '') {
    arrData.push(item?.province?.name);
  }

  return arrData.join(', ');
};

export const getContentByLang = (val: any, lang?: LanguageEnum, properties: string = '') => {
  return filter(val, (ck) => ck.lang === lang)?.[0]?.[properties] || '';
};
