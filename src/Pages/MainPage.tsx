import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import NewsCard from '../Components/NewsCard/NewsCard';
import { fetchApi } from '../Utils/Api';

interface News {
  id: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
  imagens: string;
}

const MainPage: React.FC = () => {
  const [data, setData] = useState<News[]>([]);
  const [, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const newsData = await fetchApi();
        setData(newsData.items);
      } catch (error) {
        setError(new Error("Ocorreu um erro ao buscar os dados"));
      }
    };

    getData();
  }, []);

  const renderFeaturedNews = (news: News) => (
    <div className="featured-news" key={news.id}>
      <img src={JSON.parse(news.imagens).image_intro} alt={news.titulo} />
      <h3>{news.titulo}</h3>
      <p>{news.introducao}</p>
      <p>{news.data_publicacao}</p>
      <a href={news.link}>
        <button>Leia a notícia aqui!</button>
      </a>
    </div>
  );

  return (
    <main>
      <Header />
      <div className="news-container">
        {data.length > 0 ? (
          <>
            {renderFeaturedNews(data[0])}
            {data.slice(1).map((news) => (
              <NewsCard
                key={news.id}
                title={news.titulo}
                intro={news.introducao}
                date={news.data_publicacao}
                linkTo={news.link}
              />
            ))}
          </>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </main>
  );
};

export default MainPage;
