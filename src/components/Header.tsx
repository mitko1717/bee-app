import { useState } from "react";

type IMenuItem = {
    title: string,
    isOptions: boolean,
    options?: IOption[]
    path: string
}

type IOption = {
    subtitle: string
    suboptions: string[]
}

const MENU: IMenuItem[] = [
    { 
        title: "Пчелы",
        isOptions: true,
        options: [
            {
                subtitle: "Индийская пчела",
                suboptions: ["Красная", "Розовая", "Черная"]
            },
            {
                subtitle: "Арликовая пчела",
                suboptions: ["Красная", "Розовая", "Черная"]
            },
        ],
        path: "#"
     },
    { 
        title: "Дом пчелы",
        isOptions: false,
        path: "#"
     },
    { 
        title: "Соты",
        isOptions: false,
        path: "#"
     },
    { 
        title: "Мед",
        isOptions: false,
        path: "#"
     },
    { 
        title: "Таблица данных", 
        isOptions: false,
        path: "#"
    }
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState<string>("")
  
  const showOptionsHandler = (title: string) => {
    isOpenOptions === title ? setIsOpenOptions("") : setIsOpenOptions(title)
  }

  return (
    <>
      {/* Mobile Menu */}
      <nav className="absolute z-20 h-full w-full text-gray-100 flex items-center justify-between md:hidden">
        <div className="flex items-center w-full">
          <button
            className="text-white focus:outline-none absolute top-0 left-0 p-2 bg-grey bg-opacity-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseBtn /> : <OpenBtn />}
          </button>
          {menuOpen && <div className="h-[100vh] bg-darkOrange text-brown flex flex-col justify-center items-center mx-auto w-full gap-y-4">
          {MENU.map(item => (
            <div className=" w-full flex flex-col text-center" key={item.title}>
               <a href="#" className="text-3xl cursor-pointer" onClick={() => showOptionsHandler(item.title)}>{item.title}</a> 
               {isOpenOptions === item.title && item.isOptions && 
                <ul className="mx-auto">
                    {item.options?.map(opt => (
                        <li className="" key={opt.subtitle}>
                            <h4 className="block">{opt.subtitle}</h4>
                            <ul className="gap-y-1">
                                {opt.suboptions.map((subopt, index) => (
                                    <li className="text-xs" key={index}>{subopt}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul> 
                }
            </div>
          ))}
          <div className=" w-full flex flex-col text-center text-3xl mt-4">Регистрация</div>
        </div>
        }
        </div>
      </nav>

      {/* Header */}
      <header
        className="h-[100px] w-full bg-darkOrange hidden md:block md:py-4 md:px-6"
      >
        <div className="flex mx-auto h-full justify-center items-center text-brown gap-x-3">
          <div><BeeIcon /></div>
          {MENU.map(item => (
            <div className="flex relative" key={item.title}>
                <a href="#" className="text-2xl cursor-pointer" onClick={() => showOptionsHandler(item.title)}>{item.title}</a> 
                {isOpenOptions === item.title && item.isOptions && 
                <ul className="absolute justify-center gap-x-6 w-80 -bottom-[6rem] -left-6 flex bg-white border border-[#c8c1c1] py-2 px-4">
                    {item.options?.map(opt => (
                        <li className="" key={opt.subtitle}>
                            <h4 className="block">{opt.subtitle}</h4>
                            <ul className="gap-y-1">
                                {opt.suboptions.map((subopt, index) => (
                                    <li className="text-xs cursor-pointer hover:opacity-50" key={index}>{subopt}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul> 
                }
            </div>
          ))}
          <div className="text-center text-2xl ml-4">Регистрация</div>
        </div>
      </header>
    </>
  );
}

export default Header;

export const CloseBtn = () => (
    <svg className="h-5 w-5" viewBox="0 0 20 20">
      <path fill="black" d="M14.71 5.29a1 1 0 0 0-1.42 0L10 8.59 6.71 5.29a1 1 0 0 0-1.42 1.42L8.59 10l-3.3 3.29a1 1 0 1 0 1.42 1.42L10 11.41l3.29 3.3a1 1 0 0 0 1.42-1.42L11.41 10l3.3-3.29a1 1 0 0 0 0-1.42z"/>
    </svg>
  )
  

export const OpenBtn = () => (
    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path
            fillRule="evenodd"
            color="black"
            d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-7V4H3v2h18z"
        />
    </svg>    
)

export const BeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16.913 9.84c-.506-2.008-2.074-3.471-4.013-3.724l-1.291-1.972a.5.5 0 0 0-.77 0l-1.291 1.972a5.017 5.017 0 0 0-4.013 3.724 3.513 3.513 0 0 0-1.193 2.674 3.44 3.44 0 0 0 1.049 2.43c.64.58 1.455.88 2.307.88.853 0 1.667-.3 2.307-.88a3.44 3.44 0 0 0 1.05-2.43 3.512 3.512 0 0 0-1.193-2.673M18.5 15a3.5 3.5 0 0 1-.835 2.266c-.553.61-1.292 1.068-2.11 1.315a4.64 4.64 0 0 1-2.556 0 4.077 4.077 0 0 1-2.11-1.315A3.5 3.5 0 0 1 5.5 15M8.023 11.676c.052-.04.106-.076.162-.107l1.303-.472a.5.5 0 0 0 .289-.38l.196-1.471a.5.5 0 0 0-.12-.385l-1.072-1.066a.5.5 0 0 0-.704 0L7.188 9.353a.5.5 0 0 0-.12.385l.196 1.47a.5.5 0 0 0 .289.381l1.303.472zM11.5 17.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14.5 17.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM5.5 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM5.5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM18.5 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM18.5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
    </svg>
)