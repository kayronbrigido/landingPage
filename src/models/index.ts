export interface ISocialMedia {
  name: string,
  icon: any,
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