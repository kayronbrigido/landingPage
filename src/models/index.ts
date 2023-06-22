export interface ISocialMedia {
  name: string,
  imgSrc: string,
  url: string
}

export interface IAddress {
  street: string,
  neighborhood: string,
  number: number | string,
  complement: string | null,
  city: string,
  state: string, 
  country: string,
  zipCode: string | number
}