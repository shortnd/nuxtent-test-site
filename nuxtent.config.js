module.exports = {
  content: [
    [
      'site_info',
      {
        permalink: '/site_info/:slug',
        page: 'site_info/_slug',
        isPost: false,
        generate: [
          'get',
          'getAll'
        ]
      }
    ],
    [
      'projects',
      {
        permalink: '/projects/:slug',
        page: 'projects/_slug',
        isPost: false,
        generate: [
          // for static build
          'get',
          'getAll'
        ]
      }
    ],
    [
      'posts',
      {
        permalink: 'posts/:slug',
        page: '/posts/_slug',
        isPost: false,
        generate: [
          // for static build
          'get',
          'getAll'
        ]
      }
    ]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
