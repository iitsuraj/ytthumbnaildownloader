import ActiveLink from "components/activeLink";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <div className="w-full">
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <div id="tabs" className="flex justify-between">
            <ActiveLink
              href="/"
              className={
                "w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="25"
                height="25"
                className="inline-block mb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="tab tab-home block text-xs">Home</span>
            </ActiveLink>
            <ActiveLink
              href="/about"
              className={
                "w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="25"
                height="25"
                className="inline-block mb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
              <span className="tab tab-account block text-xs">About</span>
            </ActiveLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
