import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

type HeaderProps = {
  type?: "main" | "company" | "applicant";
};

export default function Header({ type = "main" }: Readonly<HeaderProps>) {
  const navStyle =
    type === "company"
      ? " justify-normal sm:gap-20 "
      : type === "applicant"
      ? " justify-around "
      : "";
  return (
    <header className="mb-16 md:mb-32 p-6">
      <nav
        className={`flex flex-col sm:flex-row items-center justify-between text-[var(--color-brand-primary)] gap-4 ${navStyle} "`}
      >
        {type === "main" && (
          <>
            <ul className="flex items-center space-x-4 md:space-x-4">
              <li>
                <Logo />
              </li>
              <li>
                <Button type="secondary" to="/cv">
                  Create your CV
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/explore">
                  Find job
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/dashboard">
                  Post job
                </Button>
              </li>
            </ul>
            <ul className="flex  items-center space-x-4">
              <li>
                <Button type="secondary" to="/sign-in">
                  Sing In
                </Button>
              </li>
              <li>
                <Button to="/sign-up">Sing Up</Button>
              </li>
              <li>
                <Button to="/employer">Employer</Button>
              </li>
            </ul>
          </>
        )}
        {type === "company" && (
          <>
            <ul className="flex w-fit items-center space-x-4 md:space-x-4">
              <li>
                <Logo />
              </li>
              <li>
                <Button type="secondary" to="/dashboard">
                  Dashboard
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/">
                  Posts
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/">
                  Candidates
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/users">
                  Users
                </Button>
              </li>
            </ul>
            <ul className="flex items-center  space-x-4 w-full">
              <li className="w-full">
                {/* //TODO: Fix The mb-0 not working */}
                <SearchBar
                  iconStyle="w-3"
                  width="large"
                  className=" mb-[0] "
                  icon="/search.svg"
                  text="Search job seekers' CVs"
                />
              </li>
              <li>
                <div className="flex items-center content-center relative pr-4 sm:pr-2">
                  (UserName)((CompanyName)){" "}
                  <img
                    className="absolute h-2 right-0 top-0.5 sm:top-1 "
                    src="/public/down-icon.png"
                    alt="down-icon"
                  />
                </div>
              </li>
            </ul>
          </>
        )}
        {type === "applicant" && (
          <>
            <Logo />
            <ul className="flex w-fit items-center space-x-4 sm:space-x-1 sm:px-4">
              {/* <li className="sm:mr-[10%]">
                <Logo />
              </li> */}
              <li>
                <Button type="secondary" to="/explore">
                  Explore
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/">
                  Saved
                </Button>
              </li>
              <li>
                <Button type="secondary" to="/">
                  Applications
                </Button>
              </li>
            </ul>
            <ul className="flex items-center  space-x-4 w-full">
              <li className="w-full">
                {/* //TODO: Fix The mb-0 not working */}
                <SearchBar
                  iconStyle="w-3"
                  width="large"
                  className=" mb-[0]"
                  icon="/search.svg"
                  text="Search jobs, internships, companies"
                />
              </li>
              <li>
                <div className="flex items-center content-center relative pr-4 sm:pr-2">
                  <img
                    className="h-5 pr-0.5 sm:pr-2 w-auto"
                    src="/public/avatar-logo.png"
                    alt=""
                  />

                  <img
                    className="absolute h-2 w-2 right-0 top-1.5 sm:top-1 "
                    src="/public/down-icon.png"
                    alt="down-icon"
                  />
                </div>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}
