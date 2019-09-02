import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

let store = new Vuex.Store({
    info:{
        dramaInfo: {},
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        getDramaInfo(info){
            return info.dramaInfo;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        setDramaInfo({commit, info}, item){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("saveDramaInfo", item);
        }
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // name传递过来的数据
        saveDramaInfo(info, item){
            info.dramaInfo = item;//将传参设置给state的city
            console.log(info.dramaInfo)
        }
    }
});

export default store;