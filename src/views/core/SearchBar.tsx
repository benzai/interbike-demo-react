import cx from "classnames"
import Icon from "@/views/core/Icon"

type Props = {}

export default function SearchBar({}: Props) {
  return (
    <div className="relative w-full h-9 md:h-12">
      <span className="absolute flex justify-center items-center h-full px-2 md:px-3">
        <Icon size="sm" iconName="search" styleOverride="text-theme-brand-primary-700" />
      </span>

      <input
        className="w-full h-full pl-8 md:pl-10 pr-2 md:pr-3 text-xs md:text-sm text-theme-text-primary rounded-default"
        type="text"
        placeholder="Waar ben je naar op zoek?"
      />
    </div>
  )
}
