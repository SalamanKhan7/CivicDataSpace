import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

jest.mock("next/image", () => (props) => {
  return <img {...props} alt={props.alt || "mocked image"} />;
});
jest.mock("next/link", () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the CivicDataSpace logo text", () => {
    expect(screen.getByText("CivicDataSpace")).toBeInTheDocument();
  });

  it("renders the footer links", () => {
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/sitemap/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  it("renders the Follow Us text", () => {
    expect(screen.getByText(/follow us/i)).toBeInTheDocument();
  });
  it("renders the credit section with CivicDataLab logo", () => {
    const image = screen.getAllByAltText(/civic/i);
    expect(image.length).toBeGreaterThanOrEqual(1);
  });
});
