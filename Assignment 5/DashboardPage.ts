import { Page, Locator } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly products: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.cartButton = page.locator("[routerlink*='cart']");
  }

  async addToCart(item: string) {
    await this.products
      .filter({ hasText: item })
      .getByRole("button", { name: "Add To Cart" })
      .click();
  }

  async goToCart() {
    await this.cartButton.click();
  }
}
