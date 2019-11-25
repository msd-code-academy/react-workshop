import React from 'react';
import {BlogPost} from './types';

import Article from './article';

const myArticles: BlogPost[] = [
  {
    id: 1,
    title: 'TypeScript is awesome',
    text: 'Every day I do not use TypeScript a kitten dies.'
  },
  {
    id: 2,
    title: 'Jar Jar Binks was a sith lord',
    text: 'It all make sense when you think about it!'
  }
]

const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      {myArticles.map((article) =>
        <Article key={article.id} title={article.title} text={article.text} />
      )}
    </>
  )
};

export default Blog;
