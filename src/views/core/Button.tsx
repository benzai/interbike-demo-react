import cx from "classnames"
import Link from "next/link"
import Icon from "@/views/core/Icon"

type Props = {
  type?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  to: string
  title: string
  flexible?: boolean
  showAccessoryIcon?: boolean
  frameless?: boolean
}

export default function Button({
  type = "primary",
  size = "sm",
  to,
  title,
  flexible = false,
  showAccessoryIcon = false,
  frameless = false,
}: Props) {
  const fontSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-md",
  }

  const frameSizePaddings = {
    sm: "px-2",
    md: "px-3",
    lg: "px-3",
  }

  const frameHeights = {
    sm: "h-8",
    md: "h-9",
    lg: "h-10",
  }

  const frameColors = {
    primary: cx(frameless ? "bg-transparent" : "bg-theme-surface-700 hover:opacity-80 transition"),
    secondary: cx(
      frameless
        ? "bg-transparent"
        : "bg-theme-surface-300 border-solid border border-theme-brand-primary-700 hover:opacity-80 transition"
    ),
  }

  const textColors = {
    primary: "text-theme-brand-primary-500",
    secondary: "text-theme-text-primary",
  }

  const iconColors = {
    primary: "text-theme-brand-primary-700",
    secondary: "text-theme-brand-primary-700",
  }

  return (
    <Link
      className={cx(
        "block rounded-none",
        flexible ? "w-full" : "w-auto",
        frameSizePaddings[size],
        frameHeights[size],
        frameColors[type]
      )}
      href={to}>
      <div className="flex justify-center items-center gap-1 h-full">
        <span className={cx(fontSizes[size], textColors[type])}>{title}</span>
        {showAccessoryIcon && <Icon iconName="arrowRight" styleOverride={iconColors[type]} />}
      </div>
    </Link>
  )
}
