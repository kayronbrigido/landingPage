import { ISocialMedia } from "@src/models"

interface Props {
  item: ISocialMedia[]
}

const SocialMedias: React.FC<Props> = ({ item }) => {

  return (
    item.map(async (socialMedia) => {
      return (
        <a href={socialMedia.url} className="flex row my-4 items-center">
          <div className="mr-4">
            <socialMedia.icon
              width={250}
              height={250}
              alt={socialMedia.name}
              fill="blue"
            />
          </div>
          <p>{socialMedia.name}</p>
        </a>
      )
    })
  )
}


export default SocialMedias