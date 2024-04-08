type Props = {
  count: number
  partnerLogoUrl?: string
}

export default function MiniReviewWidget({
  count,
  partnerLogoUrl = "https://benzai.github.io/staging-images/iaspect/stars-logo.png",
}: Props) {
  return (
    <div className="flex items-center w-48 h-12 px-2 py-1 rounded-default bg-theme-surface-100 border-solid border-2 border-theme-brand-primary-300">
      <div className="flex flex-1 flex-col">
        <span className="text-md text-theme-text-primary">{count}</span>
        <p className="text-3xs text-theme-text-secondary">gecontroleerde klantbeoordelingen</p>
      </div>

      <img className="w-auto h-8 object-cover" src={partnerLogoUrl} alt="Partner" />
    </div>
  )
}
