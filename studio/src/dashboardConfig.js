export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe135c4237bf401209b83c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ke5tyo1n',
                  apiId: '9f606826-2f07-4e28-aed4-0baaef2add4c'
                },
                {
                  buildHookId: '5fe135c402e036011ef5b1ee',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j2wrmbph',
                  apiId: '41468142-6cfb-43d7-b053-0ca5ccd9c589'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jumus-jumbuck/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j2wrmbph.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
