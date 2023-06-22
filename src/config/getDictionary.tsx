'use client';
 
import {useTranslations} from 'next-intl';
 
export const getDictionary = () => {
  return useTranslations('Index');
}