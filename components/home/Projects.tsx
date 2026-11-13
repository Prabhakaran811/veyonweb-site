// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import * as m from "framer-motion/m";
// import { projects } from "@/data/projects";
// import { Item, Reveal, Stagger } from "@/components/ui/Reveal";
// import { ease } from "@/lib/motion";

// export default function Projects() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
//       <Reveal>
//         <h2 className="text-2xl font-bold text-primary sm:text-3xl">Featured Projects</h2>
//       </Reveal>
//       {projects.length === 0 ? (
//         <Reveal className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
//           Project case studies are coming soon.
//         </Reveal>
//       ) : (
//         <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((p) => (
//             <Item key={p.slug}>
//               <Link href={`/projects#${p.slug}`} className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
//                 <m.div
//                   className="relative aspect-[4/3] overflow-hidden"
//                   initial={{ clipPath: "inset(0 0 100% 0)" }}
//                   whileInView={{ clipPath: "inset(0 0 0% 0)" }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.9, ease }}
//                 >
//                   <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
//                 </m.div>
//                 <div className="p-5">
//                   <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{p.industry}</p>
//                   <h3 className="mt-1 text-lg font-semibold text-primary">{p.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
//                 </div>
//               </Link>
//             </Item>
//           ))}
//         </Stagger>
//       )}
//     </section>
//   );
// }