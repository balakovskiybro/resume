import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import PortfolioSection from "./components/PortfolioSection"
import QuoteSection from "./components/QuoteSection"
import ServicesSection from "./components/ServicesSection"
import Footer from "./components/Footer"

export default function App(){
    <>
    <Header />
    <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <QuoteSection />
        <ServicesSection />
    </main>
    <Footer />
    </>
}