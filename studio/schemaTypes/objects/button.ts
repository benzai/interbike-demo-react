export default {
  name: "button",
  type: "object",
  fields: [
    {
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "route",
      type: "string",
    },
    {
      name: "flexible",
      type: "boolean",
    },
    {
      name: "showAccessoryIcon",
      type: "boolean",
    },
    {
      name: "frameless",
      type: "boolean",
    },
  ],
  initialValue: {
    flexible: false,
    showAccessoryIcon: true,
    frameless: false,
  },
}
