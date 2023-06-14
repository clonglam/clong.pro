import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import Navigation_mobile from "./navigation-mobile"

export function SiteHeader() {
  return (
    <header
      className={`header-container sticky top-0 z-40 w-full border-b
      bg-background`}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Navigation_mobile navigation={siteConfig.mainNav} />
        </div>
      </div>
    </header>
  )
}
