import cx from "classnames"
import Button from "@/views/core/Button"
import IconButton from "@/views/core/IconButton"
import type { IProduct } from "@/constants/types"

type Props = {
  item: IProduct
}

export default function ProductPreviewCard({ item }: Props) {
  const tag = (title: string) => {
    return (
      <div className="absolute left-0 top-0 p-2">
        <div className="text-xs text-theme-text-primary rounded-default bg-theme-brand-primary-700-60 p-1.5">
          {title}
        </div>
      </div>
    )
  }

  return (
    <li className="flex flex-col bg-theme-surface-100 border-solid border border-gray-200 md:min-w-60 w-full md:min-h-card-height-md pb-2">
      <div className="relative w-full h-40 p-2 bg-theme-surface-100">
        {item.status === "soldOut" && tag("Uitverkocht")}

        <div className="absolute right-0 top-0 p-2">
          <IconButton type="primary" size="sm" to="/" iconName="heart" />
        </div>

        <img className="aspect-square w-full h-full object-contain p-2" src={item.imageUrl} alt={item.name} />
      </div>

      <div className="flex flex-col justify-between gap-4 h-full p-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-theme-text-secondary">{item.brand}</span>
          <h4 className="text-md text-theme-text-primary">{item.name}</h4>
        </div>

        <div className="flex flex-col items-end gap-3 w-full">
          <span className="text-lg text-theme-brand-primary-700">€ {item.price}</span>

          <Button
            type="secondary"
            size="md"
            to={item.productUrl}
            title="Bekijk product"
            showAccessoryIcon={true}
            flexible={true}
          />
        </div>
      </div>
    </li>
  )
}
