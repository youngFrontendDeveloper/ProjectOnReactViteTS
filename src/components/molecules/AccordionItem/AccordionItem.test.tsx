import { describe, expect, test } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import AccordionItem from "./AccordionItem";

describe("Accordion test", () => {
  const item = {
    title: "Test Title",
    content: "Test Content",
    isOpen: false,
  };

  test("renders the title and content correctly", () => {
    render(<AccordionItem item={item} />);

    expect(screen.getByText(item.title)).toBeDefined();
  });

  test("toggles content visibility when clicked", () => {
    render(<AccordionItem item={item} />);

    const content = screen.getByText(item.content);

    expect(content).not.toBeVisible();

    fireEvent.click(screen.getByText(item.title));
    expect(content).toBeVisible();

    fireEvent.click(screen.getByText(item.title));
    expect(content).not.toBeVisible();
  });

  test("applies correct CSS classes based on state", () => {
    render(<AccordionItem item={item} />);

    const headerWrap = screen.getByRole("button", { name: /Open the list/i }).parentElement;
    const content = screen.getByText(item.content);

    expect(content.className).not.toMatch(/open/);

    fireEvent.click(headerWrap!);
    expect(content.className).toMatch(/open/);
  });
});
