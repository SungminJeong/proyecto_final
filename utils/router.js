import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import Favorite from "../Pages/Favorite/Favorite";

const routes = [
    {
        path:"/",
        page: Home,
    },
    {
        path:"/shop",
        page: Shop,
    },
    {
        path:"/gallery",
        page: Gallery,
    },
    {
      path:"/contact",
      page: Contact,
    },
    
    {
      path:"/favorite",
      page: Favorite,
    },
];

export const router = () => {
    const path = window.location.pathname;
    const route = routes.find((route) => route.path === path) || {};
    if (route.page) {
        route.page();
    }
    window.addEventListener("popstate", router);
    window.addEventListener("DOMContentLoaded", router);
}

export const navListeners = () => {
    const navLinks = document.querySelectorAll(".nav_menu li a, nav_icons li a, modal li a");
    for (const link of navLinks) {
      link.addEventListener("click", (ev) => {
        ev.preventDefault();
        for (const el of navLinks) {
          el.classList.remove("active")
        }

        const path = ev.target.pathname;
        history.pushState(null, null, path);
        
        if (ev.target.pathname === window.location.pathname) {
          link.classList.add("active");
        }
        router();
      });
    }
  };