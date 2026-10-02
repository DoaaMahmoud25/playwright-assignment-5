import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { LoginPage } from "./LoginPage";

const jsonPath = path.join(process.cwd(), "test-data/login-data.json");
const loginData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
const paymentPath = path.join(process.cwd(), "test-data/payment-data.json");


for (const [index, { testName, email, password, validity, expectedMessage }] of loginData.entries()){
  test(`login scenario ${index + 1}: ${testName}`, async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(email, password);

    if (String(validity).toLowerCase() === "valid") {
      await expect(page).toHaveURL(/dashboard/);
    } else {
      await expect(loginPage.message(expectedMessage)).toBeVisible();
    }

    await page.screenshot({
      path: `screenshots/login-${index + 1}-${validity}-${testInfo.project.name}.png`,
    });
  });
}