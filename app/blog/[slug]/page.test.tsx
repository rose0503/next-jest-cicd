/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  const Resolved = await Page({ params: Promise.resolve({ slug: "Test" }) });

  render(Resolved);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("VietTQ should be in the document", async () => {
  const Resolved = await Page({ params: Promise.resolve({ slug: "Test" }) });

  render(Resolved);
  expect(screen.getByText("VietTQ")).toBeInTheDocument();
});
