import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import ProductsPage from '../pageobjects/productsPage';
import ShoppingCartPage from '../pageobjects/shoppingCartPage';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with user name '(\w+)' and password '(.+)'$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I see title '(.*)' on product page$/, async (text) => {
    await expect(ProductsPage.title).toBeExisting();
    await expect(ProductsPage.title).toHaveTextContaining(text);
});

Then(/^I open item '(.*)' on product page$/, async (text) => {
    await ProductsPage.clickOnItemOnesie();
    await expect(ProductsPage.itemDetailsName).toBeExisting();
    await expect(ProductsPage.itemDetailsName).toHaveTextContaining(text);
});

When(/^I click add to cart button for item '(.*)' on product page$/, async (text) => {
    await ProductsPage.clickOnAddToCartOnesie();
});

Then(/^I see that item count in cart is '(.*)' on product page$/, async (text) => {
    await ProductsPage.clickOnItemOnesie();
    await expect(ProductsPage.shoppingCartLink).toBeExisting();
    await expect(ProductsPage.shoppingCartLink).toHaveTextContaining(text);
});

When(/^I click on shopping cart link button on product page$/, async () => {
    await ProductsPage.clickOnShoppingCart();
});

Then(/^I see added item '(.*)' and title '(.*)' on shopping cart page$/, async (text, title) => {
    await expect(ShoppingCartPage.title).toBeExisting();
    await expect(ShoppingCartPage.title).toHaveTextContaining(title);
    await expect(ShoppingCartPage.inventoryItemName).toHaveTextContaining(text);
});

When(/^I click on remove item 'Sauce Labs Onesie' button on shopping cart page$/, async () => {
    await ShoppingCartPage.clickOnRemoveItemOnesie();
});

Then(/^I see an empty cart on shopping cart page$/, async () => {
    await expect(ShoppingCartPage.cartQuantity).not.toBeExisting();
    await expect(ShoppingCartPage.cartItemLabel).not.toBeExisting();
});
