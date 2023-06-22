import { resolveImageSrc } from "@src/services";
import Image from "next/image";

export interface ISectionData {
  title?: string;
  text?: string;
  options?: IOptions[];
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
  imageWidth?: number,
  imageHeight?: number,
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  titleAlign?: 'left' | 'center' | 'right' | 'justify';
  alt?: string
}

interface IOptions {
  title?: string;
  text: string;
}

const Section: React.FC<ISectionData> = async ({
  title,
  text,
  imageSrc,
  imagePosition = 'left',
  imageWidth = 500,
  imageHeight = 500,
  textAlign = 'justify',
  titleAlign = 'justify',
  alt = '',
  options
}) => {

  const resolvedImageSrc = await resolveImageSrc(imageSrc ?? '');

  const renderText = () => {
    if (imageSrc) {
      return <p className={`text-${textAlign}`}>{text}</p>;
    } else {
      return (
        <>
          <div className={`flex justify-${titleAlign}`}>
            <h2>{title}</h2>
          </div>
          <div className={`flex justify-${textAlign}`}>
            <p>{text}</p>
          </div>
          {options?.map((option) => {
            return (
              <>
                <div className={`flex justify-${titleAlign}`}>
                  <h2>{option.title}</h2>
                </div>
                <div className={`flex justify-${textAlign}`}>
                  <p>{option.text}</p>
                </div>
              </>
            )
          })}
        </>
      );
    }
  };

  return (
    <div className="flex items-center my-10">
      {imagePosition === 'left' && imageSrc && (
        <div className="mr-4">
          <Image
            src={resolvedImageSrc}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
      <div>
        {title && <h2>{title}</h2>}
        {renderText()}
      </div>
      {imagePosition === 'right' && imageSrc && (
        <div className="ml-4">
          <Image
            src={resolvedImageSrc}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
    </div>
  );
};

export default Section;
