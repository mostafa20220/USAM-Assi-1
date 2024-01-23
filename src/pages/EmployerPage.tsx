import Aside from "../components/Aside";
import Button from "../components/Button";

export default function EmployerPage() {
  return (
    <div className="h-full grid grid-cols-[5.1fr_6fr] ">
      <Aside>
        <div className="flex flex-col justify-center h-[50%] gap-0.5 px-8 items-start">
          <h1 className="text-white lg:text-3xl text-lg lg:leading-[3rem] font-normal tracking-wide text-left">
            Create an Company Account to Start Hiring Now
          </h1>
          <p className=" text-xs md:text-base">
            Looking for a job?{" "}
            <span className="text-white font-normal">
              Sing up as job seeker
            </span>
          </p>
        </div>
      </Aside>

      <form className=" h-full flex py-10 pt-32 flex-col justify-center items-center gap-4 lg:gap-6 px-8 lg:px-16 text-[0.5rem]">
        <div className="flex w-full gap-4">
          <input
            className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
          type="email"
          placeholder="Work Email"
        />
        <input
          className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
          type="text"
          placeholder="Company Name"
        />
        <input
          className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
          type="text"
          placeholder="Company Location"
        />{" "}
        <input
          className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
          type="text"
          placeholder="Company Site"
        />
        <div className="flex flex-col items-start w-full gap-1.5 mb-1">
          <input
            className="w-full border border-gray-300 rounded-xl p-2 px-4 lg:py-3"
            type="text"
            placeholder="What role are you hiring for?"
          />
          <div className="flex items-center gap-2 px-2">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms" lg:py-3>
              I've read and agree with <a href="#" className="text-[var(--color-brand-primary)]">Terms of Service</a>
              and our <a className="text-[var(--color-brand-primary)]" href="#">Privacy Policy</a>
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <button className="bg-[var(--color-brand-primary)] text-white rounded-xl p-2 w-full">
            Sign Up
          </button>
          <p className="px-4">
            Have an account?
            <Button
              type="secondary"
              className="text-[var(--color-brand-primary)] px-0.5"
              to="/sign-in"
            >
              Sign in
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
}
