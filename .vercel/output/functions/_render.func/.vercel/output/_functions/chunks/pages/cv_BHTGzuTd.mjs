/* empty css                           */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, h as createAstro, j as renderComponent } from '../astro_BSTRprfL.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_Dgx5V1Qq.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "C:/Users/juanf/OneDrive/Documents/Portafolio/src/components/cv/TimeLine.astro", void 0);

const $$Astro = createAstro();
const $$Cv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portafolio web | Juan Sanchez", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">PERFIL PROFESIONAL</div> </div>
Soy Juan Felipe Reyes Sánchez, un estudiante de Ingeniería en Sistemas apasionado por
    la programación y la tecnología. Me encanta jugar ajedrez y fútbol, así como explorar
    el mundo y conocer nuevas culturas. Soy un entusiasta de la arquitectura antigua y un
    ávido lector de historia y filosofía.
<br> <br>
También soy un gran aficionado del espacio y la ciencia astronómica, fascinado por los fenómenos
    universales como los agujeros negros y otros eventos cósmicos.
<br> <br>
Como programador, tengo experiencia con diversas tecnologías, incluyendo React, Angular, y Astro. Además,
    estoy familiarizado con JavaScript, HTML, TypeScript, Node.js, PHP, CSS, entre otras.
    Siempre estoy buscando aprender y desarrollar nuevas habilidades en el mundo de la tecnología.
<br> <br>
Además, tengo un profundo amor por los animales, especialmente los perros, quienes son para mí compañeros
    fieles y queridos. Estoy constantemente en busca de nuevas oportunidades para crecer profesionalmente y
    contribuir con proyectos que tengan un impacto positivo en la sociedad.
<div class="mb-10 text-justify"></div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Educación</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Corporaci\xF3n Unificada Nacional de Educaci\xF3n Superior", "subtitle": "[2023] a [2024]  [Ingenieria en sistemas] , [Ibague] , [Tolima]" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Universidad del Quind\xEDo", "subtitle": "[ 2024]  [Ingenieria en sistemas] , [Armenia] , [Quindio]" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">EXPERIENCIA</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "FUNDACI\xD3N SAN DIMAS", "subtitle": "Desarrollador de Software" }, { "default": ($$result3) => renderTemplate`
Desarrollo y mantenimiento la página web de la Fundación San Dimas, una organización dedicada a la promoción
      del cuidado del medio ambiente y las fuentes hídricas. <br>
Responsable del SEO para mejorar la visibilidad y el posicionamiento en los motores de búsqueda. <br> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "KIURA", "subtitle": "Desarrollador de Software" }, { "default": ($$result3) => renderTemplate`
En Kiura, una empresa de desarrollo de software, nos enfocamos en crear soluciones personalizadas que se centran
    en el éxito de nuestros clientes. Nuestra metodología ágil garantiza resultados de calidad, impulsando el crecimiento
    en el mundo digital. <br>
Como parte del equipo, soy responsable de desarrollar y mantener soluciones de software a medida para nuestros
    clientes, asegurando que cumplan con sus necesidades y objetivos. <br> ` })} <!-- <TimeLineElement
      title="Job Title at Project or Company Name"
      subtitle="From [Start Date] to [End Date] at [Company], [City], [Country]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    </TimeLineElement> --> </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Logros academicos</div> <br>
Ganador del Programathon en la Corporación Unificada Nacional de Educación Superior (CUN),
    un torneo que enfrentó a todas las regionales de la SEDES de la universidad a nivel nacional.
     Este logro destaca mis habilidades en programación y lógica, y me otorga un reconocimiento
      en el ámbito académico de la universidad.
</div>  <div class="mb-5"> <div class="text-3xl w-full font-bold">Habilidades técnicas</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>Pensamiento lógico</li> <li>Manejo de bases de datos SQL</li> <li>TypeScript</li> <li>JavaScript</li> <li>HTML</li> <li>CSS</li> <li>React</li> <li>Angular</li> <li>Node.js</li> <li>Astro</li> <li>tailwindCss</li> <li>Php</li> <li>GitHub</li> <li>Git</li> <li>Visual Studio Code</li> </ul> <br> <br> <div class="mb-5"> <div class="text-3xl w-full font-bold">Habilidades Personales</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-1"> <li>Creatividad</li> <li>Trabajo en equipo</li> <li>Flexibilidad</li> <li>adaptabilidad</li> </ul> ` })}`;
}, "C:/Users/juanf/OneDrive/Documents/Portafolio/src/pages/cv.astro", void 0);

const $$file = "C:/Users/juanf/OneDrive/Documents/Portafolio/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
