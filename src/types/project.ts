export type TagType = { id: string; name: string; display: boolean };
export type TagsType = {
  id: string;
  name: string;
  tags: TagType[];
};
export type TagsByCategoryType = {
  [key: string]: TagsType;
};

export type FeatureType = {
  heading: string;
  items: string[];
};

export type ImageType = {
  original: string;
  originalAlt: string;
  thumbnail: string;
};

export type ProjectType = {
  id: string;
  name: string;
  date: string;
  description: string | null;
  features: FeatureType[];
  url: string | null;
  images: ImageType[];
  logo: string;
  employer: {
    id: string;
    name: string;
    logo: string;
  };
  client: {
    id: string;
    name: string;
    logo: string | null;
  };
  tags: string[];
  categories: string[];
  tagsByCategory: TagsByCategoryType;
  displayName: string;
};

export type LocalProjectType = {
  __typename?: string;
  id: string;
  name: string;
  date?: string | null;
  description?: string | null;
  url?: string | null;
  display?: boolean | null;
  logo?: string | null;
  internal?: string | null;
  createdAt?: string;
  updatedAt?: string;
  features?: FeatureType[];
  images?: Array<string | null> | null;
  displayName?: string;
  tagsByCategory?: TagsByCategoryType;
  tags: string[];
  categories?: string[];
  employer?: {
    id?: string;
    name?: string;
    logo?: string;
  };
  client?: {
    id?: string;
    name?: string;
    logo?: string | null;
  };
};
