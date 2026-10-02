# 🎭 Assignment 5 – Playwright Data-Driven Testing

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

End-to-end test automation project built with **Playwright** and **TypeScript**, demonstrating data-driven testing with the **Page Object Model (POM)** design pattern.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Test Data](#-test-data)
- [Getting Started](#-getting-started)
- [Test Results](#-test-results)

---

## 📖 Overview

This project implements data-driven tests for login and checkout flows. The same test logic runs against multiple datasets stored in JSON files, covering both valid and invalid scenarios.

## ✨ Features

- ✅ Page Object Model (POM) architecture
- ✅ Data-driven login testing
- ✅ Data-driven checkout testing
- ✅ Valid and invalid test scenarios
- ✅ Screenshots captured for each test result
- ✅ Test data separated from test logic (JSON files)

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | Browser automation & test runner |
| TypeScript | Test scripting language |
| Node.js | Runtime environment |
| JSON | Test data storage |

## 📂 Project Structure

```text
Assignment 5/
├── CartPage.ts                        # Cart page object
├── CheckoutPage.ts                    # Checkout page object
├── DashboardPage.ts                   # Dashboard page object
├── LoginPage.ts                       # Login page object
├── checkout-data-driven.spec.ts       # Checkout data-driven tests
├── login-data-driven.spec.ts          # Login data-driven tests
├── test-data/
│   ├── login-data.json                # Login scenarios
│   ├── payment-data.json              # Payment & checkout data
│   └── products.json                  # Product data
└── screenshots/
    ├── checkout-invalid-*.png
    ├── checkout-valid-*.png
    ├── login-*-firefox.png
    └── playwright-test-report.png
```

## 🗂 Test Data

| File | Description |
|------|-------------|
| `login-data.json` | Login test scenarios (valid & invalid credentials) |
| `payment-data.json` | Payment and checkout data |
| `products.json` | Product test data |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
npm install
npx playwright install
```

### Run the Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test login-data-driven.spec.ts
npx playwright test checkout-data-driven.spec.ts

# Open the HTML report
npx playwright show-report
```

## 📸 Test Results

### 🔐 Login Tests

| Scenario | Result |
|----------|--------|
| Test 1 – Valid Login | ![Valid Login](screenshots/login-1-valid-firefox.png) |
| Test 2 – Invalid Login | ![Invalid Login 2](screenshots/login-2-invalid-firefox.png) |
| Test 3 – Invalid Login | ![Invalid Login 3](screenshots/login-3-invalid-firefox.png) |
| Test 4 – Invalid Login | ![Invalid Login 4](screenshots/login-4-invalid-firefox.png) |

### 🛒 Checkout Tests

#### ❌ Invalid Checkout (Missing Country)

| Adidas Original | iPhone 13 Pro | Zara Coat 3 |
|:---:|:---:|:---:|
| ![Adidas](screenshots/checkout-invalid-adidas-original-missing-country-chromium.png) | ![iPhone](screenshots/checkout-invalid-iphone-13-pro-missing-country-chromium.png) | ![Zara](screenshots/checkout-invalid-zara-coat-3-missing-country-chromium.png) |

#### ✅ Valid Checkout

| Adidas Original | iPhone 13 Pro | Zara Coat 3 |
|:---:|:---:|:---:|
| ![Adidas](screenshots/checkout-valid-adidas-original-valid-payment-chromium.png) | ![iPhone](screenshots/checkout-valid-iphone-13-pro-valid-payment-chromium.png) | ![Zara](screenshots/checkout-valid-zara-coat-3-valid-payment-chromium.png) |

### 📊 Playwright Test Report

![Playwright Test Report](screenshots/playwright-test-report.png)
