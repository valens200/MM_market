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


export const guidelines = [
  {
    image:"https://images.ctfassets.net/p8xsnnoeyh42/1ASD26Y3jqzW91x4u9yOTE/d114e42099bd3352f2bee942c21f7b5a/icon-02.png",
    title:"Purpose-built Solutions",
    text:"We know tech talent – how to find, train, and grow. It’s in our DNA. Our focus on technical expertise means you get specialists, not generalists."
  },
  {
    image:"https://images.ctfassets.net/p8xsnnoeyh42/2E1J3UNQTCp6zqJ73aKf90/39f54b8412f073fecafade414df8b576/icon-01.png",
    title:"Extraordinary People",
    text:"Smart people aren’t part of what we do. They’re everything. We’re in the business of servicing people with people, the best people out there."
  },
  {
    image:"https://images.ctfassets.net/p8xsnnoeyh42/6evws2qkhEKRc0U2Lbx2gX/108ec43bda06b3206593d9b31f653b21/icon-03.png",
    title:"Exceptional CX",
    text:"Every interaction with a customer is an opportunity to grow brand loyalty and we take our role in delivering exceptional customer experiences seriously."
  },
  {
    image:"https://images.ctfassets.net/p8xsnnoeyh42/5mBo7mC7TG4JalMfUGnHBy/c9ef2e9de3c7d090b2824d3fec0f5da9/icon-04.png",
    title:"Focused on You",
    text:"We customize our solutions to meet your needs, connecting you with the tech talent you need to deliver on your objectives."
  }
]
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
  // { icon: FiEye, name: "View Details" },
  { icon: BsCartPlus, name: "Add to cart" },
];

export const productBUttons2 = {icon:BsCartPlus, name: "Remove from cart"}

export const clients = [
  {
    img:"",
    name:"construction",
    bio:"Popular contruction company loved my the cloud",
    message:" metax i used to provide weak bulding but now i'm safe",
  },
  {
    img:"",
    name:"Horizon construction",
    bio:"Popular contruction company loved my the cloud",
    message:"Before using Rwanda metax i used to provide weak bulding but now i'm safe",
  },
  {
    img:"",
    name:"main construction",
    bio:"Popular contruction company loved my the cloud",
    message:"Before using Rwanda metax i used to provide weak bulding but now i'm safe",
  }
]

export const shipingAddress = [{name:"FullName", type:"text"}, {name:"Address", type:"text"}, {name:"City", type:"text"}, {name:"Postal Code", type:"number"}, {name:"Country", type:"text"}]
