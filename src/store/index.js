import { createStore } from 'vuex'
import mainPlugin from "./plugins/mainPlugin"


export default createStore({
  plugins: [mainPlugin]

})