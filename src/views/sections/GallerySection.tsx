import cx from "classnames"
import Button from "@/views/core/Button"
import IconButton from "@/views/core/IconButton"
import type { IButton, IGalleryImage } from "@/constants/types"

type Props = {
  galleryImages: IGalleryImage[]
  button: IButton
}

export default function GallerySection({ galleryImages, button }: Props) {
  return (
    <div className="relative flex flex-col items-center gap-5 pt-0 pb-12 md:pb-16 lg:pb-20 px-5 md:px-12 lg:px-20 bg-theme-surface-500">
      <div className="absolute left-0 top-0 w-full h-12 md:h-16 lg:h-24 bg-theme-surface-300"></div>

      <div className="relative w-full h-auto">
        <img
          className="w-full aspect-photo-wide object-cover"
          src={galleryImages[0].imageUrl}
          alt={galleryImages[0].caption}
        />

        <div className="absolute left-0 top-0 flex justify-between items-center w-full h-full px-2">
          <IconButton type="primary" size="md" to="/" iconName="angleLeft" />
          <IconButton type="primary" size="md" to="/" iconName="angleRight" />
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          type={button.type}
          to={button.route}
          title={button.title}
          size="lg"
          showAccessoryIcon={button.showAccessoryIcon}
        />
      </div>
    </div>
  )
}
