import { useMemo, useState } from "react";
import {
  Banknote,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CreditCard,
  Landmark,
  Search,
  Wallet,
  X
} from "lucide-react";
import { products } from "./data";

const categories = ["All", "Savings", "Credit Card", "Loan", "Wealth"];

const categoryIcons = {
  Savings: Wallet,
  "Credit Card": CreditCard,
  Loan: Banknote,
  Wealth: ChartNoAxesCombined
};

function ProductCard({ product, onApply }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = categoryIcons[product.category] || BriefcaseBusiness;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="rounded-xl bg-indigo-50 p-3 text-indigo-700">
            <Icon size={22} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate font-semibold text-slate-900">{product.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{product.category}</p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            product.status === "Active"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {product.status}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {product.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">{metric.label}</p>
            <p className="mt-1 break-words font-semibold text-slate-900">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {expanded ? "Hide Details" : "View Details"}
        </button>
        <button
          type="button"
          onClick={() => onApply(product)}
          className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Apply
        </button>
      </div>

      {expanded && (
        <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
          <p className="text-sm font-semibold text-slate-800">Product information</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
          <p className="mt-2 text-xs text-slate-500">Product ID: {product.id}</p>
        </div>
      )}
    </article>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.status.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  function handleApply(product) {
    setNotice(`Demo action: application started for ${product.name}.`);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold tracking-wide text-indigo-700">
              <Landmark size={14} />
              BANKING PORTAL
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Banking Products Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Manage and explore all your financial products in one place.
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center self-start rounded-2xl bg-indigo-600 text-white shadow-sm sm:self-center">
            <Landmark size={28} />
          </div>
        </header>

        <section aria-label="Product summary" className="mb-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total products</p>
            <p className="mt-2 text-3xl font-bold text-slate-950">{products.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Active products</p>
            <p className="mt-2 text-3xl font-bold text-emerald-600">
              {products.filter((product) => product.status === "Active").length}
            </p>
          </div>
        </section>

        <section aria-label="Find products" className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <label htmlFor="product-search" className="mb-2 block text-sm font-semibold text-slate-800">
            Search products
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              id="product-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by product, category or status..."
              className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-10 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {searchTerm && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-slate-800">Filter by category</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Product categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Your products</h2>
          <span className="text-sm text-slate-500">
            {filteredProducts.length} result{filteredProducts.length === 1 ? "" : "s"}
          </span>
        </div>

        {notice && (
          <div role="status" className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {notice}
            <button className="ml-3 font-semibold underline" onClick={() => setNotice("")}>
              Dismiss
            </button>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <section aria-label="Banking products" className="grid gap-5 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onApply={handleApply} />
            ))}
          </section>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <Search className="mx-auto text-slate-400" size={30} />
            <h3 className="mt-3 font-semibold text-slate-900">No products found</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Clear filters
            </button>
          </div>
        )}

        <footer className="mt-10 border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
          Banking Products Dashboard · Demo data only · No real banking transactions
        </footer>
      </div>
    </main>
  );
}
