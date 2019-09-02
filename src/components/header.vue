<template>
    <div>
        <div class="header">
            <div class="wrapper">
                <ul class="tabs">
                    <li v-for="(tab, index) in tabs" :class="{selected:tab.selected}" @click="changeTab(index)" :key="index" >{{ tab.name }}</li>
                </ul>
                <ul class="user">
<!--                    <li>登录</li>-->
<!--                    <li>注册</li>-->
                </ul>
            </div>
            <div class="inputWrapper">
                <input type="primary" class="search" :placeholder="search.placeholder" @focus="searchFocus" :disabled="search.disable" v-model="search.value" @keyup.enter="goSearch">
                <a-button @click="goSearch" v-show="search.searchButton" class="searchButton">搜 索</a-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',
        data() {
            return {
                tabs: [
                    {name: '推荐', selected: true},
                    {name: '美剧', selected: false, tab: 'drama'},
                    {name: 'To be continued...', selected: false},
                ],
                search: {
                    placeholder: '搜索',
                    disable: false,
                    tab: 'drama',
                    value: '',
                    searchButton: false
                },
            }
        },
        methods: {
            changeTab(index) {
                if (index === this.tabs.length - 1) { return }
                for (let i = 0; i < this.tabs.length; i++) {
                    this.tabs[i].selected = false;
                }
                this.tabs[index].selected = true;
                if (this.tabs[index].name !== '推荐') {
                    this.search.disable = false;
                    this.search.placeholder = `搜${this.tabs[index].name}`;
                    this.search.tab = this.tabs[index].tab;
                    this.search.searchButton = true;
                    this.$router.push({path: '/collection'})
                } else {
                    this.search.placeholder = '请选择左侧Tab后搜索';
                    this.search.searchButton = false;
                    this.$router.push({path: '/'})
                }
            },
            searchFocus() {
                if (this.tabs[0].selected === true) {
                    this.search.placeholder = '请选择左侧Tab后搜索';
                    this.search.disable = true
                } else {
                    this.search.disable = false
                }
            },
            goSearch() {
                this.$router.push({path: `/search?tab=${this.search.tab}&name=${this.search.value}`})
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        display: flex;
        background-color: white;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        flex: 1;
        background-color: white;
    }
    .tabs {
        list-style-type: none;
        display: flex;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        background-color: white;
        margin-bottom: 0;
    }
    .tabs>li {
        margin: 0 10px;
        text-align: center;
        line-height: 30px;
        color: #8E8E93;
        cursor: pointer;
        background-color: white;
    }
    .tabs>li:last-child {
        cursor: not-allowed;
    }
    .tabs>.selected {
        color: #003047;
    }
    .user {
        list-style-type: none;
        display: flex;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        background-color: white;
    }
    .user>li {
        margin: 0 10px;
        text-align: center;
        line-height: 30px;
        color: #8E8E93;
        cursor: pointer;
        background-color: white;
    }
    .inputWrapper {
        background-color: white;
        padding: 10px;
    }

    .search {
        line-height: 20px;
        border-radius: 15px;
        height: 30px;
        padding: 5px;
        margin: 0 20px 0 0;
        border: none;
        width: 200px;
        transition: width 0.5s;
    }
    .search:focus {
        outline: none;
        width: 250px;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    }

</style>
