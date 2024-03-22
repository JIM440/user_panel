import { useEffect, useState } from 'react';
import LawEnforcement from '../../commons/LawEnforcement';
import Description from './components/Description';
import Header from './components/Header';
import Products from './components/Products';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound';
import RootLayout from '../../layout/RootLayout';

const Category = () => {
  const { name } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const [blurBackground, setBlurBackground] = useState(false);

  useEffect(() => {
    fetch('https://appleproductsbackend.vercel.app/v1/category/')
      .then((res) => res.json())
      .then((data) => {
        const foundCategory = data.find(
          (category) =>
            category.categoryName.toLowerCase() === name.toLowerCase()
        );
        setCategory(foundCategory);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div className="container" style={{ height: '100vh' }}></div>;
  }

  if (!category) {
    return <NotFound />;
  }

  return (
    <>
      <div className="jim">
        <Header category={category} />
        <Description category={category} />
        <Products category={category} />
        <LawEnforcement />
      </div>
      <RootLayout heroHeight={0} setBlurBackground={setBlurBackground} />
    </>
  );
};

export default Category;
