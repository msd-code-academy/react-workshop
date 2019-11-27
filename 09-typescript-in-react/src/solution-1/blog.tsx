import React from 'react';

export type BlogPost = {
  title: string;
  text: string;
  id: number;
};

// Article component
type ArticleProps = Omit<BlogPost, 'id'>;

const Article: React.FC<ArticleProps> = ({title = '', text = ''}) => (
  <>
    <h2>{title}</h2>
    <div>{text}</div>
  </>
);

// Blog component that displays multiple articles
type BlogProps = {};

const Blog: React.FC<BlogProps> = () => {
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
  ];

  return (
    <>
      <h1>My Blog</h1>
      {myArticles.map((article) => (
        <Article key={article.id} title={article.title} text={article.text} />
      ))}
    </>
  );
};

export default Blog;
