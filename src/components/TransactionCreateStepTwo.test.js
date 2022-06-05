import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("Disabled initial pay button", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
