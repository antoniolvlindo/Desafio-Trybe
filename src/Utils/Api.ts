export const fetchApi = async () => {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
  if (!response.ok) {
    throw new Error('Erro');
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
