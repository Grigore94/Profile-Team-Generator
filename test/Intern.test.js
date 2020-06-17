const Intern = require("../app/Intern");

test("Can set school via constructor", () => {
  const testValue = "Softare";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getStatus() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@.com", "UCLA");
  expect(e.getStatus()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Sofware";
  const e = new Intern("Foo", 1, "test@.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});