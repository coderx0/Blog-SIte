export const BlogsByCategory = `*[_type == "post" && categories->title == $categoryTitle] | order(_createdAt desc)[0...10]{
    title,
    slug,
    author->{
      name
    },
    thumbnail,
    tags,
    description,
    categories->{
      title
    },
    _createdAt
  }`;
