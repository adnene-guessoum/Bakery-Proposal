import Carousel from './subComponents/Carousel';

const Header = (): JSX.Element => {
  const images = [
    {
      id: 1,
      image: '/images/header1.jpg',
      title: 'header1',
      description: 'This is the description for the first slide.'
    },
    {
      id: 2,
      image: '/images/header2.jpg',
      title: 'header2',
      description: 'This is the description for the second slide.'
    },
    {
      id: 3,
      image: '/images/header3.jpg',
      title: 'header3',
      description: 'This is the description for the third slide.'
    }
  ];
  return (
    <div className="m-4">
      <Carousel images={images} />
    </div>
  );
};

export default Header;
