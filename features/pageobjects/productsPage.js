

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () {
        return $('.title');
    }

    get itemDetailsName () {
        return $('.inventory_details_name');
    }

    get itemSauceLabsOnesie () {
        return $('#item_2_title_link');
    }

    get addToCartSauceLabsOnesieBtn () {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get shoppingCartLink () {
        return $('.shopping_cart_link');
    }

    async clickOnItemOnesie () {
        await this.itemSauceLabsOnesie.click();
    }

    async clickOnAddToCartOnesie () {
        await this.addToCartSauceLabsOnesieBtn.click();
    }

    async clickOnShoppingCart () {
        await this.shoppingCartLink.click();
    }
}

export default new ProductsPage();
