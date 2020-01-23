import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'pm 2.5',
    loading: false,
    fullname: 'Tassanai Singprom',
    position: 'Web Developer',
    pm: []
  },
  mutations: {
    FETCH_API_PM (state) {
      axios.get(`http://api.waqi.info/feed/bangkok/?token=demo`).then(res => {
        state.pm = res.data
      })
    }
  },
  actions: {
    fetchData (context) {
      context.commit('FETCH_API_PM')
    }
  },
  getters: {
    getMessage: state => {
      return state.msg
    },
    getFullname: state => {
      return state.fullname
    },
    getPosition: state => {
      return state.position
    }
  }
})
