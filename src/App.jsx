// Create Import File
import "./index.scss";
import "photoswipe/dist/photoswipe.css";
import PageScrollTop from "./component/PageScrollTop";

// Home layout
import Demo from "./page-demo/Demo";
import MainDemo from "./home/MainDemo";
import Startup from "./home/Startup";
import Paralax from "./home/Paralax";
import HomePortfolio from "./home/HomePortfolio";
import DigitalAgency from "./home/DigitalAgency";
import CreativeAgency from "./home/CreativeAgency";
import PersonalPortfolio from "./home/PersonalPortfolio";
import Business from "./home/Business";
import StudioAgency from "./home/StudioAgency";
import PortfolioLanding from "./home/PortfolioLanding";
import CreativeLanding from "./home/CreativeLanding";
import HomeParticles from "./home/HomeParticles";
import CreativePortfolio from "./home/CreativePortfolio";
import DesignerPortfolio from "./home/DesignerPortfolio";
import InteriorLanding from "./home/Interior";
import CorporateBusiness from "./home/CorporateBusiness";
import InteractiveAgency from "./home/InteractiveAgency";

// Dark Home Layout
import DarkMainDemo from "./dark/MainDemo";
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import Error404 from "./elements/error404";

// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Demo />} />
          <Route path={`main-demo`} element={<MainDemo />} />
          <Route path={`dark-main-demo`} element={<DarkMainDemo />} />
          <Route path={`startup`} element={<Startup />} />
          <Route path={`paralax`} element={<Paralax />} />

          <Route path={`digital-agency`} element={<DigitalAgency />} />
          <Route path={`creative-agency`} element={<CreativeAgency />} />
          <Route path={`personal-portfolio`} element={<PersonalPortfolio />} />
          <Route path={`studio-agency`} element={<StudioAgency />} />
          <Route path={`business`} element={<Business />} />
          <Route path={`portfolio-home`} element={<HomePortfolio />} />
          <Route path={`portfolio-landing`} element={<PortfolioLanding />} />
          <Route path={`creative-landing`} element={<CreativeLanding />} />
          <Route path={`home-particles`} element={<HomeParticles />} />
          <Route
            path={`dark-portfolio-landing`}
            element={<DarkPortfolioLanding />}
          />
          <Route path={`designer-portfolio`} element={<DesignerPortfolio />} />
          <Route path={`creative-portfolio`} element={<CreativePortfolio />} />
          <Route path={`interior-landing`} element={<InteriorLanding />} />
          <Route path={`corporate-business`} element={<CorporateBusiness />} />
          <Route path={`interactive-agency`} element={<InteractiveAgency />} />

          {/* Element Layout */}
          <Route path={`service`} element={<Service />} />
          <Route path={`service-details`} element={<ServiceDetails />} />
          <Route path={`contact`} element={<Contact />} />
          <Route path={`about`} element={<About />} />
          <Route path={`portfolio-details`} element={<PortfolioDetails />} />
          <Route path={`blog`} element={<Blog />} />
          <Route path={`blog-details`} element={<BlogDetails />} />

          {/* Block Elements */}
          <Route path={`team`} element={<Team />} />
          <Route path={`counters`} element={<Counters />} />
          <Route path={`testimonial`} element={<Testimonial />} />
          <Route path={`portfolio`} element={<Portfolio />} />
          <Route path={`video-popup`} element={<VideoPopup />} />
          <Route path={`gallery`} element={<Gallery />} />
          <Route path={`clint-logo`} element={<Brand />} />
          <Route path={`progressbar`} element={<ProgressBar />} />
          <Route path={`contact-form`} element={<ContactForm />} />
          <Route path={`google-map`} element={<GoogleMap />} />
          <Route path={`columns`} element={<Columns />} />
          <Route path={`pricing-table`} element={<PricingTable />} />

          {/* Error Route */}
          <Route path={`404`} element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <PageScrollTop />
    </>
  );
}

export default App;
