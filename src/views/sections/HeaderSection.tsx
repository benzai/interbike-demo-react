import Button from "@/views/core/Button"
import type { IButton } from "@/constants/types"

type Props = {
  heading: string
  text: string
  button: IButton
  coverImageUrl: string
}

export default function HeaderSection({ heading, text, button, coverImageUrl }: Props) {
  const background = (
    <div className="absolute left-0 top-0 z-0 w-full h-full">
      <div className="flex h-full">
        <div className="hidden md:block w-4/12 h-full bg-theme-surface-700"></div>

        <div className="w-full md:w-8/12 h-full bg-orange-200">
          <img className="w-full h-full object-cover" src={coverImageUrl} />
        </div>
      </div>
    </div>
  )

  const heroTextBlock = (
    <div className="flex flex-col items-end gap-2">
      <div className="p-6 bg-theme-surface-900 border-solid border border-theme-brand-primary-700">
        <div className="flex flex-col gap-4 max-w-textblock-md">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-theme-text-alternate-500">{heading}</h1>

          <div className="flex flex-col gap-3">
            <p className="text-sm md:text-md leading-relaxed md:leading-loose text-theme-text-alternate-300">{text}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          type="secondary"
          to={button.route}
          title={button.title}
          size="lg"
          showAccessoryIcon={button.showAccessoryIcon}
        />
      </div>
    </div>
  )

  return (
    <section className="relative md:min-h-header-md lg:min-h-header-lg px-12 md:px-16 lg:px-20 pt-20 md:pt-20 pb-8 md:pb-20">
      {background}

      <div className="relative">
        <div className="container mx-auto">
          <div className="flex">
            <div className="hidden md:block w-auto md:w-1/12 lg:w-0"></div>

            <div className="w-auto md:w-6/12 lg:w-5/12">{heroTextBlock}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
