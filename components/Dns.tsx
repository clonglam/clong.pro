import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

export function Dns({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div {...props}>
      {/* {icon && <span className="mr-4 text-2xl">{icon}</span>} */}
      <p className="py-2 text-xs">{children}</p>
    </div>
  )
}
