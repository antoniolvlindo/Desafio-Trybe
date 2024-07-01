import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import NewsCard from '../Components/NewsCard/NewsCard';
import { fetchApi } from '../Utils/Api';

interface News {
  id: number;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
}

const MainPage: React.FC = () => {
  const [data, setData] = useState<News[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const newsData = await fetchApi();
        console.log('Dados da API:', newsData); // Log para depuração
        setData(newsData);
      } catch (error) {
        setError(new Error("Ocorreu um erro ao buscar os dados"));
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <main>
      <Header />
      <div className="news-container">
        {data.length > 0 ? (
          data.map((news) => (
            <NewsCard
              key={news.id}
              title={news.titulo}
              intro={news.introducao}
              date={news.data_publicacao}
              linkTo={news.link}
            />
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </main>
  );
};

export default MainPage;
