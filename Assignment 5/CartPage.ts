import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
  }

  itemTitle(item: string): Locator {
    return this.page.locator("h3").filter({ hasText: item }).first();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}