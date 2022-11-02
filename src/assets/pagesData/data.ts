import { type } from "os";


export const baseUrl : string = "https://vshortl.herokuapp.com";


export const navLinks = [
    {
        name:"Home",
        link:""
    },
    {
        name:"About us",
        link:"About"

    },
    {
        name:"What we do"
    },
    {
        name:"products",
        link:"/products"
    },
    {
        name:"Contacts"
    },
    {
        name:"Login",
        link:"login"
    },
]


export const sendEMailInputs = [
  {name:"Your fullName", type:"text"}, {name:"Your Email", type:"email"}
]
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
const buttons : Object = [{name:'Login'} , { name:"Get started"}];

type strings = {
  name:string,
  link:string
}

type links = [
  {
    title: string,
    links: strings[]

  }
]
export const footerLInks = [
  {
    title:"QUick Links",
    links:[
      {
        name:"Home",
        link:"/"
      },
      {
        name:"About us",
        link:"About"
      },
      {
        name:"Products",
        link:"products"
      },
      {
        name:"contacts",
        link:"contacts"
      }
    ]

  },
  {
    title:"Contacts",
    links:[
      {
        name:"mukeshametax@gmail.com",
        link:""
      },
      {
        name:"0782825742",
        link:"About"
      },
      {
        name:"www.mukeshametax.com",
        link:"products"
      },
      {
        name:"Linked In",
        link:""
      },
      {
        name:"Twitter",
        link:"contacts"
      }
    ]

  }
]