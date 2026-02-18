import { IntroBlock } from "@/components/sections/intro-block";
import { RobotGrid } from "@/components/commerce/robot-grid";

export default function RobotsPage() {
  return (
    <>
      <IntroBlock
        title="Robots"
        subtitle="Cinq robots disponibles à l’unité, avec profils de risque et paramètres distincts."
      />
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <RobotGrid />
      </section>
    </>
  );
}
