export default {
  name: "product",
  type: "document",
  fields: [
    {
      name: "brand",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "imageUrl",
      type: "image",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "salePct",
      type: "number",
    },
    {
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Pre order", value: "preOrder" },
          { title: "In stock", value: "inStock" },
          { title: "Sold out", value: "soldOut" },
        ],
      },
    },
  ],
}
