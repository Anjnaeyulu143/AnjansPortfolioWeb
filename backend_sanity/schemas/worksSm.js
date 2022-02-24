export default {
  name: "worksSm",
  title: "WorksSm",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
