import Aside from "../components/Aside";
import Button from "../components/Button";
import Form from "../components/Form";
import SignPageTemp from "../components/SignPageTemp";

export default function SignInPage() {
  return (
    <SignPageTemp>

      <Aside>
        <div className="flex flex-col justify-center h-[50%] gap-0.5 px-8 items-start">
          <h1 className="text-white lg:text-3xl text-lg lg:leading-[3rem] font-normal tracking-wide text-left">Welcome Back</h1>
        </div>
      </Aside>

      <Form>
          <input
          className="w-full border border-gray-300 rounded-full p-2 px-4"
          type="email"
          placeholder="Email"
          />
        <div className="flex flex-col items-start w-full gap-1.5 mb-1">
          <input
            className="w-full border border-gray-300 rounded-full p-2 px-4"
            type="password"
            placeholder="Password"
            />
          {/* forget password */}
          <a href="#" className="px-4 text-[var(--color-brand-primary)]">
            Forget Password?
          </a>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <button className="bg-[var(--color-brand-primary)] text-white rounded-full p-2 w-full">
            Sign In
          </button>
          <p className="px-4">
            Don't have an account?
            <Button type="secondary" className="text-[var(--color-brand-primary)] px-1" to="/sign-up">
              Sign Up
            </Button>
          </p>
        </div>
      </Form>
      </SignPageTemp>
  );
}
