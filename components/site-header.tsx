import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import Navigation_mobile from "./navigation-mobile"

export function SiteHeader() {
  return (
    <header
      className={`header-container fixed top-0 z-[100]  w-full bg-transparent `}
      style={{ mixBlendMode: "difference", color: "white" }}
    >
      <div className="container flex items-center justify-between space-x-4 sm:space-x-0">
        {/* <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0"> */}
        <MainNav items={siteConfig.mainNav} />
        {/* <div className="flex flex-1 items-center justify-end space-x-4 md:hidden"> */}

        <Navigation_mobile navigation={siteConfig.mainNav} />
        {/* </div> */}
      </div>
    </header>
  )
}
