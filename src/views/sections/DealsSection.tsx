import cx from "classnames"
import ContentTextBlock from "@/views/blocks/ContentTextBlock"
import type { IButton } from "@/constants/types"

type Props = {
  heading: string
  text1: string
  text2?: string
  button?: IButton
  imageUrl: string
}

export default function DealsSection({ heading, text1, text2, button, imageUrl }: Props) {
  const mainBlock = (
    <div className="flex flex-col md:flex-row justify-between items-center bg-theme-surface-500">
      <div className="flex w-full md:w-6/12 p-8 md:p-12 lg:p-20">
        <ContentTextBlock type="primary" heading={heading} text1={text1} text2={text2} button={button} />
      </div>

      <div className="flex w-full md:w-6/12 h-80 md:h-full order-first md:order-last">
        <img className="w-full h-full object-cover" src={imageUrl} alt={heading} />
      </div>
    </div>
  )

  return (
    <section className="flex flex-col items-center px-5 md:px-0 pt-10 pb-20 md:pb-24 lg:pb-32 bg-theme-surface-300">
      <div className="relative container mx-auto md:w-10/12 h-full">{mainBlock}</div>
    </section>
  )
}
