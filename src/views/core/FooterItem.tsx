import Link from "next/link"
import type { IFooterItemLink, IFooterItemInfo, IFooterKeyValue, IFooterTable } from "@/constants/types"

type Props = {
  item: IFooterItemLink | IFooterItemInfo | IFooterKeyValue | IFooterTable
}

export default function FooterItem({ item }: Props) {
  switch (item.type) {
    case "link":
      const linkItem = item as IFooterItemLink
      return (
        <Link className="flex" href={linkItem.route}>
          <div className="flex items-center gap-1 py-1">
            <span className="text-2xs text-theme-text-alternate-300 hover:text-theme-brand-primary-700 hover:underline transition">
              {linkItem.title}
            </span>
          </div>
        </Link>
      )

    case "info":
      const infoItem = item as IFooterItemInfo
      return (
        <div className="flex items-center gap-1 py-1">
          <span className="text-2xs text-theme-text-alternate-300">{infoItem.value}</span>
        </div>
      )

    case "keyValue":
      const keyValueItem = item as IFooterKeyValue
      return (
        <div className="flex items-center gap-1 py-1">
          <span className="text-2xs text-theme-text-alternate-500">{keyValueItem.key}</span>
          <Link className="flex" href={keyValueItem.route}>
            <span className="text-2xs text-theme-text-alternate-300 hover:text-theme-brand-primary-700 hover:underline transition">
              {keyValueItem.value}
            </span>
          </Link>
        </div>
      )

    case "table":
      const tableValue = item as IFooterTable
      return (
        <div className="flex items-center gap-1 py-1">
          <span className="w-28 text-2xs text-theme-text-alternate-300">{tableValue.key}</span>
          <span className="text-2xs text-theme-text-alternate-300">{tableValue.value}</span>
        </div>
      )
  }
}
