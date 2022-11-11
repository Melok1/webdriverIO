

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () {
        return $('.title');
    }

    get inventoryItemName () {
        return $('.inventory_item_name');
    }

    get removeItemOnesieBtn () {
        return $('#remove-sauce-labs-onesie');
    }

    get cartQuantity () {
        return $('.cart_quantity');
    }

    get cartItemLabel () {
        return $('.cart_item_label');
    }

    async clickOnRemoveItemOnesie () {
        await this.removeItemOnesieBtn.click();
    }
}

export default new ShoppingCartPage();
