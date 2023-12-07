export enum categories {
  Games,
  AI,
  Entertainment,
}

export type linkDataType = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  category: categories;
};

export type server = {
  label: string;
  description?: string;
  address: string;
  icon?: React.ReactNode;
  isUrl?: boolean;
};
