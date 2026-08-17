export interface Tool {
  label: string;
  img: string;
}

/**
 * Central registry of tools that can be attached to a project via `tools: ["figma", ...]`.
 * Icons are reused from the softwares assets. Extend here (e.g. dev tools) when new icons land.
 */
const tools: Record<string, Tool> = {
  figma: { label: "Figma", img: "/images/softwares/ui_ux/figma.webp" },
  sketch: { label: "Sketch", img: "/images/softwares/ui_ux/sketch.webp" },
  xd: { label: "Adobe XD", img: "/images/softwares/ui_ux/xd.webp" },
  photoshop: { label: "Photoshop", img: "/images/softwares/graphic_design/ps.webp" },
  illustrator: { label: "Illustrator", img: "/images/softwares/graphic_design/ai.webp" },
  indesign: { label: "InDesign", img: "/images/softwares/graphic_design/id.webp" },
  affinity: { label: "Affinity", img: "/images/softwares/graphic_design/affinity.webp" },
};

export function resolveTools(ids?: unknown): Tool[] {
  if (!Array.isArray(ids)) return [];
  return ids
    .map((id) => (typeof id === "string" ? tools[id] : undefined))
    .filter((t): t is Tool => Boolean(t));
}

export default tools;
