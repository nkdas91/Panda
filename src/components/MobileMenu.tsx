import { useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { navbarDropdowns } from "../data/navbar";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  // LOCK BACKGROUND SCROLL WHEN OPEN
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  return (
    <div
      className={`
        fixed inset-0 z-50 lg:hidden
        transition-all duration-300
        ${open ? "visible opacity-100" : "invisible opacity-0"}
      `}
    >
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />

      {/* Sidebar */}
      <div
        className={`
          absolute right-0 top-0 h-full w-[85%] max-w-sm
          bg-white text-neutral-900 shadow-xl
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6 overflow-y-auto h-full pb-30">
          {navbarDropdowns.map((section) => (
            <div key={section.label}>
              <h3 className="text-xs font-semibold uppercase text-accent mb-3">
                {section.label}
              </h3>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start justify-between gap-4 rounded-lg p-3 hover:bg-accent-50"
                  >
                    <div>
                      <div className="font-medium text-sm">{item.label}</div>

                      {item.description && (
                        <div className="text-xs text-neutral-500 mt-1">
                          {item.description}
                        </div>
                      )}
                    </div>

                    <ChevronRight className="size-4 text-neutral-400 mt-1" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
