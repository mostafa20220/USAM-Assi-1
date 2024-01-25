import Button from "./Button";
import H2 from "./H2";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <>
      <H2 style="text-center px-[10%] mb-12">Do what you love <br className="md:hidden" /> to love what you do</H2>

      <div className="flex justify-center w-full">
        <form className="flex md:space-x-6 justify-center w-[80%] md:w-[60%] flex-col md:flex-row">
          <div className="md:w-[50%] justify-center gap-2 flex flex-col-reverse md:flex-col">
            <SearchBar
              className="min-w-16"
              width="large"
              text="Search jobs, Internships, companies"
              icon="/search.svg"
            />
            <div className="flex items-center space-x-4 text-xs px-4 md:mb-0 mb-2">
              <p className="md:font-medium text-[var(--color-brand-primary)]">
                popular search
              </p>

              <Button
                className="text-[0.5rem] py-0.5 md:px-4 md:py-[0.2rem]"
                to="/search/:query=ui/ux"
              >
                UI/UX
              </Button>
              <Button
                className="text-[0.5rem] py-0.5 md:px-4 md:py-[0.2rem]"
                to="/search/:query=ui/ux"
              >
                HR
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-4 items-center md:items-start md:w-[50%]">
            <SearchBar
              className="mb-0 min-w-16"
              text="Location"
              icon="/location.svg"
            />
            <Button className="md:self-start " to="/search">
              Search
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
