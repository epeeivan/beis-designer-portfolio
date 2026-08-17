export type Discipline = "ui_ux" | "branding";

export type ProjectType =
  | "mobile"
  | "web"
  | "admin"
  | "landing"
  | "design_system"
  | "logo"
  | "catalog";

export interface ProjectBadge {
  icon?: string;
  text?: string;
  type?: string;
  to?: string;
}

export interface Project {
  slug: string;
  title: string; // i18n key
  subTitle?: string; // i18n key
  description?: string; // i18n key
  logo?: string;
  cover?: string;
  img?: string; // logo-on-gradient variant (no cover)
  bg?: string;
  mid_bg?: string;
  views?: string[];
  tools?: string[];
  disciplines: Discipline[];
  types?: ProjectType[];
  badges?: ProjectBadge[];
}

const figmaOwner: ProjectBadge = { icon: "FileX", text: "labels.figma_owner" };

const projects: Project[] = [
  // ---------- Complete products (UI/UX, some also Branding) ----------
  {
    slug: "tchaza",
    title: "achievements.tchaza.title",
    subTitle: "achievements.tchaza.subtitle",
    description: "achievements.tchaza.description",
    logo: "projects/tchaza/logo.webp",
    cover: "projects/tchaza/cover.webp",
    views: [
      "projects/tchaza/1.webp",
      "projects/tchaza/5.webp",
      "projects/tchaza/6.webp",
      "projects/tchaza/7.webp",
      "projects/tchaza/8.webp",
      "projects/tchaza/9.webp",
      "projects/tchaza/10.webp",
      "projects/tchaza/11.webp",
    ],
    tools: ["figma", "illustrator", "photoshop"],
    disciplines: ["ui_ux", "branding"],
    types: ["mobile", "web", "landing", "design_system", "logo"],
    badges: [figmaOwner],
  },
  {
    slug: "bewallet",
    title: "achievements.bewallet.title",
    subTitle: "achievements.bewallet.subtitle",
    description: "achievements.bewallet.description",
    logo: "projects/bewallet/logo.webp",
    cover: "projects/bewallet/ui_ux/landing/cover.webp",
    views: [
      "projects/bewallet/ui_ux/mobile/cover.webp",
      "projects/bewallet/ui_ux/admin/cover.webp",
      "projects/bewallet/ui_ux/client/cover.webp",
      "projects/be_refill/ui_ux/admin/cover.webp",
      "projects/bewallet/ui_ux/design_system/cover.webp",
    ],
    tools: ["xd", "figma"],
    disciplines: ["ui_ux"],
    types: ["mobile", "web", "admin", "landing", "design_system"],
    badges: [figmaOwner],
  },
  {
    slug: "mesagoo",
    title: "achievements.mesagoo.title",
    subTitle: "achievements.mesagoo.subtitle",
    description: "achievements.mesagoo.description",
    logo: "projects/mesagoo/logo.webp",
    cover: "projects/mesagoo/ui_ux/landing/cover.webp",
    views: [
      "projects/mesagoo/ui_ux/mobile/cover.webp",
      "projects/mesagoo/ui_ux/admin/cover.webp",
      "projects/mesagoo/ui_ux/client/cover.webp",
      "projects/mesagoo/ui_ux/design_system/cover.webp",
    ],
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["mobile", "web", "admin", "landing", "design_system"],
    badges: [figmaOwner],
  },
  {
    slug: "cocoonin",
    title: "achievements.cocoonin.title",
    subTitle: "achievements.cocoonin.subtitle",
    description: "achievements.cocoonin.description",
    logo: "projects/cocoonin/logo.webp",
    cover: "projects/cocoonin/ui_ux/landing/cover.webp",
    views: [
      "projects/cocoonin/ui_ux/mobile/cover.webp",
      "projects/cocoonin/ui_ux/admin/cover.webp",
      "projects/cocoonin/ui_ux/design_system/cover.webp",
      "projects/cocoonin/graphic/brand_identity/cover.webp",
    ],
    tools: ["figma", "illustrator", "photoshop"],
    disciplines: ["ui_ux", "branding"],
    types: ["mobile", "admin", "landing", "design_system", "logo"],
    badges: [figmaOwner],
  },

  // ---------- Single-artifact UI/UX ----------
  {
    slug: "empire_drive",
    title: "achievements.empire_drive.title",
    subTitle: "achievements.empire_drive.subtitle",
    description: "achievements.empire_drive.description",
    logo: "projects/empire_drive/logo.webp",
    cover: "projects/empire_drive/ui_ux/admin/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["admin"],
    badges: [figmaOwner],
  },
  {
    slug: "betmomo",
    title: "achievements.betmomo.title",
    subTitle: "achievements.betmomo.subtitle",
    description: "achievements.betmomo.description",
    logo: "projects/betfest/logo.webp",
    cover: "projects/betfest/ui_ux/landing/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["landing"],
    badges: [figmaOwner],
  },
  {
    slug: "portfolio",
    title: "achievements.portfolio.title",
    subTitle: "achievements.portfolio.subtitle",
    description: "achievements.portfolio.description",
    logo: "projects/portfolio/logo.webp",
    cover: "projects/portfolio/ui_ux/landing/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["landing"],
    badges: [
      {
        icon: "ExternalLink",
        text: "labels.see_website",
        to: "https://beis-designer-portfolio.onrender.com",
      },
      {
        icon: "Figma",
        type: "yellow",
        text: "labels.open_figma",
        to: "https://www.figma.com/design/ZlXRNEbvOyFbYk53nSVLBM/designer-portfolio?node-id=277-2732&t=kjt1ZjgBis6tKUmW-0",
      },
    ],
  },
  {
    slug: "global_wine",
    title: "achievements.global_wine.title",
    subTitle: "achievements.global_wine.subtitle",
    description: "achievements.global_wine.description",
    logo: "projects/global_wine/logo.webp",
    cover: "projects/global_wine/ui_ux/landing/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["landing"],
    badges: [figmaOwner],
  },
  {
    slug: "softsec_website",
    title: "achievements.softsec_website.title",
    subTitle: "achievements.softsec_website.subtitle",
    description: "achievements.softsec_website.description",
    logo: "projects/softsec_website/logo.webp",
    cover: "projects/softsec_website/ui_ux/landing/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["landing"],
    badges: [figmaOwner],
  },
  {
    slug: "rapid_services",
    title: "achievements.rapid_services.title",
    subTitle: "achievements.rapid_services.subtitle",
    description: "achievements.rapid_services.description",
    logo: "projects/rapid_services/logo.webp",
    cover: "projects/rapid_services/ui_ux/landing/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["landing"],
    badges: [figmaOwner],
  },
  {
    slug: "tatami_games",
    title: "achievements.tatami_games.title",
    subTitle: "achievements.tatami_games.subtitle",
    description: "achievements.tatami_games.description",
    logo: "projects/tatami_games/logo.webp",
    cover: "projects/tatami_games/ui_ux/landing/cover.webp",
    tools: ["figma"],
    disciplines: ["ui_ux"],
    types: ["landing"],
    badges: [figmaOwner],
  },

  // ---------- Branding ----------
  {
    slug: "ahafreight",
    title: "achievements.ahafreight.title",
    subTitle: "achievements.ahafreight.subtitle",
    cover: "projects/ahafreight/graphic/catalogs/cover.webp",
    views: ["projects/ahafreight/graphic/logo/cover.webp"],
    tools: ["illustrator", "indesign"],
    disciplines: ["branding"],
    types: ["logo", "catalog"],
  },
  {
    slug: "apibundle",
    title: "achievements.apibundle.title",
    subTitle: "achievements.apibundle.subtitle",
    img: "projects/apibundle/graphic/logo/cover.webp",
    bg: "#F1895C",
    mid_bg: "#874024",
    tools: ["illustrator"],
    disciplines: ["branding"],
    types: ["logo"],
  },
  {
    slug: "vitteck",
    title: "achievements.vitteck_logo.title",
    subTitle: "achievements.vitteck_logo.subtitle",
    img: "projects/vitteck/graphic/logo/cover.webp",
    bg: "#62A279",
    mid_bg: "#b5dfc4",
    tools: ["illustrator"],
    disciplines: ["branding"],
    types: ["logo"],
  },
  {
    slug: "237coachs",
    title: "achievements.237coachs_logo.title",
    subTitle: "achievements.237coachs_logo.subtitle",
    description: "achievements.237coachs.description",
    img: "projects/237coachs/graphic/logo/cover.webp",
    bg: "#000",
    mid_bg: "#484848",
    tools: ["illustrator"],
    disciplines: ["branding"],
    types: ["logo"],
  },
  {
    slug: "concord",
    title: "achievements.concord_brochure.title",
    subTitle: "achievements.concord_brochure.subtitle",
    cover: "projects/concord/graphic/catalogs/cover.webp",
    tools: ["indesign"],
    disciplines: ["branding"],
    types: ["catalog"],
  },
  {
    slug: "fireshield",
    title: "achievements.fireshield_formation_catalog.title",
    subTitle: "achievements.fireshield_formation_catalog.subtitle",
    cover: "projects/fireshield/graphic/catalogs/cover.webp",
    tools: ["indesign"],
    disciplines: ["branding"],
    types: ["catalog"],
  },
];

export default projects;
