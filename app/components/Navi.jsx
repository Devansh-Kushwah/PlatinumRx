import { FaChevronDown } from "react-icons/fa";

const navItems = [
  "Diabetes Care",
  "Health Conditions",
  "Healthcare Devices",
  "Personal Care",
  "Vitamins & Supplements",
  "Health Resources",
];

export const Navi = () => {
  return (
    <nav className="bg-medical-light-bg border-b border-gray-200 px-4 lg:px-28 hidden lg:block">
      <div className="flex items-center justify-start gap-6 lg:gap-16 py-3 whitespace-nowrap min-w-max">
        {navItems.map((item) => (
          <button
            key={item}
            className="text-foreground hover:text-primary hover:bg-primary/10 text-sm font-medium flex items-center px-3 py-1 rounded"
            type="button"
          >
            {item}
            <FaChevronDown className="ml-1 w-3 h-3" />
          </button>
        ))}
      </div>
    </nav>
  );
};
