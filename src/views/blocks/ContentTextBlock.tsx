import cx from "classnames"
import Button from "@/views/core/Button"
import type { IButton } from "@/constants/types"

type Props = {
  type: "primary" | "secondary"
  heading: string
  text1: string
  text2?: string
  button?: IButton
}

export default function ContentTextBlock({ type, heading, text1, text2, button }: Props) {
  const headingTextColors = {
    primary: "text-theme-text-primary",
    secondary: "text-theme-text-alternate-500",
  }

  const bodyTextColors = {
    primary: "text-theme-text-secondary",
    secondary: "text-theme-text-alternate-300",
  }

  const separator = <div className="w-48 h-0.5 bg-theme-brand-primary-500"></div>

  return (
    <div className="flex flex-col gap-4 max-w-textblock-md">
      <div className="flex flex-col gap-2">
        <h2 className={cx("font-bold text-lg", headingTextColors[type])}>{heading}</h2>
        {separator}
      </div>

      <div className="flex flex-col gap-3">
        <p className={cx("text-sm leading-relaxed", bodyTextColors[type])}>{text1}</p>
        {text2 && <p className={cx("text-sm leading-relaxed", bodyTextColors[type])}>{text2}</p>}
      </div>

      <div className="flex gap-2">
        {button && (
          <Button
            type={type}
            size={button.size}
            to={button.route}
            title={button.title}
            showAccessoryIcon={button.showAccessoryIcon}
          />
        )}
      </div>
    </div>
  )
}
