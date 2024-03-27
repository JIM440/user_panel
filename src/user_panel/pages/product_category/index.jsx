import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// components
import RootLayout from '../../layout/RootLayout';
import Loader from '../../../admin_panel/layout/Loader';
import NotFound from '../notFound';
import Products from './components/Products';
import Header from './components/Header';
import Description from './components/Description';
import LawEnforcement from '../../commons/LawEnforcement';
// functions

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

  // if (loading) {
  //   return (
  //     <section>
  //       <div
  //         className="jim container"
  //         style={{ height: '100vh', marginTop: '100px' }}
  //       ></div>
  //     </section>
  //   );
  // }
  if (loading) {
    return <Loader />;
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
      <RootLayout
        heroHeight={0}
        setBlurBackground={setBlurBackground}
        blurBackground={blurBackground}
      />
    </>
  );
};

export default Category;
