import { useSession } from "next-auth/client"

const Landing = ({}) => {
    const [session, loading] = useSession()
  
    return (
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <Content />
          <Testimonials />
        </div>
      </div>
    )
  }


const Content = ({ children }) => {
  return (
    <>
      <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your
            <br />
            <span className="text-indigo-600">online business</span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-gray-800"></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <img
            className="relative rounded-lg shadow-lg"
            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </>
  );
};

const Testimonials = ({ children }) => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">
        <h3 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
          Trusted by over 26,000 forward-thinking companies
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo.svg"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo.svg"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing
