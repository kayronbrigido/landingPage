export const i18n = {
  defaultLocale: 'pt-Br',
  locales: ['pt-Br', 'en-Us'],
} as const

export type Locale = (typeof i18n)['locales'][number]