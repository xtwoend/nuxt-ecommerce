import pusher from '~/plugins/pusher'

let mixins = {
  methods: {
    initPusher () {
      let user = this.$store.state.auth.user
      let channel = pusher.subscribe(`private-App.User.${user.id}`)
      channel.bind('App\\Events\\UserNotification', function (data) {
        console.log(data)
      })
      channel.bind('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', function (data) {
        console.log(data)
      })
    },
    subscribe () {
      navigator.serviceWorker.ready.then(registration => {
        const options = { userVisibleOnly: true }
        const vapidPublicKey = 'BJS4pb+yEV/IVUCF/XRRDgAbytXVLZGBCZotYbko/H5wsFBfF8gH4XmoCRrGQLRQyoM9ETnUh6pfb0ejwLD8bLc='

        if (vapidPublicKey) {
          options.applicationServerKey = this.urlBase64ToUint8Array(vapidPublicKey)
        }

        registration.pushManager.subscribe(options)
          .then(subscription => {
            this.updateSubscription(subscription)
          })
          .catch(e => {
            if (Notification.permission === 'denied') {
              console.log('Permission for Notifications was denied')
            } else {
              console.log('Unable to subscribe to push.', e)
            }
          })
      })
    },
    unsubscribe () {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.getSubscription().then(subscription => {
          if (!subscription) {
            return
          }
          subscription.unsubscribe().then(() => {
            this.deleteSubscription(subscription)
          }).catch(e => {
            console.log('Unsubscription error: ', e)
          })
        }).catch(e => {
          console.log('Error thrown while unsubscribing.', e)
        })
      })
    },
    async deleteSubscription (subscription) {
      await this.$axios.$post('/subscriptions/delete', { endpoint: subscription.endpoint })
    },
    updateSubscription (subscription) {
      const key = subscription.getKey('p256dh')
      const token = subscription.getKey('auth')

      const data = {
        endpoint: subscription.endpoint,
        key: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
        token: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
      }
      this.$axios.$post('/subscriptions', data)
        .then(() => { this.loading = false })
    },
    urlBase64ToUint8Array (base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4)
      const base64 = (base64String + padding)
        /* eslint-disable */
        .replace(/\-/g, '+')
        .replace(/_/g, '/')
        /* eslint-enable */
      const rawData = window.atob(base64)
      const outputArray = new Uint8Array(rawData.length)

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }

      return outputArray
    },
    initAccountKit () {
      const tag = document.createElement('script')
      tag.setAttribute(
        'src',
        `https://sdk.accountkit.com/id_ID/sdk.js`
      )
      tag.setAttribute('id', 'account-kit')
      tag.setAttribute('type', 'text/javascript')
      tag.onload = () => {
        /* eslint-disable camelcase */
        window.AccountKit_OnInteractive = this.onLoad.bind(this)
        /* eslint-enable camelcase */
      }
      document.head.appendChild(tag)
    },
    onLoad () {
      window.AccountKit.init(
        {
          appId: '1530509847230241',
          state: '21ebf35a5ef6bd25ad0fe23044cd7ee4',
          version: 'v1.1',
          fbAppEventsEnabled: true,
          debug: true,
          display: 'modal'
        }
      )
    }
  }
}

export default mixins
