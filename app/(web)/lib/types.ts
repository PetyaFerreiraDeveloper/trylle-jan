export type FrontPageDataType = {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: {
    rendered: string;
    protected: false;
  };
  excerpt: {
    rendered: string;
    protected: false;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: [];
  _links: {
    self: [];
    collection: [];
    about: [];
    author: [];
    replies: [];
    "version-history": [];
    "predecessor-version": [];
    "wp:attachment": [{ href: string }];
    curies: [];
  };
};

export type GalleryPageType = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: [];
  description: {
    rendered: string;
  };
  caption: { rendered: string };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: [Object];
    image_meta: [Object];
  };
  post: number;
  source_url: string;
  _links: {
    self: [Object];
    collection: [Object];
    about: [Object];
    author: [Object];
    replies: [Object];
  };
};

export type ReferencesPageType = {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: { footnotes: string };
  categories: [number];
  tags: [];
  _links: {
    self: [];
    collection: [];
    about: [];
    author: [];
    replies: [];
    "version-history": [];
    "predecessor-version": [];
    "wp:attachment": [];
    "wp:term": [];
    curies: [];
  };
};

export type ReferenceCardType = {
  title: string;
  content: string;
  author?: string;
  position?: string;
  date?: string | Date;
  referenceDate?: string | Date;
};
