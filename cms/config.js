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
  ],
};
