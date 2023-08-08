window.onload = function () {
  var Menu = (function () {
    var drawer = document.querySelector(".drawer-menu");
    var menu = document.querySelector(".menu");
    var menuList = document.querySelector(".menu__list");
    var menuItems = document.querySelectorAll(".menu__item");

    var active = false;

    var toggleMenu = function () {
      if (!active) {
        drawer.classList.add("drawer-menu--close");
        menu.classList.add("menu--active");
        menuList.classList.add("menu__list--active");
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add("menu__item--active");
        }

        active = true;
      } else {
        drawer.classList.remove("drawer-menu--close");
        menu.classList.remove("menu--active");
        menuList.classList.remove("menu__list--active");
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove("menu__item--active");
        }

        active = false;
      }
    };

    var bindActions = function () {
      drawer.addEventListener("click", toggleMenu, false);
    };

    var init = function () {
      bindActions();
    };

    return {
      init: init,
    };
  })();

  Menu.init();
};

function btnTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
