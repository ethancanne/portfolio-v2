const journeyFields = [
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
  },
  {
    label: 'Position',
    name: 'position',
    widget: 'string',
  },
  {
    label: 'Time Frame',
    name: 'timeFrame',
    widget: 'string',
  },
  {
    label: 'Is Present',
    name: 'isPresent',
    widget: 'boolean',
  },
  {
    label: 'Points',
    name: 'points',
    widget: 'list',
    allow_add: true,
    fields: [
      {
        label: 'Content',
        name: 'content',
        widget: 'string',
      },
    ],
  },
];

module.exports = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'ethancanne/portfolio-next',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'aboutMe',
      label: 'About Me',
      format: 'json',
      files: [
        {
          label: 'About Me',
          name: 'home',
          file: 'cms/data/aboutMe.json',
          fields: [
            {
              label: 'Content',
              name: 'content',
              widget: 'string',
            },
            {
              label: 'Image',
              required: false,
              name: 'image',
              widget: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'expertise',
      label: 'Expertise',
      format: 'json',
      files: [
        {
          label: 'Expertise',
          name: 'Expertise',
          file: 'cms/data/expertise.json',
          fields: [
            {
              label: 'Frontend',
              name: 'frontend',
              widget: 'string',
            },
            {
              label: 'Backend',
              name: 'backend',
              widget: 'string',
            },
            {
              label: 'UI Design',
              name: 'ui-design',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'journey',
      label: 'Journey',
      format: 'json',
      files: [
        {
          label: 'Studied',
          name: 'studied',
          file: 'cms/data/journey/studied.json',
          fields: journeyFields,
        },
        {
          label: 'Worked',
          name: 'worked',
          file: 'cms/data/journey/worked.json',
          fields: journeyFields,
        },
        {
          label: 'Served',
          name: 'Served',
          file: 'cms/data/journey/served.json',
          fields: journeyFields,
        },
      ],
    },
  ],
};
