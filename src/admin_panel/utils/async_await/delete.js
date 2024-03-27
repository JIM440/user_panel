const deleteData = async (url) => {
  try {
    const response = await fetch(
      'https://appleproductsbackend.vercel.app/' + url,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete data');
    }

    const responseData = await response.json();
    console.log('delete:', responseData);
    return responseData;
  } catch (error) {
    console.error(error);
  }
};

export default deleteData;
