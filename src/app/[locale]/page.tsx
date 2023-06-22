'use client'

import Image from "next/image";
import Header, { IHeaderItem } from '@src/components/molecules/Header/Header'
import Section, { ISectionData } from '@src/components/molecules/Section/Section';
import HeaderImage from '@images/1280x300.png'
import Map from "@src/components/molecules/Map/Map";
import { Locale } from "@root/i18n-config";
import { useTranslations } from "next-intl";

import IconInstagram from '@icons/ic_instagram.svg';
import IconFacebook from '@icons/ic_facebook_square.svg';
import IconWhatsapp from '@icons/ic_whatsapp_monocolor.svg';

import { ISocialMedia } from "@src/models";
import { formatPhone } from "@src/services";
import { whatsappNumber } from "@src/config/variables";
import { Footer } from "@src/components/molecules/Footer/Footer";

const headerData: IHeaderItem[] = [
  { title: 'Início', route: '/' },
  { title: 'Sobre Nós', route: '#about' },
  { title: 'Faça seu pedido', route: '#order' },
]

const section1: ISectionData = {
  imageSrc: '@images/500x500.png',
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum eligendi quis deleniti quae consequatur beatae vitae, modi minima facilis optio sequi? Iste enim perspiciatis quasi maiores soluta nemo ad?"
}

const section2: ISectionData = {
  imageSrc: '@images/500x500.png',
  imagePosition: 'right',
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum eligendi quis deleniti quae consequatur beatae vitae, modi minima facilis optio sequi? Iste enim perspiciatis quasi maiores soluta nemo ad?"
}

const socialMedias: ISocialMedia[] = [
  {
    imgSrc: IconInstagram,
    url: 'https://www.instagram.com/',
    name: 'Instagram'
  },
  {
    imgSrc: IconFacebook,
    url: 'https://www.facebook.com/',
    name: 'Facebook'
  },
  {
    imgSrc: IconWhatsapp,
    url: `https://wa.me/${whatsappNumber}`,
    name: formatPhone(whatsappNumber)
  },
] 

 

const Home = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {

  const t = useTranslations('');

  return (
    <main>
      <Header data={headerData} />
      <h2>{t("GENERAL.HOME")}</h2>
      <Image 
        src={HeaderImage}
        className="w-full"
        alt={""} 
        />
      <div className='container mx-auto mt-10'>
        <Section {...section1} />
        <Section {...section2} />
        <Map />
        <Footer socialMedias={socialMedias} />
      </div>
    </main>
  )
}

export default Home;
