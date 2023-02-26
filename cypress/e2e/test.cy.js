it("ナビゲーションメニューを開ける", () => {
  cy.visit("/");
  // 画面上に表示されていないボタンをクリックするためにforceが必要
  cy.get(".nav_open button").click({ force: true });
  cy.get(".navigation .container").should("have.css", "display", "block");
});

it("アンケート：氏名は任意要素", () => {
  cy.visit("/");
  cy.get(".campaign form input[name=name]").should("not.have.attr", "required");
});
