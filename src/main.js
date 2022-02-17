import Navigo from "navigo";
import detailProduct from "./pages/detail-product";
import Home from "./pages/home";
import introducePage from "./pages/introduce";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => render(Home),
    "/gioithieu": () => render(introducePage),
    "/chitietsanpham/:id": ({ data }) => {
        const { id } = data;
        render(detailProduct, id);
    },
});

router.resolve();