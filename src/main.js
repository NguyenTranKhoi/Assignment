import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a", has: true });

const render = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender();
};