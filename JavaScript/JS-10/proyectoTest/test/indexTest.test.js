//const calculadora = require ("../calculadora");
import { indexTest } from "../calculadora";
test ("test suma", () => {
  const r = indexTest.suma(1,5)
  expect (r).toBe(12)
})

test.todo("test de resta")

test.todo("test de multiplicación")

test.todo("test de división")