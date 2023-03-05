import { test, expect } from "@playwright/test";

test("ナビゲーションメニューを開ける", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /MENU/i }).dispatchEvent("click");
  await expect(page.getByRole("dialog", { name: /MENU/i })).toHaveAttribute(
    "open"
  );
});

test("アンケート：氏名は任意要素", async ({ page }) => {
  await page.goto("/");
  const input = page.getByRole("textbox", { name: /氏名/i });
  await expect(input).not.toHaveAttribute("required");
});
