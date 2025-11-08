
// app/page.tsx


// import Header from './components/header';
// import Layout from './components/layout';
import Layout2 from './components/layout2';
// import EnrollPage from './components/enroll';
// import Team from './components/team';
import Testimonial from './components/testimonial';
// import Layout3 from './components/layout3';
import ProductCarousel from './components/offerings';
// import FAQs from './components/faq';
// import ContactForm from './components/contactform';
// import NewsletterSubscription from './components/newsletter';
import Header2 from './components/header2';
import Line from './components/line';
import Video3 from './components/video3';
import ImageCaurosel from './components/imageChange'; 

// Initialize the font




export default function Home() {
  return (
    <div>
     <Header2 />
      {/* <Header /> */}
      <ProductCarousel />
      {/* <Layout2 /> */}
      <Line />
      <Video3 />
      {/* <Layout /> */}
     <ImageCaurosel />
      {/* <EnrollPage />
      <Team /> */}
      {/* <Testimonial /> */}
      {/* <Layout3 />
      <FAQs />  */}
      {/* <ContactForm />   */}
      {/* <NewsletterSubscription /> */}
     
    </div>
  );
}
