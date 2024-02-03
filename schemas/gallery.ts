import { defineField } from "sanity";

const gallery = {
  name: "gallery",
  title: "Gallery",
  type: 'document',
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default gallery;
