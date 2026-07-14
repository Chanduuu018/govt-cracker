import Section from "../ui/Section";
import Card from "../ui/Card";
import { features } from "../../constants/features";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <Section>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <Card>
        <div className="text-5xl">{feature.icon}</div>

        <h3 className="mt-5 text-2xl font-semibold text-white">
          {feature.title}
        </h3>

        <p className="mt-3 text-slate-400">
          {feature.description}
        </p>
      </Card>
    </motion.div>
  ))}
</div>
    </Section>
  );
};

export default Features;