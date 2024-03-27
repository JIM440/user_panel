const updateData = async (url, data) => {
  try {
    const response = await fetch(
      'https://appleproductsbackend.vercel.app/' + url,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update data');
    }

    const responseData = await response.json();
    console.log('put:', responseData);
  } catch (error) {
    console.error(error);
  }
};

export default updateData;
