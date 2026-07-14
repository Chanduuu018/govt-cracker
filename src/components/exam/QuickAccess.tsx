import QuickAccessCard from "./QuickAccessCard";
import { quickAccess } from "../../constants/quickAccess";

const QuickAccess = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-white">
        Quick Access
      </h2>

      <p className="mt-2 text-slate-400">
        Jump directly to your study resources.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quickAccess.map((item) => (
          <QuickAccessCard
  key={item.title}
  icon={item.icon}
  title={item.title}
  subtitle={item.subtitle}
  route={item.route}
/>
        ))}
      </div>
    </section>
  );
};

export default QuickAccess;