import SocialMedias from "@src/components/atoms/SocialMedias/SocialMedias"
import { Address } from "@src/config/variables"
import { ISocialMedia } from "@src/models"


interface IFooter {
  address?: string,
  socialMedias: ISocialMedia[]
}
export const Footer: React.FC<IFooter> = ({ address , socialMedias}) => {

  return(
    <div>
      <div>
    <SocialMedias item={socialMedias} />
      </div>
      <div>
        <p>{Address.street} , {Address.number}, {Address.neighborhood}</p>
        {Address.complement ? 
        <p>Complemento: {Address.complement}</p>
        :<></>}
        <p>{Address.city} , {Address.state}, {Address.country}</p>
        <p>CEP: {Address.zipCode}</p>
      </div>
    </div>
  )
}