export type Blog = {
  thumbnail: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string;
  _createdAt: string;
  categories: { title: string };
  title: string;
  slug: {
    current: string;
    _type: string;
  };
};
