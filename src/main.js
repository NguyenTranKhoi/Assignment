import Navigo from "navigo";
import Home from "./pages/home";

const router = new Navigo("/", { linksSelector: "a", has: true });

const render = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender();
};

router.on({
    "/": () => render(Home),
});