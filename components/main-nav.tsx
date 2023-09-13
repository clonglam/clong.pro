"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { SettingContextType, SettingsContext } from "./CustomProvider"
import Navigation_mobile from "./navigation-mobile"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { isOpen, toggleMenu } = React.useContext(
    SettingsContext
  ) as SettingContextType

  return (
    <div
      className="relative flex w-full justify-between gap-6 md:gap-10"
      style={{ mixBlendMode: "difference", color: "white" }}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      {items?.length ? (
        <nav className="hidden gap-6 self-end  md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <Navigation_mobile navigation={siteConfig.mainNav} />
    </div>
  )
}
