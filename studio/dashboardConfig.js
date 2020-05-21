export default {
  widgets: [
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
                  buildHookId: '5ec6edc0ce8130a33e61107f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6wxf6dzr',
                  apiId: 'fbce1934-1e03-4ee2-8ed0-c48508ef9f8d'
                },
                {
                  buildHookId: '5ec6edc057f7e8790ad65457',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r3no7nb9',
                  apiId: 'e1af9fe8-4732-49f8-a178-98d56aa9c1b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/boyankostov/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r3no7nb9.netlify.app', category: 'apps'}
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
