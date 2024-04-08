import cx from "classnames"
import ContentTextBlock from "@/views/blocks/ContentTextBlock"
import MiniReviewWidget from "@/views/blocks/MiniReviewWidget"
import type { IButton, ICustomerReview } from "@/constants/types"

type Props = {
  type: "primary" | "secondary"
  heading: string
  text1: string
  text2?: string
  button?: IButton
  customerReview: ICustomerReview
}

export default function ReviewsSection({ type, heading, text1, text2, button, customerReview }: Props) {
  const customerReviewBlock = (
    <div className="flex flex-col gap-6 max-w-textblock">
      <MiniReviewWidget count={21} />

      <div className="flex flex-col gap-3 order-first lg:order-last">
        <p className="text-md leading-relaxed text-theme-brand-primary-500">{customerReview.message}</p>

        <div className="flex items-center gap-2">
          {customerReview.imageUrl && (
            <img
              className="w-6 h-6 object-cover rounded-round border-solid border border-theme-brand-primary-700"
              src={customerReview.imageUrl}
            />
          )}
          <p className="text-xs text-theme-text-alternate-300">{customerReview.name}</p>
        </div>
      </div>
    </div>
  )

  const mainBlock = (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-10 md:p-16 lg:p-20 bg-theme-surface-700">
      <div className="w-full lg:w-5/12">
        <ContentTextBlock type={type} heading={heading} text1={text1} text2={text2} button={button} />
      </div>

      <div className="w-full lg:w-5/12 py-8 border-solid lg:border-none border-t border-theme-brand-primary-700-60">
        {customerReviewBlock}
      </div>
    </div>
  )

  return (
    <div className="relative flex flex-col items-center pt-0 pb-10 md:pb-12 lg:pb-16 bg-theme-surface-500">
      <div className="absolute left-0 top-0 bg-theme-surface-100 w-full h-20"></div>

      <div className="relative container mx-auto w-10/12 h-full">{mainBlock}</div>
    </div>
  )
}
