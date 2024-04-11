import cx from "classnames"
import Icon from "@/views/core/Icon"
import Button from "@/views/core/Button"
import type { IButton, IGalleryImage, ILineIcon } from "@/constants/types"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type Props = {
  galleryImages: IGalleryImage[]
  button: IButton
}

const RightButton = ({ onClick }: any) => {
  return (
    <div className="group">
      <div
        onClick={onClick}
        className={cx(
          "absolute top-1/2 right-2 z-10 cursor-pointer flex justify-center items-center w-9 h-9",
          "rounded-round bg-theme-surface-900 group-hover:opacity-80 transition"
        )}>
        <Icon iconName="arrowRight" size="sm" styleOverride="text-theme-text-alternate-300" />
      </div>
    </div>
  )
}

const LeftButton = ({ onClick }: any) => {
  return (
    <div className="group">
      <div
        onClick={onClick}
        className={cx(
          "absolute top-1/2 left-2 z-10 cursor-pointer flex justify-center items-center w-9 h-9",
          "rounded-round bg-theme-surface-900 group-hover:opacity-80 transition"
        )}>
        <Icon iconName="arrowLeft" size="sm" styleOverride="text-theme-text-alternate-300" />
      </div>
    </div>
  )
}

export default function GallerySection({ galleryImages, button }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightButton />,
    prevArrow: <LeftButton />,
  }

  return (
    <section className="relative flex flex-col items-center gap-5 pt-0 pb-12 md:pb-16 lg:pb-20 px-5 md:px-12 lg:px-20 bg-theme-surface-500">
      <div className="absolute left-0 top-0 w-full h-12 md:h-16 lg:h-24 bg-theme-surface-300"></div>

      <div className="relative w-full h-auto">
        <Slider {...settings}>
          {galleryImages.map(image => (
            <figure>
              <img className="w-full aspect-photo-wide object-cover" src={image.imageUrl} alt={image.caption} />
            </figure>
          ))}
        </Slider>
      </div>

      <div className="flex gap-2">
        <Button
          type={button.type}
          to={button.route}
          title={button.title}
          size="md"
          showAccessoryIcon={button.showAccessoryIcon}
        />
      </div>
    </section>
  )
}
