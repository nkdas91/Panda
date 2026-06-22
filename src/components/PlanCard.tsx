import Logo from "./Logo";

interface PlanCardProps {
  image: string;
  gradient: [string, string];
  name: string;
  price: string;
  originalPrice?: string;
  billing: string;
  description: string;
  features: string[];
  buttonText?: string;
  popular?: boolean;
  onBuy?: () => void;
}

const PlanCard = ({
  gradient,
  name,
  description,
  features,
  originalPrice,
  price,
  billing,
  buttonText = "Buy Now",
  popular,
  onBuy,
}: PlanCardProps) => {
  return (
    <article
      className={`plan-card relative rounded-2xl border ${popular ? "border-accent" : "border-neutral-200"} bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
    >
      {popular && (
        <span className="absolute right-8 -top-3 rounded-full bg-amber-500 px-3 py-1 text-xs text-black border border-accent">
          Popular
        </span>
      )}

      {/* Hero Image */}
      <div
        style={
          {
            "--gradient-from": gradient[0],
            "--gradient-to": gradient[1],
          } as React.CSSProperties
        }
        className="
          hero-image
          aspect-[2.39/1]
          flex
          items-center
          justify-center
          bg-linear-to-br
          from-(--gradient-from)
          to-(--gradient-to)
          text-white
          rounded-t-2xl
        "
      >
        <Logo size={70} />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Plan Name */}
        <h3 className="text-xl font-semibold text-neutral-900">{name}</h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-neutral-700"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <hr className="mt-4 border-neutral-300" />

        {/* Price */}
        <p className="mt-3 leading-6 text-neutral-600">
          {originalPrice && (
            <span className="mr-2 text-lg text-neutral-400 line-through">
              {originalPrice}
            </span>
          )}
          <span className="text-2xl font-semibold text-neutral-900">
            {price}
          </span>{" "}
          <span>{billing}</span>
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={onBuy}
          className="
            mt-8 w-full rounded-lg
            bg-neutral-900 px-5 py-3
            text-sm font-semibold text-white
            transition hover:bg-neutral-800
          "
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
};

export default PlanCard;
