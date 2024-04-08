import cx from "classnames"
import Link from "next/link"
import Icon from "@/views/core/Icon"
import type { ILineIcon } from "@/constants/types"

type Props = {
  type?: "primary" | "secondary" | "tertiaire"
  size?: "sm" | "md"
  to: string
  iconName: ILineIcon
}

export default function IconButton({ type = "primary", size = "sm", to, iconName }: Props) {
  const frameSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
  }

  const frameColors = {
    primary: "bg-theme-surface-900 group-hover:opacity-80 transition",
    secondary: "bg-theme-brand-primary-500 group-hover:opacity-80 transition",
    tertiaire: "bg-none group-hover:bg-theme-brand-primary-700 transition",
  }

  const iconColors = {
    primary: "text-theme-text-alternate-300",
    secondary: "text-theme-text-alternate-300",
    tertiaire: "text-theme-brand-primary-500 group-hover:text-theme-text-alternate-500",
  }

  return (
    <div className="group">
      <Link
        className={cx("flex justify-center items-center rounded-round", frameSizes[size], frameColors[type])}
        href={to}>
        <Icon iconName={iconName} size="sm" styleOverride={iconColors[type]} />
      </Link>
    </div>
  )
}
