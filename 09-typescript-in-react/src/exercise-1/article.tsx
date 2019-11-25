import React from 'react';
import {BlogPost} from './types';

type ArticleProps = Omit<BlogPost, 'id'>;

const Article: React.FC<ArticleProps> = (props) => (
  <>
    <h2>{props.title}</h2>
    <div>{props.text}</div>
  </>
);

export default Article;
