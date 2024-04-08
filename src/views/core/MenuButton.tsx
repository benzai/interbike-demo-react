import cx from "classnames"
import Link from "next/link"
import Icon from "@/views/core/Icon"

type Props = {
  type?: "primary" | "secondary"
  to: string
  title: string
  showAccessoryIcon?: boolean
}

export default function MenuButton({ type = "primary", to, title, showAccessoryIcon = false }: Props) {
  const frameColors = {
    primary: "bg-transparent group-hover:bg-theme-brand-primary-700 transition",
    secondary: "bg-transparent group-hover:bg-theme-brand-primary-700 transition",
  }

  const textColors = {
    primary: "text-theme-text-alternate-300 group-hover:text-theme-text-alternate-500",
    secondary: "text-theme-brand-primary-500 group-hover:text-theme-text-alternate-500",
  }

  return (
    <li className="group">
      <Link className={cx("block rounded-none px-2 h-8", frameColors[type])} href={to}>
        <div className="flex justify-center items-center gap-1 h-full">
          <span className={cx("text-xs", textColors[type])}>{title}</span>
          {showAccessoryIcon && (
            <Icon
              iconName="angleDown"
              styleOverride="text-theme-brand-primary-700 group-hover:text-theme-text-alternate-300"
            />
          )}
        </div>
      </Link>
    </li>
  )
}
