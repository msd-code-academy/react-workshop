import React from 'react';
import PropTypes from 'prop-types';

// Exercise:
// * Change extension of this file to .jsx and restart the development server
// * Define suitable "BlogPost" type that will hold information about id, title and text
// * Use the BlogPost type for myArticles variable
// * Use proper types for Article component props (hint: you can use Omit<BlogPost, 'id'> type)
// * Use proper types for Blog component props
// * Get rid of PropTypes package, but keep the functionality (default props for Article)
//
// WARNING: there is a bug that will emerge with using a proper typing, find it and fix it.

// Article component
const Article = (props) => (
  <>
    <h2>{props.header}</h2>
    <div>{props.body}</div>
  </>
);

Article.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string
};

Article.defaultProps = {
  header: '',
  body: ''
};

// Blog component that displays multiple articles
const Blog = () => {
  const myArticles = [
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
