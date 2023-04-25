export type IMenuItem = {
    title: string;
    isOptions: boolean;
    options?: IOption[];
    path: string;
  };
  
  type IOption = {
    subtitle: string;
    suboptions: string[];
  };
  
 export const MENU: IMenuItem[] = [
    {
      title: "Пчелы",
      isOptions: true,
      options: [
        {
          subtitle: "Индийская пчела",
          suboptions: ["Красная", "Розовая", "Черная"],
        },
        {
          subtitle: "Арликовая пчела",
          suboptions: ["Красная", "Розовая", "Черная"],
        },
      ],
      path: "#",
    },
    {
      title: "Дом пчелы",
      isOptions: false,
      path: "#",
    },
    {
      title: "Соты",
      isOptions: false,
      path: "#",
    },
    {
      title: "Мед",
      isOptions: false,
      path: "#",
    },
    {
      title: "Таблица данных",
      isOptions: false,
      path: "#",
    },
  ];