import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image"; // Import Image

const features = [
  {
    icon: Goal,
    title: "Identificar Oportunidades",
    description:
      "Descubra fácilmente áreas sin explotar para explorar y ampliar su alcance sin esfuerzo.",
    image: "/imagen9.jpeg",
  },
  {
    icon: BookCheck,
    title: "Construir Autoridad",
    description:
      "Cree contenido valioso que resuene, inspire confianza y lo posicione como un experto.",
    image: "/imagen4.jpeg",
  },
  {
    icon: ChartPie,
    title: "Perspectivas Instantáneas",
    description:
      "Obtenga información procesable inmediata con un vistazo rápido, lo que permite una toma de decisiones rápida.",
    image: "/imagen5.jpeg",
  },
  {
    icon: Users,
    title: "Interactúe con su Audiencia",
    description:
      "Aumente la participación de la audiencia con funciones interactivas como encuestas, cuestionarios y formularios.",
    image: "/imagen6.jpeg",
  },
  {
    icon: FolderSync,
    title: "Automatice su Flujo de Trabajo",
    description:
      "Optimice sus procesos automatizando tareas repetitivas, ahorrando tiempo y reduciendo el esfuerzo.",
    image: "/imagen7.jpeg",
  },
  {
    icon: Zap,
    title: "Acelere el Crecimiento",
    description:
      "Potencie su crecimiento implementando estrategias que generen resultados de manera rápida y eficiente.",
    image: "/imagen8.jpeg",
  },
];

const Features05Page = () => {
  return (
    <div id="features" className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">
          Fortalezca su Estrategia
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
          Mejore su estrategia con herramientas inteligentes diseñadas para el éxito.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3! text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="pl-6"> {/* agrega padding a la izquierda */}
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500} // Add appropriate width
                    height={300} // Add appropriate height
                    className="w-full h-40 object-cover rounded-tl-xl"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
