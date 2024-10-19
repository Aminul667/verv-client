interface IAddress {
  street: string;
  city: string;
  state: string;
}

interface ISize {
  width: number;
  length: number;
  unit: string;
}

interface IFeatures {
  beds: number;
  bathrooms: number;
  size: ISize;
}

interface IProperty {
  id: number;
  title: string;
  address: IAddress;
  pricePerMonth: number;
  currency: string;
  status: string;
  features: IFeatures;
  image: string;
}

export default IProperty;
