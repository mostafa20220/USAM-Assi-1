import ActionBox from "../../components/ActionBox";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function UsersPage() {
  return (
    <>
      <Header type="company" />
      <main className="flex flex-col items-center content-center px-[10%] gap-8 ">
        <section className="w-full min-w-28">
          <input
            className="px-4 py-3 mb-4 w-full drop-shadow-lg rounded-2xl"
            type="search"
            value="Manage Users"
          />
          <p className="font-thin text-slate-400">
            Here you can create and manage accounts for your HR and hiring team
            so that they can help you post jobs and screen job candidates
          </p>
        </section>
        <section className="w-full min-w-28">
          <div className="sm:ml-[30%] mb-8 px-2 py-2 pr-8 drop-shadow-lg shadow-lg sm:w-fit rounded-2xl ">
            Invited Users(0)
          </div>

          <ActionBox className="mb-8 sm:w-[40%]" title="Add User">
            <form className="flex flex-col gap-2  relative sm:pr-4 ">
              <input
                className="px-4 py-2 border rounded-2xl"
                type="text"
                placeholder="Username"
              />
              <input
                className="px-4 py-2 border rounded-2xl"
                type="email"
                placeholder="Email"
              />
              <input
                className="px-4 py-2 border rounded-2xl"
                type="text"
                placeholder="Job Title"
              />
              <input
                className="px-4 py-2 border rounded-2xl"
                type="text"
                placeholder="Type"
              />
              <Button to="" className=" sm:absolute -bottom-6 -right-20">
                Add
              </Button>
            </form>
          </ActionBox>
        </section>
      </main>
    </>
  );
}
