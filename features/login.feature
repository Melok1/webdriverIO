Feature: Shopping cart

Scenario: Login with user 'problem_user'
    Given I am on the login page
    When I login with user name 'problem_user' and password 'secret_sauce'
    Then I see title 'PRODUCTS' on product page

Scenario: Remove item from shopping cart
    Given I am on the login page
    And I login with user name 'standard_user' and password 'secret_sauce'
    And I click add to cart button for item 'Sauce Labs Onesie' on product page
    And I click on shopping cart link button on product page
    When I click on remove item 'Sauce Labs Onesie' button on shopping cart page
    Then I see an empty cart on shopping cart page  

Scenario: Open item named Sauce Labs Onesie
    Given I am on the login page
    When I login with user name 'standard_user' and password 'secret_sauce'
    Then I open item 'Sauce Labs Onesie' on product page

Scenario: Add to cart - Item count should increase in cart
    Given I am on the login page
    And I login with user name 'standard_user' and password 'secret_sauce'
    When I click add to cart button for item 'Sauce Labs Onesie' on product page
    Then I see that item count in cart is '1' on product page

Scenario: Go to cart and verify item is added
    Given I am on the login page
    And I login with user name 'problem_user' and password 'secret_sauce'
    When I click add to cart button for item 'Sauce Labs Onesie' on product page
    And I click on shopping cart link button on product page
    Then I see added item 'Sauce Labs Onesie' and title 'YOUR CART' on shopping cart page