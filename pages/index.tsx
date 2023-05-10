import React from 'react';
import ServicesCards from '../components/ServicesCard';
import Layout from '../components/Layout/main';
import Introduction from '../components/Introduction';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const IndexPage = () => {
  const services = [
    {
      id: 1,
      title: 'Pièces montées',
      description: 'lorem ipsum'
    },
    {
      id: 2,
      title: 'cupcake',
      description: 'lorem ipsum'
    },
    {
      id: 3,
      title: "Gateaux d'anniversaire",
      description: 'lorem ipsum'
    },
    {
      id: 4,
      title: 'Confections sur mesure',
      description: 'lorem ipsum'
    },
    {
      id: 5,
      title: 'Gâteaux de mariage',
      description: 'lorem ipsum'
    },
    {
      id: 6,
      title: 'desserts',
      description: 'lorem ipsum'
    }
  ];

  return (
    <Layout>
      <h2 id="services" className="text-4xl font-bold text-center">
        Nos Créations
      </h2>
      <div className="flex flex-wrap justify-center w-full h-screen">
        {services.map(service => {
          return <ServicesCards service={service} key={service.id} />;
        })}
      </div>

      <Introduction />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
