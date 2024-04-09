import { createClient } from "@sanity/client"

// import { apiVersion, dataset, projectId, useCdn } from "./sanityEnv"

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

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
