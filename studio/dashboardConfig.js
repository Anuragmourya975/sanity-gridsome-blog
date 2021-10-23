export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6173b3d9cb90f200fd696a6b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-pra9zt3x',
                  apiId: '7ef79783-6812-4237-901f-06a03235952f'
                },
                {
                  buildHookId: '6173b3d8e2d4e21c4538bedc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-8hhz6fxu',
                  apiId: 'c36108c0-28e9-43d4-ba46-2f1f3f9239e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Anuragmourya975/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-8hhz6fxu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
