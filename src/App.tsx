import './App.css';
import SalesBanner from './components/SalesBanner';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import HeroSection from './components/HeroSection';
import DesignInnovation from './components/DesignInnovation';
import DesignBanner from './components/DesignBanner';
import ShowcaseBanner from './components/ShowcaseBanner';
import Recommendations from './components/Recommendations';
import Reviews from './components/Reviews';
// import ThreeDSection from './components/ThreeDSection';
import DetailsAndCare from './components/DetailsAndCare';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
// import NewThreeDSection from './components/NewThreeDSection';

function App() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Sale', href: '/sale' },
    { label: 'Accessories', isActive: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {window.innerWidth < 1024 ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <p className="text-xl font-normal max-w-[320px] text-center">
            Website is better viewed in Desktop devices
          </p>
        </div>
      ) : (
        <>
          <SalesBanner />
          <Header />
          <Breadcrumbs items={breadcrumbItems} />

          {/* Main content area */}
          <main>
            <HeroSection />
            <DetailsAndCare />
            {/* <ThreeDSection /> */}
            {/* <NewThreeDSection /> */}
            <ShowcaseBanner />
            <DesignInnovation />
            <DesignBanner />
            <Reviews />
            <Recommendations />
          </main>

          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
