import {createStore} from 'vuex'

export default createStore({
    state: {
        tagsList: [],
        collapse: false,
        bsmu1T1: [],
        bsmu1T2: [],
        bsmu1T3: [],
        bsmu1T4: [],

        bsmu2T1: [],
        bsmu2T2: [],
        bsmu2T3: [],
        bsmu2T4: [],
    },
    mutations: {
        changebsmu1T1(state, data) {
            if(state.bsmu1T1.length === 10) {
                state.bsmu1T1.unshift()
            }
            state.bsmu1T1.push(data)
        },
        changebsmu1T2(state, data) {
            if(state.bsmu1T2.length === 10) {
                state.bsmu1T2.unshift()
            }
            state.bsmu1T2.push(data)
        },
        changebsmu1T3(state, data) {
            if(state.bsmu1T3.length === 10) {
                state.bsmu1T3.unshift()
            }
            state.bsmu1T4.push(data)
        },
        changebsmu1T4(state, data) {
            if(state.bsmu1T4.length === 10) {
                state.bsmu1T4.unshift()
            }
            state.bsmu1T4.push(data)
        },
        delTagsItem(state, data) {
            state
                .tagsList
                .splice(data.index, 1);
        },
        setTagsItem(state, data) {
            state
                .tagsList
                .push(data)
        },
        clearTags(state) {
            state.tagsList = []
        },
        closeTagsOther(state, data) {
            state.tagsList = data;
        },
        closeCurrentTag(state, data) {
            for (let i = 0, len = state.tagsList.length; i < len; i++) {
                const item = state.tagsList[i];
                if (item.path === data.$route.fullPath) {
                    if (i < len - 1) {
                        data
                            .$router
                            .push(state.tagsList[i + 1].path);
                    } else if (i > 0) {
                        data
                            .$router
                            .push(state.tagsList[i - 1].path);
                    } else {
                        data
                            .$router
                            .push("/");
                    }
                    state
                        .tagsList
                        .splice(i, 1);
                    break;
                }
            }
        },
        // 侧边栏折叠
        handleCollapse(state, data) {
            state.collapse = data;
        },
        handleNum(state, data){
            state.vehicleNum = data;
        }
    },
    actions: {},
    modules: {}
})