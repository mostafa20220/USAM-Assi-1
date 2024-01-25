import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-primary)] text-white px-2 py-6 md:p-8 md:px-12">
      <div className="grid grid-cols-4 gap-x-2 md:gap-y-4 md:gap-x-8  border-stone-400 pb-4 border-b">
        <Logo type="secondary" />
        <div className="flex flex-col gap-1 md:gap-2 items-center sm:items-start">
          <h3 className="md:text-sm font-bold">Quick Links</h3>
          <ul className="md:text-xs flex flex-col items-start gap-1.5 font-normal">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <ul className="md:text-xs flex flex-col items-center sm:items-start justify-center gap-2 font-normal">
          <li>
            <a href="#">Jobs in Egypt</a>
          </li>
          <li>
            <a href="#">Jobs in Saudi Arabia</a>
          </li>
        </ul>

        <div className="flex flex-col gap-1 md:gap-2 items-center sm:items-start ">
          <h3 className="md:text-sm font-bold">Follow us</h3>
          <ul className="md:text-sm flex items-start gap-2 md:gap-4">
            <li >
              <a href="#">
                <ion-icon class="social-logo" name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#">
                <ion-icon class="social-logo" name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li >
              <a href="#">
                <ion-icon class="social-logo" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
          <p className="md:text-xs">Copyright &copy; 2023 jobs</p>
        </div>
      </div>
    </footer>
  );
}
