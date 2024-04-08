import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["settings"])

export default defineConfig({
  name: "default",
  title: "InterBikes CMS",
  projectId: "9w6rnb9o",
  dataset: "production",

  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title("Content")
          .items([
            // Singletons
            S.listItem().title("Home").id("homePage").child(S.document().schemaType("homePage").documentId("homePage")),

            // Documents
            S.documentTypeListItem("product").title("Products"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: templates => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
