import { test, expect } from "@playwright/test";

test("ナビゲーションメニューを開ける", async ({ page }) => {
  await page.goto("/");
  await page.locator(".nav_open button").dispatchEvent("click");
  await expect(page.locator(".navigation .container")).toHaveCSS(
    "display",
    "block"
  );
});

test("アンケート：氏名は任意要素", async ({ page }) => {
  await page.goto("/");
  const input = page.locator(".campaign form input[name=name]");
  await expect(input).not.toHaveAttribute("required");
});
