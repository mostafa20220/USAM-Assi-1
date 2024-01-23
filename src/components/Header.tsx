import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="mb-32 p-8">
      <nav className="flex items-center justify-between text-[var(--color-brand-primary)]">
        <ul className="flex items-center space-x-4">
          <li>
            <Logo />
          </li>
          <li>
            <a href="/">Create your CV</a>
          </li>
          <li>
            <a href="/">Find job</a>
          </li>
          <li>
            <a href="/">Post job</a>
          </li> 
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Button type="secondary" to="/sign-in"> Sing In</Button>
          </li>
          <li>
            <Button to="/sign-up">Sing Up</Button>
          </li>
          <li>
            <Button to="/employer">Employer</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
