// import { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';

const Description = () => {
  // const { category } = useParams()
  // const [descriptions, setDescriptions] = useState([])

  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //         setDescriptions(data)
  //     })
  // }, [])

  const descriptions = [
    {
      title: 'Overview',
      content:
        "Welcome to our MacBook category, where you can discover the latest and most powerful laptops from Apple. Whether you're a student, creative professional, or business user, MacBook offers exceptional performance, stunning design, and a seamless user experience.",
    },
    {
      title: 'Performance',
      content:
        'MacBooks are equipped with powerful processors, ample RAM, and lightning-fast storage, enabling you to effortlessly handle resource-intensive tasks such as graphic design, video editing, and software development. Experience unparalleled speed and efficiency in your work.',
    },
    {
      title: 'Design',
      content:
        "Apple's meticulous attention to design is reflected in the sleek and elegant aesthetics of the MacBook lineup. With their slim profiles, aluminum unibody construction, and vibrant Retina displays, MacBooks truly stand out in any setting.",
    },
    {
      title: 'Integration',
      content:
        'Seamlessly integrate your MacBook into the Apple ecosystem. Take advantage of features like Handoff, iCloud syncing, and Continuity to effortlessly switch between your MacBook and other Apple devices, ensuring a smooth and uninterrupted workflow.',
    },
  ];

  return (
    <section id="description">
      <div className="container">
        {descriptions.map((description, index) => (
          <div>
            <h2>{description.title}</h2>
            <p>{description.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Description;
