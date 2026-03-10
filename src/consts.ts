import type { IconMap, SocialLink, Site } from "@/types"

export const SITE: Site = {
  title: "asyncg",
  description: "Avijeet's Blog Site",
  href: "https://asyncg.vercel.app",
  author: "asyncg",
  locale: "en-US",
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: "/about",
    label: "about",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/asyncg",
    label: "GitHub",
  },
  {
    href: "mailto:singhavijeet.official@gmail.com",
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/asyncg",
    label: "LinkedIn",
  },
]

export const ICON_MAP: IconMap = {
  Website: "lucide:globe",
  GitHub: "lucide:github",
  LinkedIn: "lucide:linkedin",
  Email: "lucide:mail",
}
