/* empty css                           */
import { e as createComponent, r as renderTemplate, j as renderComponent, h as createAstro, m as maybeRenderHead } from '../astro_BSTRprfL.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_Dgx5V1Qq.mjs';
import { $ as $$HorizontalCard } from './__DpAZpSXN.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portafolio web | Juan Sanchez", "sideBarActiveItemID": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Web Site</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "WEB FUNDACI\xD3N SAN DIMAS", "img": "https://fundacionsandimas.org/_astro/inicio.CS_Uz3Ye_1fDdxh.webp", "desc": "Proteger la biodiversidad y los ecosistemas naturales en Colombia, mediante la educaci\xF3n ambiental, la promoci\xF3n de pr\xE1cticas sostenibles y la restauraci\xF3n ecol\xF3gica para garantizar los bienes y servicios ambientales esenciales para el bienestar humano.", "url": "https://fundacionsandimas.org/", "badge": "Astro, React, tailwindCs, TypeScript" })}  <div> <div class="text-3xl w-full font-bold mb-5 mt-10">Aplicaciones Web Funcionales</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "CONTROL ENTRADA/SALIDA", "img": "https://raw.githubusercontent.com/felipesanchez-dev/Attendance_Control-Software/master/Img/image3.png", "desc": " El objetivo principal de este programa es optimizar y simplificar el registro de todo el personal mediente sus reportes diarios de entrada y salidas. Cuenta con varios funcionalidades muy utiles e indispensables", "url": "https://github.com/felipesanchez-dev/Attendance_Control-Software.git", "badge": "Php, Html, Css, JavaScript, Boostrap" })}  ` })}`;
}, "C:/Users/juanf/OneDrive/Documents/Portafolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/juanf/OneDrive/Documents/Portafolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
