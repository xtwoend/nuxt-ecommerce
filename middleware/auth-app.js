export default function ({store, redirect, route}) {
  if (!store.getters['auth/loggedIn']) {
    return redirect('/authorize?redirect_uri=' + route.fullPath)
  }
}
