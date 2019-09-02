<template>
    <div>
        <div class="infoHead">
            <div class="itemPic"><img :src="pic" width="200px"></div>
            <div class="textinfo">
                <div class="chsName">{{title}}</div>
                <ul class="seasonList">
                    <li v-for="(item, index) in seasonList" :key="index" class="item" @click="getVersion(index)">
                        <div class="season">{{indexList[index]}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="versionList">
            <ul>
                <li v-for="(item, index) in versionList" :key="index" class="version">
                    <div  @click="showDownLoad(index)">
                        <span class="title">{{item.title}}<span class="succeed" v-show="succeed">√</span></span>
                        <span class="size">{{item.size}}</span>
                        <span class="time">{{item.createAt.slice(0, 10)}}</span>
                    </div>
                    <ul class="download" v-show="downLoadIndex[index]">
                        <li>
                            <a-button v-clipboard:copy="item.accessCode" v-clipboard:success="copy">百度网盘提取码：{{item.accessCode}}</a-button>
                            </li>
                        <li v-for="(url, index) in item.url" :key="index" class="url">
                            <a-button v-clipboard:copy="url.url" v-clipboard:success="copy">{{url.source}}：点击复制</a-button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'Drama',
        data() {
            return {
                dramaInfo:  this.$route.params.dramaInfo,
                title: this.$route.params.dramaInfo.chsTitle,
                pic: this.$route.params.dramaInfo.pic,
                seasonList: [],
                indexList: [],
                versionList: [],
                downLoadIndex: [],
                succeed: false,
            }
        },
        mounted() {
            this.dramaInfo.season.forEach((i) => {
                this.seasonList.push(i);
                if (i.seasonId === 0) {
                    this.indexList.push('合集')
                } else if (i.seasonId === -1) {
                    this.indexList.push('其他')
                } else {
                    this.indexList.push(`第${i.seasonId}季`)
                }
            });
            this.getVersion(0)
        },
        methods: {
            getVersion(index) {
                this.versionList = [];
                this.dramaInfo.season[index].version.forEach((i) => {
                    this.versionList.push(i);
                    this.downLoadIndex.push(false)
                })
            },
            showDownLoad(index) {
                this.downLoadIndex.splice(index, 1, !this.downLoadIndex[index])
            },
            copy () {

            },
        },
    }
</script>
<style scoped>
    .infoHead {
        display: flex;
        background-color: white;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .itemPic {
        background-color: white;
    }
    .textinfo {
        background-color: white;
        padding: 20px;
    }
    .chsName {
        font-size: 40px;
        font-weight: bold;
        background-color: white;
        margin-bottom: 20px;
    }
    .seasonList {
        list-style: none;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
    }
    .item {
        width: 80px;
        padding: 5px 10px;
        margin: 10px;
        text-align: center;
        cursor: pointer;
    }
    .versionList {
        background-color: white;
        max-width: 1200px;
        margin: 20px auto 0;
        padding: 20px;
    }
    .versionList>ul {
        list-style: none;
        background-color: white;
    }
    .version {
        background-color: white;
        margin: 10px 0;
        border-bottom: 1px solid #F1F5F9;
    }
    .version>div {
        display: flex;
        background-color: white;
        cursor: pointer;
    }
    .version>div>span {
        background-color: white;
        margin: 0 10px;
        line-height: 30px;
    }
    .title {
        flex:1;
    }
    .download {
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
        list-style: none;
        background-color: white;
        cursor: pointer;
    }
    .download>li {
        width: 250px;
        margin: 5px 10px;
        padding: 5px 10px;
        background-color: white;
        text-align: center;
        color: white;
    }
</style>