import Link from "next/link";

function Footer(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-gray-900"
            : "relative") + " pb-6"
        }
      >
        <div className="container px-4 mx-auto">
          <hr className="mb-6 border-gray-700 border-b-1" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="py-1 text-sm font-semibold text-white">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <a
                  href="https://motiko.github.io"
                  className="py-1 text-sm font-semibold text-white hover:text-gray-400"
                >
                  motiko
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-8/12">
              <ul className="flex flex-wrap justify-center list-none md:justify-end">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-gray-400"
                  >
                    Rules
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-gray-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-gray-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-gray-400"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
