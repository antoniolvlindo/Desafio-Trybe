export const fetchApi = async () => {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
    if (!response.ok) {
      throw new Error('Erro ao buscar notícias');
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
