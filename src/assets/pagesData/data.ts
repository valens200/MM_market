import { type } from "os";
import { BsCartPlus } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import {
  BsFillTelephoneFill,
  BsFillCalendar2Fill,
  BsFillAlarmFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
export const baseUrl: string = "https://vshortl.herokuapp.com";
type Divs = {
  p: string[];
  background: string;
};
// export const topNavs = [{name: "mukunzishop@gmail.com"}, {name: "07828"}]
export const categories = [
  {
    name: "Masonry",
    clicked: true,
  },
  {
    name: "Masonry",
    clicked: false,
  },
  {
    name: "Masonry",
    clicked: false,
  },
  {
    name: "Masonry",
    clicked: false,
  },
  {
    name: "Masonry",
    clicked: false,
  },
];
export const navLinks = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "About us",
    link: "About",
  },
  {
    name: "What we do",
  },
  {
    name: "products",
    link: "products",
  },
  {
    name: "Contacts",
  },
];

export const divs: Divs[] = [
  {
    p: [
      "This is the online construction materials shooping",
      "Come and book your own and pay smoothly at low prices",
      "You strength is our concern",
    ],
    background: "main",
  },
  {
    p: [
      "This is the online construction materials shooping",
      "Come and book your own and pay smoothly at low prices",
      "You strength is our concern",
    ],
    background: "main",
  },
  {
    p: [
      "This is the online construction materials shooping",
      "Come and book your own and pay smoothly at low prices",
      "You strength is our concern",
    ],
    background: "main",
  },
  {
    p: [
      "This is the online construction materials shooping",
      "Come and book your own and pay smoothly at low prices",
      "You strength is our concern",
    ],
    background: "main",
  },
];
export const topNavs = [
  {
    icon: BsFillCalendar2Fill,
    name: "mkunzishop@gmail.com",
  },
  {
    icon: BsFillTelephoneFill,
    name: "0782825742",
  },
  {
    icon: BsFillVolumeUpFill,
    name: "mkunzi250",
  },
  {
    icon: BsFillAlarmFill,
    name: "Help",
  },
];
export const sendEMailInputs = [
  { name: "Your fullName", type: "text" },
  { name: "Your Email", type: "email" },
];
export const footerLinks = {
  contacts: ["Email", "Github", "LinkedIn", "Twitter"],
  QuickLinks: ["Home", "Chart", "Register", "Login"],
  inputs: [
    { type: "text", name: "FullName" },
    { type: "email", name: "Email" },
  ],
  registerInputs: [
    { type: "text", name: "UserName" },
    { type: "password", name: "Password" },
    { type: "email", name: "Email" },
  ],
  loginInputs: [
    { type: "password", name: "Password" },
    { type: "email", name: "Email" },
  ],
  navigation: ["Posts", "Followers", "Following"],
};
const buttons: Object = [{ name: "Login" }, { name: "Get started" }];

type strings = {
  name: string;
  link: string;
};

type links = [
  {
    title: string;
    links: strings[];
  }
];
export const footerLInks = [
  {
    title: "QUick Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About us",
        link: "About",
      },
      {
        name: "Products",
        link: "products",
      },
      {
        name: "contacts",
        link: "contacts",
      },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        name: "mukeshametax@gmail.com",
        link: "",
      },
      {
        name: "0782825742",
        link: "About",
      },
      {
        name: "www.mukeshametax.com",
        link: "products",
      },
      {
        name: "Linked In",
        link: "",
      },
      {
        name: "Twitter",
        link: "contacts",
      },
    ],
  },
  {
    title: "Customer Services",
    links: [
      {
        name: "Trade Assurance",
        link: "",
      },
      {
        name: "Your orders",
        link: "About",
      },
      {
        name: "Delivery Rates & Shipping policies",
        link: "products",
      },
      {
        name: "Returns & Refunding",
        link: "",
      },
    ],
  },

  {
    title: "Get help",
    links: [
      {
        name: "SL Business Card",
        link: "",
      },
      {
        name: "Spider Lotus and COVID-19",
        link: "About",
      },
      {
        name: "SL Assistant",
        link: "products",
      },
      {
        name: "Manage Your Account",
        link: "",
      },
      {
        name: "Help",
        link: "",
      },
    ],
  },
];

export const productButtons = [
  { icon: FiEye, name: "View Details" },
  { icon: BsCartPlus, name: "Add to cart" },
];
