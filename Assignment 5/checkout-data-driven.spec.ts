import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { LoginPage } from "../Assignment 5/LoginPage";
import { DashboardPage } from "../Assignment 5/DashboardPage";
import { CartPage } from "../Assignment 5/CartPage";
import { CheckoutPage } from "../Assignment 5/CheckoutPage";

test.use({
  launchOptions: { slowMo: 1000 },
});


const loginPath = path.join(process.cwd(), "test-data/login-data.json");
const productsPath = path.join(process.cwd(), "test-data/products.json");
const paymentPath = path.join(process.cwd(), "test-data/payment-data.json");

const loginData = JSON.parse(fs.readFileSync(loginPath, "utf-8"));
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
const paymentData = JSON.parse(fs.readFileSync(paymentPath, "utf-8"));

const validUser = loginData.find(
  (user: { validity: string }) => String(user.validity).toLowerCase() === "valid"
);

for (const item of products) {
  for (const { testName, cardNumber, expiryMonth, expiryYear, cvv, nameOnCard, shippingName, countrySearch, country, validity, expectedMessage } of paymentData) {
    test(`checkout ${validity} for ${item} / ${testName}`, async ({ page }, testInfo) => {
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const safeName = `${item}-${testName}`.replace(/\s+/g, "-").toLowerCase();

      await loginPage.goto();
      await loginPage.login(validUser.email, validUser.password);
      await expect(page).toHaveURL(/dashboard/);

      await dashboardPage.addToCart(item);
      await dashboardPage.goToCart();
      await expect(cartPage.itemTitle(item)).toBeVisible();
      await cartPage.checkout();

      await checkoutPage.fillCheckoutInfo(cardNumber, expiryMonth, expiryYear, cvv, nameOnCard, shippingName);
      if (country) {
        await checkoutPage.selectCountry(countrySearch, country);
      }
      await checkoutPage.placeOrder();

      if (String(validity).toLowerCase() === "valid") {
        await expect(checkoutPage.confirmationMessage).toContainText("Thankyou for the order.");
      } else {
        await expect(checkoutPage.message(expectedMessage)).toBeVisible();
        await expect(checkoutPage.confirmationMessage).not.toBeVisible();
      }

      await page.screenshot({
        path: `screenshots/checkout-${validity}-${safeName}-${testInfo.project.name}.png`,
      });
    });
  }
}