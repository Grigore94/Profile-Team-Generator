const Manager = require("../app/Manager");
const Employee = require("../app/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 555;
  const e = new Manager("Foo", 1, "test@.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getStatus() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@.com", 100);
  expect(e.getStatus()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 555;
  const e = new Manager("Foo", 1, "test@.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});