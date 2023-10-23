import type { FormGroupProps } from "@tkcrm/ui";

export const helloForm: FormGroupProps[] = [
  {
    title: "Hello form data",
    fields: [
      {
        type: "text",
        name: ["hello"],
        label: "Type hello message",
        required: true,
        colSize: 12,
      },
    ],
  },
];
