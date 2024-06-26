export type IButton = {
  type: "primary" | "secondary"
  size?: "sm" | "md"
  title: string
  route: string
  flexible?: boolean
  showAccessoryIcon?: boolean
  frameless?: boolean
}

export type ICustomerReview = {
  name: string
  imageUrl?: string
  message: string
}

export type IGalleryImage = {
  caption: string
  imageUrl: string
}

export type ILineIcon =
  | "angleLeft"
  | "angleRight"
  | "angleUp"
  | "angleDown"
  | "arrowLeft"
  | "arrowRight"
  | "plus"
  | "minus"
  | "check"
  | "search"
  | "cart"
  | "heart"
  | "sliders"
  | "bars"

export type IFooterItemLink = {
  type: "link"
  title: string
  route: string
}

export type IFooterItemInfo = {
  type: "info"
  value: string
}

export type IFooterKeyValue = {
  type: "keyValue"
  key: string
  value: string
  route: string
}

export type IFooterTable = {
  type: "table"
  key: string
  value: string
}

export type IProduct = {
  _id: string
  brand: string
  name: string
  slug: string
  imageUrl: string
  price: number
  salePct?: number
  status: "preOrder" | "inStock" | "soldOut"
}

export type IHomeHeaderSection = {
  heading: string
  text: string
  coverImageUrl: string
  callToActionButton: IButton
}

export type IFeatureSection = {
  heading: string
  text1: string
  text2: string
  imageUrl: string
  isReversed: boolean
  callToActionButton: IButton
}

export type IHomePage = {
  homeHeaderSection: IHomeHeaderSection
  featureSections: IFeatureSection[]
}
