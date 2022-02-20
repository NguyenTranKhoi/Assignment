import footer from "../components/footer";
import header from "../components/header";
import PagePrductNews from "../components/page-prduct-new";

const PageProduct = {
    print() {
        return /* html */ `
            <header>
                ${header.print()}
            </header>
            <main>
                ${PagePrductNews.print()}
            </main>
            <footer>
                ${footer.print()}
            </footer>
        `;
    },
};

export default PageProduct;