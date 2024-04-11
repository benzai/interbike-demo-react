import cx from "classnames"
import Button from "@/views/core/Button"
import ProductPreviewCard from "@/views/blocks/ProductPreviewCard"
import type { IButton, IProduct } from "@/constants/types"

type Props = {
  heading: string
  products: IProduct[]
  button: IButton
}

export default function ProductsSection({ heading, products = [], button }: Props) {
  return (
    <section className="flex flex-col items-center gap-4 w-full px-5 md:px-12 lg:px-20 py-8 md:py-16 lg:py-24 bg-theme-surface-300">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-lg text-theme-text-primary">{heading}</h2>

        <Button
          type={button.type}
          to={button.route}
          title={button.title}
          size="md"
          showAccessoryIcon={button.showAccessoryIcon}
          frameless={button.frameless}
        />
      </div>

      <div className="relative flex items-center gap-2 w-full">
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 w-full">
          {products.map(product => (
            <ProductPreviewCard key={product._id} item={product} />
          ))}
        </ul>
      </div>
    </section>
  )
}
