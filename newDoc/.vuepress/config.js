module.exports = {
  title: 'Objection.js',
  description: 'An SQL friendly ORM for node.js',
  base: '/objection.js/new-docs/',

  themeConfig: {
    repo: 'vincit/objection.js',
    repoLabel: 'Github',

    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },

      {
        text: 'API Reference',
        items: [
          {
            text: 'Main Module',
            link: '/api/objection/'
          },
          {
            text: 'Query Builder',
            link: '/api/query-builder/'
          },
          {
            text: 'Model',
            link: '/api/model/'
          },
          {
            text: 'Types',
            link: '/api/types/'
          }
        ]
      },

      {
        text: 'Recipe Book',
        link: '/recipes/'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'installation',
            'getting-started',
            'models',
            'relations',
            'query-examples',
            'transactions',
            'validation',
            'documents',
            'plugins',
            'contributing'
          ]
        }
      ],

      '/api/model/': [
        {
          title: 'Model API Reference',
          collapsable: false,
          children: ['overview', 'static-properties', 'static-methods', 'instance-methods']
        }
      ],

      '/api/objection/': [
        {
          title: 'Objection API Reference',
          collapsable: false
        }
      ],

      '/api/query-builder/': [
        {
          title: 'Query Builder API Reference',
          collapsable: false,
          children: ['static-methods', 'instance-methods']
        }
      ],

      '/recipes/': [
        {
          title: 'Recipes',
          collapsable: false,
          children: [
            'raw-queries',
            'precedence-and-parentheses',
            'subqueries',
            'relation-subqueries',
            'joins',
            'composite-keys',
            'json-queries',
            'custom-id-column',
            'custom-validation',
            'snake-case-to-camel-case-conversion',
            'paging',
            'returning-tricks',
            'timestamps',
            'custom-query-builder',
            'multitenancy-using-multiple-databases',
            'default-values',
            'error-handling',
            'ternary-relationships',
            'indexing-postgresql-jsonb-columns'
          ]
        }
      ]
    }
  }
};