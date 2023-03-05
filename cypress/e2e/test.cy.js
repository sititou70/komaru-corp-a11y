it("ナビゲーションメニューを開ける", () => {
  cy.visit("/");
  // 画面上に表示されていないボタンをクリックするためにforceが必要
  cy.findByRole("button", { name: /MENU/i }).click({ force: true });
  cy.findByRole("dialog", { name: /MENU/i }).should("have.attr", "open");
});

it("アンケート：氏名は任意要素", () => {
  cy.visit("/");
  cy.findByRole("textbox", { name: /氏名/i }).should(
    "not.have.attr",
    "required"
  );
});
