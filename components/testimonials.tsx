import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "César Manuel Chapilliquen Pedrera",
    designation: "Padre de familia",
    testimonial:
      "La institución Ann Goulden brinda un ambiente seguro y estimulante. Estoy muy satisfecho con el progreso de mi hijo.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Katherin Nicol Fuentes Colán",
    designation: "Madre de familia",
    testimonial:
      "Excelente trato de los docentes, comprometidos con el aprendizaje y la formación integral de los niños.",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 3,
    name: "Edwin Jair Gonzales Gutierrez",
    designation: "Exalumno",
    testimonial:
      "Gracias a la educación recibida en Ann Goulden, desarrollé una base sólida que me ayuda hasta hoy.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Diego Daniel Pacherrez Jara",
    designation: "Padre de familia",
    testimonial:
      "Los valores que se inculcan en la institución son un pilar fundamental para la formación de nuestros hijos.",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 5,
    name: "Luis Francisco La Rosa Perez",
    designation: "Docente",
    testimonial:
      "Me siento orgulloso de pertenecer a esta institución y aportar al crecimiento de los estudiantes.",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 6,
    name: "Deny Alexander Esquerre Panta",
    designation: "Exalumno",
    testimonial:
      "Una experiencia educativa inolvidable. Aquí aprendí no solo conocimientos, sino también valores para la vida.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Testimonios
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
