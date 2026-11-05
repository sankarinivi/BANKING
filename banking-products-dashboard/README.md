# Banking Products Dashboard

A responsive, single-page banking products dashboard built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React** icons.

## Features

- Unified cards for Savings, Credit Card, Loan, and Wealth products
- Category filter and live text search
- Product status and two key metrics per card
- Expandable product details
- Demo Apply action with an on-screen confirmation
- Responsive layout for mobile, tablet, and desktop
- Product data separated into `src/data.js`

## Requirements

- Node.js 18 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
banking-products-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx       # Dashboard and reusable ProductCard component
    ├── data.js       # Hard-coded mock product data
    ├── index.css     # Tailwind directives and base styles
    └── main.jsx      # React entry point
```

## Design decisions

- `data.js` keeps mock product records separate from presentation.
- `ProductCard` is reusable and receives product data through props.
- `useState` manages the selected category, search term, expanded details, and demo Apply message.
- `useMemo` derives the filtered product list.
- No backend or database is required for this exercise.

## Note

All product names, balances, limits, interest rates, and returns are fictional demonstration data. The Apply button does not submit a real application or connect to a bank.
