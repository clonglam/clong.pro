import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import MobileMenu from "./MobileMenu"

export function SiteHeader() {
  return (
    <>
      <header
        className={` fixed top-0 z-[60] w-full bg-transparent `}
        style={{ mixBlendMode: "difference", color: "white" }}
      >
        <div className="container flex items-center justify-between space-x-4 sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
        </div>
      </header>
      <MobileMenu />
    </>
  )
}
