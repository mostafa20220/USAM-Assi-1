import Aside from "../components/Aside";
import Button from "../components/Button";
import Form from "../components/Form";
import SignPageTemp from "../components/SignPageTemp";

export default function SignUpPage() {
  return (
    <SignPageTemp>
      <Aside>
      <div className="flex flex-col justify-center h-[50%] gap-0.5 px-8 items-start">
          <h1 className="text-white lg:text-3xl text-lg lg:leading-[3rem] font-normal tracking-wide text-left">
            Create an Account to Find Job Faster
          </h1>
          <p className="text-xs">
            Employer?{" "}
            <span className="text-white font-normal">Sing up as employer</span>
          </p>
        </div>
      </Aside>

      <Form className=" h-full flex flex-col justify-center items-center gap-4 px-4 text-[0.5rem]">
        <div className="flex w-full gap-4">
          <input
            className="w-full border border-gray-300 rounded-full p-2 px-4"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full border border-gray-300 rounded-full p-2 px-4"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full border border-gray-300 rounded-full p-2 px-4"
          type="email"
          placeholder="Work Email"
        />

        <input
          className="w-full border border-gray-300 rounded-full p-2 px-4"
          type="password"
          placeholder="Password"
        />
        <div className="flex flex-col items-start w-full gap-1.5 mb-1">
          <input
            className="w-full border border-gray-300 rounded-full p-2 px-4"
            type="text"
            placeholder="What job titles are you looking for?"
          />
          <div className="flex items-center gap-2 px-4">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              I've read and agree with{" "}
              <a href="#" className="text-[var(--color-brand-primary)]">
                Terms of Service
              </a>
              and our{" "}
              <a className="text-[var(--color-brand-primary)]" href="#">
                Privacy Policy
              </a>
            </label>{" "}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <button className="bg-[var(--color-brand-primary)] text-white rounded-full p-2 w-full">
            Sign Up
          </button>
          <p className="px-4">
            Have an account?
            <Button
              type="secondary"
              className="text-[var(--color-brand-primary)] px-1"
              to="/sign-in"
            >
              Sign in
            </Button>
          </p>
        </div>
      </Form>
    </SignPageTemp>
  );
}
