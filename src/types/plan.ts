export interface Plan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  billing: string;
  description: string;
  image: string;
  gradient: [string, string];
  features: string[];
  buttonText: string;
  popular?: boolean;
}
