import { Check, X } from "lucide-react";
import type { Plan } from "../types/plan";

interface PlanTableProps {
  plans: Plan[];
}

const PlanTable = ({ plans }: PlanTableProps) => {
  // Extract all unique features from all plans
  const features = Array.from(new Set(plans.flatMap((plan) => plan.features)));

  // Plans inherit features from previous tiers
  const getPlanFeatures = (index: number) => {
    return new Set(
      plans
        .slice(0, index + 1)
        .flatMap((previousPlan) => previousPlan.features),
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {/* Feature column */}
              <th
                className="
                  sticky left-0 z-20
                  min-w-64
                  bg-white
                  px-6 py-5
                  text-left
                  font-semibold
                  text-neutral-900
                "
              >
                Features
              </th>

              {/* Plan columns */}
              {plans.map((plan) => (
                <th
                  key={plan.id}
                  className={`
                    relative
                    min-w-48
                    px-6 py-5
                    text-center
                    ${
                      plan.popular
                        ? "rounded-t-2xl border-x-2 border-t-2 border-accent bg-indigo-50"
                        : ""
                    }
                  `}
                >
                  <div className="font-semibold text-neutral-900">
                    {plan.name}
                  </div>

                  <div className="mt-2 text-lg font-bold">{plan.price}</div>

                  {plan.popular && (
                    <span
                      className="
                        mt-2 inline-block
                        rounded-full
                        bg-accent
                        px-3 py-1
                        text-xs
                        font-medium
                        text-white
                      "
                    >
                      Popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((feature, featureIndex) => (
              <tr
                key={feature}
                className={`
                  ${featureIndex % 2 === 0 ? "bg-white" : "bg-primary-50"}
                `}
              >
                {/* Feature name */}
                <td
                  className="
                    sticky left-0 z-10
                    bg-inherit
                    px-6 py-5
                    font-medium
                    text-neutral-700
                  "
                >
                  {feature}
                </td>

                {/* Availability */}
                {plans.map((plan, planIndex) => {
                  const available = getPlanFeatures(planIndex).has(feature);

                  return (
                    <td
                      key={plan.id}
                      className={`
                        px-6 py-5
                        text-center

                        ${
                          plan.popular
                            ? `border-x-2 border-accent bg-indigo-50/50
                              ${
                                featureIndex === features.length - 1
                                  ? "border-b-2 rounded-b-2xl"
                                  : ""
                              }`
                            : ""
                        }
                      `}
                    >
                      {available ? (
                        <Check className="mx-auto h-5 w-5 text-green-600" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-neutral-300" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PlanTable;
