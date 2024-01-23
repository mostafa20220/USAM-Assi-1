import Button from "./Button";
import H2 from "./H2";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <>
      <H2 style="mb-12">Do what you love to love what you do</H2>

      <form className="flex space-x-6 justify-center">
        <div>
          <SearchBar
            width="large"
            text="Search jobs, Internships, companies"
            icon="/search.svg"
          />
          <div className="flex items-center space-x-4 text-xs px-4">
            <p className="font-medium text-[var(--color-brand-primary)]">
              popular search
            </p>

            <Button className="text-xs px-4 py-[0.3rem]" to="/search/:query=ui/ux">
              UI/UX
            </Button>
            <Button className="text-xs px-4 py-[0.3rem]" to="/search/:query=ui/ux">
              HR
            </Button>
          </div>
        </div>
        <SearchBar text="Location" icon="/location.svg" />
        <Button className="self-start" to="/search">
          {" "}
          Search{" "}
        </Button>
      </form>
    </>
  );
}
