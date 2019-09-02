<template>
  <div id="app">
      <div class="headerWrapper">
          <Tabs></Tabs>
      </div>
    <div class="mainContainer">
        <keep-alive include="Recommend">
            <router-view name='main'>
                <Main></Main>
            </router-view>
        </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Tabs from './components/header.vue'
import Main from './components/main.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Tabs,
    Main,
    Footer,
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #F1F5F9;
  }
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .headerWrapper>div {
      background-color: white;
  }
  .mainContainer {
    min-height: calc(100vh - 50px);
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto
  }

  a {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: #8E8E93;
  }
  a:hover {
    color: #0A86AF;
  }
  span {
      background-color: white;
  }
    i>svg {
        background-color: white;
    }
</style>
