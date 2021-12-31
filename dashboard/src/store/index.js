import UserModule from './user'
import GlobalModule from './global'
import { readonly } from 'vue'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
