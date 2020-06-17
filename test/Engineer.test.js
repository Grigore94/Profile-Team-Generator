const Engineer = require("../app/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getStatus() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@.com", "GitHubUser");
  expect(e.getStatus()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});