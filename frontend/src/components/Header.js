import { getUserInfo } from "../localStorage.js";
import { parseRequestUrl } from "../utils.js";

const Header = {
  render: async () => {
    const { value } = parseRequestUrl();
    return ` 
      <div class="brand">
        <button id="aside-open-button">
          &#9776;
        </button>       
        <div class="logo-div">
        <a href="/#/" >
        <img class="fit-picture"
          src="/images/logo.png"
          alt="UI Logo"> 
          
        UI Shopwell
        </a>
        </div>
      </div>
      <div class="search">
        <form class="search-form"  id="search-form">
          <input type="text" name="q" id="q" value="${value || ""}" /> 
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>        
      </div>
      <div id="header-links" class="header-links">
        <a href="/#/signin">Sign-In</a>
        <a href="/#/cart">Cart</a>
      </div> 
        `;
  },
  after_render: async () => {
    const { name, isAdmin } = getUserInfo();
    if (name) {
      if (isAdmin) {
        document.getElementById("header-links").innerHTML = `
        <a href="/#/profile">${name}</a>
        <a href="/#/cart">Cart</a>
        <a href="/#/dashboard">Dashboard</a> `;
      } else {
        document.getElementById("header-links").innerHTML = `
        <a href="/#/profile">${name}</a>
        <a href="/#/cart">Cart</a>`;
      }
    }
    document
      .getElementById("search-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchKeyword = document.getElementById("q").value;
        document.location.hash = `/?q=${searchKeyword}`;
      });
    document
      .getElementById("aside-open-button")
      .addEventListener("click", async () => {
        document.getElementById("aside_container").classList.add("open");
      });
  },
};

export default Header;
