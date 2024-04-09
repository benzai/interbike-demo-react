import { createClient } from "@sanity/client"

import { apiVersion, dataset, projectId, useCdn } from "./sanityEnv"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
