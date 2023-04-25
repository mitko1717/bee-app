import { useState } from "react";
import { MENU } from "./menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState<string>("");

  const showOptionsHandler = (title: string) => {
    isOpenOptions === title ? setIsOpenOptions("") : setIsOpenOptions(title);
  };

  return (
    <>
      {/* Mobile Menu */}
      <nav
        className={`absolute z-20 ${
          menuOpen && "h-full"
        } w-full text-gray-100 flex items-center justify-between md:hidden`}
      >
        <div className="flex items-center w-full">
          <button
            className="text-white focus:outline-none absolute top-0 left-0 p-2 bg-grey bg-opacity-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseBtn /> : <OpenBtn />}
          </button>

          <div className="absolute w-20 flex justify-center items-center top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BeeIcon /> <p className="text-brown text-xl font-bold">bee</p>
          </div>

          {menuOpen && (
            <div className="h-[100vh] bg-darkOrange text-brown flex flex-col justify-center items-center mx-auto w-full gap-y-4">
              {MENU.map((item) => (
                <div
                  className=" w-full flex flex-col text-center"
                  key={item.title}
                >
                  <Link
                    to={item.path}
                    className="text-3xl cursor-pointer"
                    onClick={() => showOptionsHandler(item.title)}
                  >
                    {item.title}
                  </Link>
                  {isOpenOptions === item.title && item.isOptions && (
                    <ul className="mx-auto">
                      {item.options?.map((opt) => (
                        <li className="" key={opt.subtitle}>
                          <h4 className="block">{opt.subtitle}</h4>
                          <ul className="gap-y-1">
                            {opt.suboptions.map((subopt, index) => (
                              <li className="text-xs" key={index}>
                                {subopt}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className=" w-full flex flex-col text-center text-3xl mt-4">
                Регистрация
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <header className="h-[100px] w-full bg-darkOrange hidden md:block md:py-4 md:px-6">
        <div className="flex mx-auto h-full justify-center items-center text-brown gap-x-2">
          <div className="flex justify-center items-center mr-16">
            <BeeIcon />
            <p className="font-bold text-xl">bee</p>
          </div>
          {MENU.map((item) => (
            <div
              className={`flex relative ${
                isOpenOptions === item.title ? "bg-white" : ""
              } p-1`}
              key={item.title}
            >
              <Link
                to={item.path}
                className="text-2xl cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
                onClick={() => showOptionsHandler(item.title)}
              >
                {item.title}
              </Link>
              {isOpenOptions === item.title && item.isOptions && (
                <ul className="absolute justify-center gap-x-6 w-80 -bottom-[6rem] -left-6 flex bg-white border border-[#c8c1c1] py-2 px-4">
                  {item.options?.map((opt) => (
                    <li className="" key={opt.subtitle}>
                      <h4 className="block">{opt.subtitle}</h4>
                      <ul className="gap-y-1">
                        {opt.suboptions.map((subopt, index) => (
                          <li
                            className="text-xs cursor-pointer hover:opacity-50"
                            key={index}
                          >
                            {subopt}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="text-center text-2xl ml-16">Регистрация</div>
        </div>
      </header>
    </>
  );
};

export default Header;

export const CloseBtn = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20">
    <path
      fill="black"
      d="M14.71 5.29a1 1 0 0 0-1.42 0L10 8.59 6.71 5.29a1 1 0 0 0-1.42 1.42L8.59 10l-3.3 3.29a1 1 0 1 0 1.42 1.42L10 11.41l3.29 3.3a1 1 0 0 0 1.42-1.42L11.41 10l3.3-3.29a1 1 0 0 0 0-1.42z"
    />
  </svg>
);

export const OpenBtn = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      color="black"
      d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-7V4H3v2h18z"
    />
  </svg>
);

export const BeeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="30.000000pt"
    height="30.000000pt"
    viewBox="0 0 225.000000 225.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M793 1783 c-7 -2 -13 -17 -13 -32 0 -19 16 -43 60 -86 l60 -59 -39 -41 c-40 -40 -91 -134 -91 -167 0 -16 -12 -18 -109 -18 -70 0 -123 -5 -151 -15 -104 -37 -170 -130 -170 -242 0 -105 43 -180 132 -229 49 -26 63 -29 176 -32 108 -4 122 -6 122 -21 0 -38 62 -141 111 -185 45 -41 137 -86 174 -86 12 0 15 -14 15 -63 0 -73 15 -101 51 -95 23 3 24 7 27 79 l3 76 50 11 c106 25 201 108 239 208 11 30 20 59 20 63 0 5 55 11 123 13 142 4 179 18 244 92 89 101 82 257 -14 351 -61 59 -95 70 -230 73 -68 2 -123 8 -123 12 0 35 -49 128 -90 173 l-49 54 60 59 c59 59 69 80 47 102 -23 23 -44 12 -111 -56 l-68 -69 -52 14 c-65 17 -99 16 -167 -1 l-55 -14 -71 69 c-69 66 -83 74 -111 62z m432 -207 c49 -21 110 -81 134 -131 12 -25 21 -49 21 -55 0 -6 -93 -10 -265 -10 -205 0 -265 3 -265 13 1 30 41 95 82 133 40 37 68 51 133 68 31 8 123 -3 160 -18z m-465 -456 l0 -180 -99 0 c-110 0 -142 8 -184 48 -66 62 -79 148 -33 225 39 68 86 87 214 87 l102 0 0 -180z m630 145 l0 -35 -275 0 -275 0 0 35 0 35 275 0 275 0 0 -35z m307 24 c34 -13 80 -55 99 -91 19 -37 18 -116 -4 -157 -9 -19 -34 -48 -55 -65 -37 -30 -43 -31 -153 -34 l-114 -4 0 181 0 181 99 0 c55 0 112 -5 128 -11z m-307 -169 l0 -30 -275 0 -275 0 0 30 0 30 275 0 275 0 0 -30z m0 -145 l0 -35 -275 0 -275 0 0 35 0 35 275 0 275 0 0 -35z m-10 -119 c0 -1 -5 -17 -11 -35 l-11 -31 -242 0 -243 0 -11 25 c-7 14 -12 30 -12 35 0 6 104 10 265 10 146 0 265 -2 265 -4z m-125 -171 c-85 -53 -195 -53 -280 0 l-40 24 180 0 180 0 -40 -24z" />
    </g>
  </svg>
);
