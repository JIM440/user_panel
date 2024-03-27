const fetchData = async (url) => {
  try {
    const response = await fetch(
      'https://appleproductsbackend.vercel.app/' + url
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('get:', data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
