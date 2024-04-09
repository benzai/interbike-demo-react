import createImageUrlBuilder from "@sanity/image-url"
import type { Image } from "sanity"

// import { dataset, projectId } from "./sanityEnv"

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-04-01"

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url()
}
