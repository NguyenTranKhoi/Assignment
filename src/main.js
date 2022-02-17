import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import detailProduct from "./pages/detail-product";
import Home from "./pages/home";
import introducePage from "./pages/introduce";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

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
    "/dangky": () => render(Signup),
    "/dangnhap": () => render(Signin),
    "/admin/dashboard": () => render(Dashboard),
    "/admin/news/add": () => render(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => render(AdminEditPost, data.id),
});

router.resolve();