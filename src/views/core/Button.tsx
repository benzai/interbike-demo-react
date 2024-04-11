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
  showAccessoryIcon = true,
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
    primary: cx(
      frameless ? "bg-transparent" : "bg-theme-surface-700 group-hover:bg-theme-brand-primary-700 transition"
    ),
    secondary: cx(
      frameless
        ? "bg-transparent"
        : "bg-theme-surface-300 border border-solid border-theme-brand-primary-700 group-hover:bg-theme-brand-primary-700 group-hover:border group-hover:border-solid group-hover:border-theme-surface-500 transition"
    ),
  }

  const textColors = {
    primary: "text-theme-brand-primary-500 group-hover:text-theme-text-alternate-500",
    secondary: "text-theme-text-primary group-hover:text-theme-text-alternate-500",
  }

  const iconColors = {
    primary: "text-theme-brand-primary-700 group-hover:text-theme-text-alternate-300",
    secondary: "text-theme-brand-primary-700 group-hover:text-theme-text-alternate-300",
  }

  return (
    <div className="group">
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
    </div>
  )
}
