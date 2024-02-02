import ActionBox from "../../components/ActionBox";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function DashboardPage() {
  return (
    <>
      <Header type="company" />

      {/* // new post bar */}

      <main className="flex flex-col items-center content-center px-[10%] gap-8 ">
        <section className={`relative w-full min-w-28 `}>
          <input
            className={` px-4 py-3 w-full drop-shadow-lg  rounded-2xl `}
            type="search"
            value={`Hello {userName}`}
          />

          <Button
            className="absolute right-2 top-2  sm:px-2 sm:py-1  md:px-2 md:py-1  "
            type="primary"
            to={""}
          >
            Add New Post
          </Button>
        </section>

        <section className="grid grid-cols-1  sm:grid-cols-[2fr_1fr] gap-4 w-full mb-10">
          <ActionBox
            title="Your Assistant"
            description="Once you add your jobs and receive candidates, your assistant will highlight the most potential candidates for you to check."
          >
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <Button padding="small" to="">
                  Add New Post
                </Button>
              </li>
              <li>
                <Button padding="small" to="">
                  View All Posts{" "}
                </Button>
              </li>
            </ul>
          </ActionBox>

          <ActionBox title="Complete Company Profile">
            <ul className="flex mt-2 flex-col gap-2 items-center justify-center w-full">
              <li className="w-full">
                <Button className="w-full" padding="small" to="">
                  Company Main Info
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full" padding="small" to="">
                  Company Website
                </Button>
              </li>
              <li className="w-full">
                <Button className="w-full" padding="small" to="">
                  Company Logo
                </Button>
              </li>
            </ul>
          </ActionBox>

          <ActionBox
            title="Team Activity"
            description="Your team members activity on different job posts will
            appear here."
          >
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <Button padding="small" to="">
                  Add Team Member
                </Button>
              </li>
            </ul>
          </ActionBox>

          <ActionBox
            className="h-fit px-1 sm:pb-1 sm:justify-start sm:px-3 sm:py-3  sm:rounded-full"
            title="Add Logo"
            description="Edit Profile"
            icon="/public/add-logo-icon.png"
          />
        </section>
      </main>

      {/* // assistant */}
    </>
  );
}
