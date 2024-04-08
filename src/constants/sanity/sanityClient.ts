import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "./sanityEnv"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
