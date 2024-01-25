import CompaniesList from "../components/CompaniesList";
import Company from "../components/Company";
import CountriesList from "../components/CountriesList";
import Country from "../components/Country";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="md:space-y-32 space-y-16 mb-32">
        <section className="mb-32 md:mb-72" id="hero">
          <HeroSection />
        </section>

        <section id="companies" className="flex flex-col gap-20">
          <CompaniesList title="Our companies">
            <li className="flex items-center justify-center">
              <img
                className="w-24 h-auto"
                src="/company-1-logo.png"
                alt="company-1-logo"
              />
            </li>{" "}
            <li className="flex items-center justify-center">
              <img
                className="w-20 h-auto"
                src="/company-2-logo.png"
                alt="company-1-logo"
              />
            </li>{" "}
            <li className="flex items-center justify-center">
              <img
                className="w-20 h-auto"
                src="/company-3-logo.png"
                alt="company-1-logo"
              />
            </li>{" "}
            <li className="flex items-center justify-center">
              <img
                className="w-12 h-auto"
                src="/company-4-logo.png"
                alt="company-1-logo"
              />
            </li>{" "}
            <li className="flex items-center justify-center">
              <img
                className="w-24 h-auto"
                src="/company-5-logo.png"
                alt="company-1-logo"
              />
            </li>{" "}
            <li className="flex items-center justify-center">
              <img
                className="w-24 h-auto"
                src="/company-6-logo.png"
                alt="company-1-logo"
              />
            </li>
          </CompaniesList>

          <CompaniesList title="Active recruitment companies">
            <li>
              <Company
                name="Alqemam - QTech"
                jobs={3}
                logo="/company-logo.png"
              />
            </li>
            <li>
              <Company
                name="Alqemam - QTech"
                jobs={3}
                logo="/company-logo.png"
              />
            </li>
            <li>
              <Company
                name="Alqemam - QTech"
                jobs={3}
                logo="/company-logo.png"
              />
            </li>
            <li className="md:hidden">
              <Company
                name="Alqemam - QTech"
                jobs={3}
                logo="/company-logo.png"
              />
            </li>
          </CompaniesList>
        </section>

        <section id="countries">
          <CountriesList title="Find jobs by country">
            <li>
              <Country name="Egypt" jobs={1000} flag="/egypt-flag.png" />
            </li>
            <li>
              <Country
                name="Saudi Arabia"
                jobs={2000}
                flag="/saudi-arabia-flag.png"
              />
            </li>
            <li>
              <Country name="Qatar" jobs={1000} flag="/qatar-flag.png" />
            </li>
            <li>
              <Country name="Kuwait" jobs={1000} flag="/kuwait-flag.png" />
            </li>
            <li>
              <Country name="Oman" jobs={2000} flag="/oman-flag.png" />
            </li>
            <li>
              <Country name="Bahrain" jobs={1000} flag="/bahrain-flag.png" />
            </li>
          </CountriesList>
        </section>
      </main>

      <Footer />
    </>
  );
}
