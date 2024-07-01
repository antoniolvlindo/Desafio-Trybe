import React from 'react';

interface NewsCardProps {
  title: string;
  intro: string;
  date: string;
  linkTo: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, intro, date, linkTo }) => {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{intro}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
      <hr />
      <button onClick={() => window.open(linkTo, '_blank')}>Leia mais</button>
    </div>
  );
};

export default NewsCard;
