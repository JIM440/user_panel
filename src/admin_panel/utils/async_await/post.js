const postData = async (url, data) => {
  try {
    const response = await fetch(
      'https://appleproductsbackend.vercel.app/' + url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to post data');
    }

    const responseData = await response.json();
    console.log('post:', responseData);
  } catch (error) {
    console.error(error);
  }
};

export default postData;
