import "./App.css";
import FloatingHelpButton from "./components/FloatingHelpWidget";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PlanCard from "./components/PlanCard";
import PlanTable from "./components/PlanTable";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { plans } from "./data/plans";

function App() {
  return (
    <>
      <div className="fixed z-50 w-full">
        <Navbar />
        <ScrollProgressBar />
      </div>

      <main className="pt-24">
        {/* HERO / PRICING CARDS */}
        <section className="mx-auto max-w-7xl px-6 py-16 mb-16">
          <div className="text-center mb-16">
            <p className="uppercase text-accent mb-3 tracking-wide">
              Everything you need for automated content growth
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">
              Panda Pricing Plans
            </h3>

            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Panda helps you generate SEO-optimized blog posts, automate
              WordPress publishing, and scale content production without writing
              everything manually. Choose a plan that fits your growth stage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                image={plan.image}
                gradient={plan.gradient}
                name={plan.name}
                price={plan.price}
                originalPrice={plan.originalPrice}
                billing={plan.billing}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
                onBuy={() => {
                  console.log(`Buying ${plan.name}`);
                }}
              />
            ))}
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-16 border-t border-neutral-200">
          <div className="text-center mb-12">
            <p className="uppercase text-accent mb-3 tracking-wide">
              Compare plans easily
            </p>

            <h3 className="text-3xl font-semibold mb-4 text-neutral-900">
              Choose the right Panda plan
            </h3>

            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Compare features across all Panda plans and find the perfect fit
              for your blogging workflow, SEO strategy, and automation needs.
            </p>
          </div>

          <PlanTable plans={plans} />
        </section>

        <FloatingHelpButton />
      </main>

      <Footer />
    </>
  );
}

export default App;
