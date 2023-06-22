export const resolveImageSrc = async (imageSrc: string | { src: string }) => {

  if (typeof (imageSrc) === 'object' && imageSrc.src) {
    return imageSrc.src
  }

  if (typeof (imageSrc) === 'string') {
    if (imageSrc?.startsWith('@images/')) {
      return require('@images/' + imageSrc.substring('@images/'.length)).default.src
    }

    if (imageSrc?.startsWith('@icons/')) {
      return require('@icons/' + imageSrc.substring('@icons/'.length)).default.src
    }

    return await isValidExternalImageSrc(imageSrc) ? imageSrc : '';
  }

}

export const isValidExternalImageSrc = async (imageSrc: string): Promise<boolean> => {
  try {
    const response = await fetch(imageSrc, { method: 'HEAD' });

    if (!response) {
      return false;
    }

    const contentType = response.headers.get('Content-Type');
    return response.ok && contentType?.startsWith('image/') ? true : false;
  } catch (error) {
    return false;
  }
};

export const formatPhone = (phoneNumber: string): string => {
 
  const cleaned = phoneNumber.replace(/\D/g, '');

  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return `(${match[2]}) ${match[3]}-${match[4]}`;
  }

  return phoneNumber;
}

