<template>
    <div>
        <ul class="itemWrapper">
            <li v-for="(item, index) in mainList" :key="index" class="item">
                <router-link :to="{name: 'DramaPage', params: { dramaId:item.dramaId, dramaInfo:item }}" @click="this.index = index">
                    <div class="itemPic"><img :src="item.pic" :alt="item.chsTitle" width="200px"  :onerror="errorImg"></div>
                    <div class="itemName">
                        <div class="chsName">{{ item.chsTitle }}</div>
                        <div class="engName">{{ item.engTitle }}</div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="refresh">
            <a-button @click="refresh">↺换一批</a-button>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Recommend',
        data() {
            return {
                mainList: [],
                errorImg: 'this.src="' + require('../assets/picnotfound.jpg') + '"',
                index: 0,
            }
        },
        mounted() {
            this.mainList.splice(0,this.mainList.length);
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get('http://huxiaoyu.me:8080/recommend', {
                }).then((r) => {
                    if(r.data.data) {
                        for (let i = 0; i<r.data.data.recommendDrama.length;i++) {
                            this.mainList.push(r.data.data.recommendDrama[i]);
                        }
                    } else {
                        alert('OhOh,something wrong')
                    }
                }).catch((e) => {
                    console.log(e)
                })
            },
            refresh() {
                this.mainList.splice(0,this.mainList.length);
                this.getData()
            }
        }
    }
</script>
<style scoped>
    .itemWrapper {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: stretch;
    }
    .item {
        background-color: white;
        padding: 10px;
        margin: 20px auto;
        width: 300px;
    }
    .itemPic {
        background-color: white;
        text-align: center;
    }
    .itemName {
        background-color: white;
        font-size: 15px;
        padding: 5px;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
    }
    .itemName>div {
        background-color: white;
    }
    .refresh {
        text-align: center;
        cursor: pointer;
    }
</style>