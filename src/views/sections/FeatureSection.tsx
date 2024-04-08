import cx from "classnames"
import ContentTextBlock from "@/views/blocks/ContentTextBlock"
import type { IButton } from "@/constants/types"

type Props = {
  type: "primary" | "secondary"
  heading: string
  text1: string
  text2?: string
  button?: IButton
  imageUrl: string
  isReversed?: boolean
}

export default function FeatureSection({ type, heading, text1, text2, button, imageUrl, isReversed = false }: Props) {
  const imageBlock = (
    <div className="w-full h-auto">
      <img className="aspect-16/10 object-cover" src={imageUrl} alt={heading} />
    </div>
  )

  return (
    <div className="container mx-auto w-full px-5 md:px-0 py-6 md:py-10 lg:py-16 bg-theme-surface-100">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-auto lg:w-6/12">{imageBlock}</div>

        <div className={cx("w-auto md:w-8/12 lg:w-6/12", isReversed && "lg:px-1/12 lg:order-first")}>
          <ContentTextBlock type={type} heading={heading} text1={text1} text2={text2} button={button} />
        </div>
      </div>
    </div>
  )
}
