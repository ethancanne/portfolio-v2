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
    name: 'git-gateway',
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
              label: 'Items',
              name: 'items',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Content',
                  name: 'content',
                  widget: 'string',
                },
                {
                  label: 'Technologies',
                  name: 'technologies',
                  widget: 'list',
                  allow_add: true,
                  fields: [
                    {
                      label: 'Name',
                      name: 'name',
                      widget: 'string',
                    },
                  ],
                },
              ],
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
          fields: [
            {
              label: 'items',
              name: 'items',
              widget: 'list',
              allow_add: true,
              fields: journeyFields,
            },
          ],
        },
        {
          label: 'Worked',
          name: 'worked',
          file: 'cms/data/journey/worked.json',
          fields: [
            {
              label: 'items',
              name: 'items',
              widget: 'list',
              allow_add: true,
              fields: journeyFields,
            },
          ],
        },
        {
          label: 'Served',
          name: 'Served',
          file: 'cms/data/journey/served.json',
          fields: [
            {
              label: 'items',
              name: 'items',
              widget: 'list',
              allow_add: true,
              fields: journeyFields,
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      label: 'Projects',
      format: 'json',
      files: [
        {
          label: 'Featured Projects',
          name: 'featured-projects',
          file: 'cms/data/portfolio/featuredProjects.json',
          fields: [
            {
              label: 'Items',
              name: 'items',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: 'Github Link',
                  name: 'githubLink',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Published Link',
                  name: 'publishedLink',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Technologies',
                  name: 'technologies',
                  widget: 'list',
                  required: false,
                  allow_add: true,
                  fields: [
                    {
                      label: 'Name',
                      name: 'name',
                      widget: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Other Projects',
          name: 'other-projects',
          file: 'cms/data/portfolio/otherProjects.json',
          fields: [
            {
              label: 'Items',
              name: 'items',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
                {
                  label: 'link',
                  name: 'link',
                  widget: 'string',
                  required: false,
                },

                {
                  label: 'Technologies',
                  name: 'technologies',
                  widget: 'list',
                  required: false,
                  allow_add: true,
                  fields: [
                    {
                      label: 'Name',
                      name: 'name',
                      widget: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
