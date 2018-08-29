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
    baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://cocky-euler-b82099.netlify.com'
    : 'http://localhost:3000',
  }
}
