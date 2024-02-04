import Button from "./Button";
import Logo from "./Logo";
import Menus from "./Menus";
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
        <Menus>
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
              <Logo />
              <ul className="flex w-fit items-center space-x-4 md:space-x-4">
                <li>
                  <Button type="secondary" to="/dashboard">
                    Dashboard
                  </Button>
                </li>
                <li>
                  <Menus.Toggle list="posts">Posts</Menus.Toggle>
                  <Menus.List name="posts">
                    <Menus.Button>Manage Jobs</Menus.Button>{" "}
                    <Menus.Button>Manage Internships</Menus.Button>{" "}
                    <Menus.Button>Add New Job</Menus.Button>{" "}
                    <Menus.Button>Add New Internship</Menus.Button>
                    <Menus.Button>View All</Menus.Button>
                  </Menus.List>
                </li>
                <li>
                  <Menus.Toggle list="Candidates">Candidates</Menus.Toggle>
                  <Menus.List name="Candidates">
                    <Menus.Button>Unlocked Candidates</Menus.Button>
                    <Menus.Button>Most Potential Candidates</Menus.Button>
                  </Menus.List>
                </li>
                <li>
                  <Button type="secondary" to="/users">
                    Users
                  </Button>
                </li>
              </ul>
              <ul className="flex items-center  space-x-4 w-full">
                <li className="w-full">
                  <SearchBar
                    iconStyle="w-3"
                    width="large"
                    className=" mb-[0] "
                    icon="/search.svg"
                    text="Search job seekers' CVs"
                  />
                </li>
                <li>
                  <Menus.Toggle list="options">Manar(Elegant)</Menus.Toggle>
                  <Menus.List name="options">
                    <Menus.Button icon="/edit-icon.png">
                      Edit Profile
                    </Menus.Button>
                    <Menus.Button icon="/help-icon.png">Help</Menus.Button>
                    <Menus.Button icon="/about-icon.png">About US</Menus.Button>

                    <Menus.Button icon="/logout-icon.png">
                      Sign Out
                    </Menus.Button>
                  </Menus.List>
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
                  <Menus.Toggle list="options">
                    <img
                      className="h-auto w-10 pr-0.5 sm:pr-2"
                      src="/avatar-logo.png"
                      alt=""
                    />
                  </Menus.Toggle>
                  <Menus.List name="options">
                    <Menus.Button icon="/edit-icon.png">
                      Edit Profile
                    </Menus.Button>
                    <Menus.Button icon="/help-icon.png">Help</Menus.Button>
                    <Menus.Button icon="/about-icon.png">About US</Menus.Button>
                    <Menus.Button icon="/settings-icon.png">
                      Setting
                    </Menus.Button>{" "}
                    <Menus.Button icon="/logout-icon.png">
                      Sign Out
                    </Menus.Button>
                  </Menus.List>
                </li>
              </ul>
            </>
          )}
        </Menus>
      </nav>
    </header>
  );
}
