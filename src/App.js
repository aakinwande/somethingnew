import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';
import Ghostwriting from './components/pages/Ghostwriting';
import BusinessBooks from './components/pages/BusinessBooks';
import Footer from './components/footer/Footer';
import MemoirAutoBiography from './components/pages/MemoirAutoBiography';
import GeneralNonFiction from './components/pages/GeneralNonFiction';
import SelfHelp from './components/pages/SelfHelp';
import Fiction from './components/pages/Fiction';
import Children from './components/pages/Children';
import SocialMedia from './components/pages/SocialMedia';
import Speeches from './components/pages/Speeches';
import SalesFunnel from './components/pages/SalesFunnel';
import Copywriting from './components/pages/Copywriting';
import EmailCampaign from './components/pages/EmailCampaign';
import ThoughtLeadership from './components/pages/ThoughtLeadership';
import SalesCall from './components/pages/SalesCall';
import WebsiteContent from './components/pages/WebsiteContent';
import Marketing from './components/pages/Marketing';
import BrandContent from './components/pages/BrandContent';
import PersonalPublicImage from './components/pages/PersonalPublicImage';
import AllCategoriesBlogPage from './components/pages/AllCategoriesBlogPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/ghostwriting' component={Ghostwriting} />
        <Route path='/business-books' component={BusinessBooks} />
        <Route path='/memoir-autobiography' component={MemoirAutoBiography} />
        <Route path='/general-nonfiction' component={GeneralNonFiction} />
        <Route path='/self-help' component={SelfHelp} />
        <Route path='/fiction' component={Fiction} />
        <Route path='/childrens' component={Children} />
        <Route path='/social-media' component={SocialMedia} />
        <Route path='/speeches' component={Speeches} />
        <Route path='/copywriting' component={Copywriting} />
        <Route path='/sales-funnel-scripts' component={SalesFunnel} />
        <Route path='/email-campaign' component={EmailCampaign} />
        <Route path='/thought-leadership-articles' component={ThoughtLeadership} />
        <Route path='/sales-call-scripts' component={SalesCall} />
        <Route path='/website-content' component={WebsiteContent} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/brand-content-strategy' component={BrandContent} />
        <Route path='/personality-public-image' component={PersonalPublicImage} />
        <Route path='/allcategories' component={AllCategoriesBlogPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
