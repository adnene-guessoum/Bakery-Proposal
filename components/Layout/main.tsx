import Head from 'next/head';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Main = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>CakeShop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
