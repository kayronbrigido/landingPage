'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import IconWorld from '@icons/ic_world.svg'
import { i18n } from '@root/i18n-config';
import Image from 'next/image';

const LocaleSwitcher = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleToggle}
      >
        Selecione uma opção
        <Image src={IconWorld.src}/>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-40 py-1 mt-2 bg-white border border-gray-300 rounded-md shadow-md">
          {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
        </ul>
      )}
    </div>
  );

}



export default LocaleSwitcher;