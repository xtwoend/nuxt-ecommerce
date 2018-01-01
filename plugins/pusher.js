import Pusher from 'pusher-js'

export default new Pusher('b3c7dc5f5882edf91a00', {
  authEndpoint: '/api/pusherAuthorize',
  cluster: 'ap1',
  encrypted: true
})
