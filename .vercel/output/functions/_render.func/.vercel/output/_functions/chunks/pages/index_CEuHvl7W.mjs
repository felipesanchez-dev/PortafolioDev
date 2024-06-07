/* empty css                           */
import { e as createComponent, r as renderTemplate, j as renderComponent, h as createAstro, m as maybeRenderHead } from '../astro_BSTRprfL.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_Dgx5V1Qq.mjs';
import { g as getCollection, $ as $$HorizontalCard } from './__DpAZpSXN.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="https://www.linkedin.com/in/felipereyessa/ " target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> <div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> Full Stack Developer </div> </span> </div> </a> <div class="pb-12 mt-5"> <div class="text-xl py-1"> Hey hola👋</div> <div class="text-5xl font-bold">Soy Juan Sánchez</div> <div class="text-2xl py-3 font-bold" style="color: #EAB308;">Ingeniero</div> <div class="py-2"> <text class="text-lg">
Soy ingeniero de software y me apasiona crear soluciones tecnológicas que realmente marquen la diferencia.
        Pronto empezaré a subir videos en Twitch, YouTube y TikTok para compartir mis proyectos y conocimientos
        sobre programación. Mi sueño es convertirme en un creador de contenido especializado en el desarrollo
        de aplicaciones web en Colombia.
<br> <br>
Además de mi pasión por codificar, disfruto enseñando a otros lo que sé. estoy construyendo una plataforma
        de cursos donde ofreceré lecciones de programación para jóvenes y personas interesadas en tecnología.
        Uno de mis proyectos favoritos es una aplicación web que simula las pruebas ICFES de Colombia.
        Esta herramienta permitirá a los estudiantes practicar con simulacros completos, mejorando su preparación
        académica de manera efectiva.
<br> <br> <b>
Soy una persona sociable, alegre y creativa. Gracias a mis habilidades blandas, soy un buen líder de proyecto
        y puedo ponerme en el lugar del cliente para entender sus necesidades y explicar las soluciones de manera clara.
        Esto me ayuda a crear aplicaciones y sitios web más interactivos y accesibles. Trabajo como freelance para empresas,
        fundaciones y negocios, siempre en busca de nuevos desafíos que me permitan mejorar y contribuir con proyectos innovadores.
</b> </text> </div> </div> <div> <div class="text-3xl w-full font-bold mb-2">Mis Proyectos ${"</>"}</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "WEB FUNDACI\xD3N SAN DIMAS", "img": "https://fundacionsandimas.org/_astro/inicio.CS_Uz3Ye_1fDdxh.webp", "desc": "Proteger la biodiversidad y los ecosistemas naturales en Colombia, mediante la educaci\xF3n ambiental, la promoci\xF3n de pr\xE1cticas sostenibles y la restauraci\xF3n ecol\xF3gica para garantizar los bienes y servicios ambientales esenciales para el bienestar humano.", "url": "https://fundacionsandimas.org/", "badge": "Astro, React, tailwindCs, TypeScript" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "CONTROL ENTRADA/SALIDA", "img": "https://raw.githubusercontent.com/felipesanchez-dev/Attendance_Control-Software/master/Img/image3.png", "desc": " El objetivo principal de este programa es optimizar y simplificar el registro de todo el personal mediente sus reportes diarios de entrada y salidas. Cuenta con varios funcionalidades muy utiles e indispensables", "url": "https://github.com/felipesanchez-dev/Attendance_Control-Software.git", "badge": "Php, Html, Css, JavaScript, Boostrap" })}   ` })}`;
}, "C:/Users/juanf/OneDrive/Documents/Portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/juanf/OneDrive/Documents/Portafolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
