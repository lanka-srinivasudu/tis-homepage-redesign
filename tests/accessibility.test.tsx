import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Reveal } from "../src/components/animation/Reveal";
import { Header } from "../src/components/layout/Header";
import { official } from "../src/data/site";

describe("Accessible animation and navigation", () => {
  it("keeps offscreen reveal content immediately visible with reduced motion", () => {
    const { container } = render(
      <Reveal>
        <a href="#destination">Readable without an animation</a>
      </Reveal>,
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.opacity).not.toBe("0");
    expect(wrapper.style.transform).not.toContain("translate");
    expect(screen.getByRole("link").textContent).toBe(
      "Readable without an animation",
    );
  });
  it("wraps keyboard focus in both directions and restores the trigger on close", () => {
    render(<Header />);
    const trigger = screen.getByRole("button", {
      name: "Open navigation menu",
    });
    fireEvent.click(trigger);
    const close = screen.getByRole("button", { name: "Close navigation menu" });
    const dialog = screen.getByRole("dialog");
    const phone = dialog.querySelector<HTMLAnchorElement>(".menu-phone")!;
    close.focus();
    fireEvent.keyDown(close, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(phone);
    fireEvent.keyDown(phone, { key: "Tab" });
    expect(document.activeElement).toBe(close);
    fireEvent.click(close);
    expect(document.activeElement).toBe(trigger);
    expect(document.body.style.overflow).toBe("");
  });
  it("closes on native Escape cancellation and updates expanded state", () => {
    render(<Header />);
    const trigger = screen.getByRole("button", {
      name: "Open navigation menu",
    });
    fireEvent.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    fireEvent(
      screen.getByRole("dialog"),
      new Event("cancel", { bubbles: true }),
    );
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(document.body.style.overflow).toBe("");
  });
  it("closes when a section is chosen and directs applications to the official portal", () => {
    render(<Header />);
    fireEvent.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    );
    fireEvent.click(
      screen
        .getByRole("navigation", { name: "Mobile navigation" })
        .querySelector("a")!,
    );
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      screen.getByRole("link", { name: "Apply now" }).getAttribute("href"),
    ).toBe(official.admissions);
  });
});
