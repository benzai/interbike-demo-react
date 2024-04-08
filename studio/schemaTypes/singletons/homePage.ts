export default {
  name: "homePage",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      type: "string",
    },
    {
      name: "homeHeaderSection",
      type: "homeHeaderSection",
    },
    {
      name: "featureSections",
      type: "array",
      of: [
        {
          type: "featureSection",
        },
      ],
    },
  ],
}
