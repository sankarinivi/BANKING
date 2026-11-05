// Mock product data is kept separate from the UI.
export const products = [
  {
    id: "BANK-001",
    name: "Smart Savings Account",
    category: "Savings",
    status: "Active",
    metrics: [
      { label: "Interest rate", value: "4.00% p.a." },
      { label: "Available balance", value: "₹1,25,000" }
    ],
    description:
      "A flexible savings account with competitive interest and convenient access to funds."
  },
  {
    id: "BANK-002",
    name: "Platinum Credit Card",
    category: "Credit Card",
    status: "Active",
    metrics: [
      { label: "Credit limit", value: "₹2,00,000" },
      { label: "Available limit", value: "₹45,000" }
    ],
    description:
      "A premium credit card with rewards, offers and flexible repayment options."
  },
  {
    id: "BANK-003",
    name: "Personal Loan",
    category: "Loan",
    status: "Under Review",
    metrics: [
      { label: "Interest rate", value: "10.5% p.a." },
      { label: "Loan amount", value: "₹5,00,000" }
    ],
    description:
      "An unsecured personal loan with flexible repayment options. Application is under review."
  },
  {
    id: "BANK-004",
    name: "Wealth Growth Plan",
    category: "Wealth",
    status: "Active",
    metrics: [
      { label: "Invested value", value: "₹3,50,000" },
      { label: "Illustrative return", value: "+8.2%" }
    ],
    description:
      "An investment portfolio designed to support long-term wealth creation. Returns are illustrative and not guaranteed."
  }
];
