import paths from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Priston Tale API',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Ranking',
    description: 'APIs de Ranking'}],
  paths,
}