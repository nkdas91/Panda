import { useState } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";

interface DropdownItem {
  label: string;
  href?: string;
  description?: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  isActive?: boolean;
  variant?: "dropdown" | "mega";
}

const Dropdown = ({
  label,
  items,
  isActive,
  variant = "dropdown",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const handlePointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") {
      setOpen(true);
    }
  };

  const handlePointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") {
      setOpen(false);
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    // Desktop uses hover, mobile uses click
    if (window.matchMedia("(pointer: coarse)").matches) {
      event.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative inline-block"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* TRIGGER */}
      <button
        type="button"
        onClick={handleClick}
        className={`flex items-center gap-1 px-2 py-4 rounded-md transition cursor-pointer hover:bg-pink-50/10 ${
          isActive ? "border" : ""
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}

        <ChevronDown
          size={16}
          className={`
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* invisible hover bridge */}
      <div className="absolute left-0 top-full h-3 w-full" />

      {/* DROPDOWN */}
      <div
        className={`
          absolute left-0 top-full mt-2 z-50
          bg-white text-neutral-700 shadow-xl rounded-lg
          transition-all duration-150
          border border-neutral-300

          ${open ? "opacity-100 visible" : "opacity-0 invisible"}

          ${variant === "mega" ? "w-100 p-4 gap-4" : "w-56 p-2"}
        `}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href ?? "#"}
            onClick={() => setOpen(false)}
            className="
              flex items-start gap-4 rounded-md px-3 py-4
              hover:bg-mauve-100 transition
            "
          >
            <span className="p-2 rounded-full border-2 border-neutral-300">
              <LayoutGrid />
            </span>

            <div>
              <div className="font-medium">{item.label}</div>

              {variant === "mega" && item.description && (
                <div className="mt-1">{item.description}</div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
