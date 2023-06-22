import './globals.css'
import { Merriweather_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Merriweather_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const generateStaticParams = () => {
  return [{locale: 'enUs'}, {locale: 'ptBr'}];
}

const RootLayout = async({children, params: {locale}}: {
  children: React.ReactNode,
  params: {
    locale: string
  }
}) => {

  let messages;
  try {
    messages = (await import(`@src/config/languages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout;
