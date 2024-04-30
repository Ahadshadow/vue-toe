<template>
  <VApp>
    <nav
      id="navigator"
      class="navbarAdmin"
      :class="{ navbarAdminopen: opened }"
    >
      <span class="open-slide">
        <a href="#" @click="toggleMenu">
          <div>
            <div class="bar" :class="{ topopen: opened }"></div>
            <div class="bar" :class="{ midopen: opened }"></div>
            <div class="bar" :class="{ botopen: opened }"></div>
          </div>
        </a>
      </span>

      <div>
        <h1 class="heading">Admin Panel</h1>
      </div>
      <!-- <button>Logout</button> -->
    </nav>
    <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <div id="main" :class="{ mainopen: opened }">
      <slot></slot>
    </div>
  </VApp>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VApp } from "vuetify/components";

export default defineComponent({
  name: "ResponsiveSideMenu",
  setup() {
    const opened = ref(false);

    const toggleMenu = () => {
      opened.value = !opened.value;
    };

    return { opened, toggleMenu };
  },
});
</script>

<style scoped>
.heading {
  font-size: 30px;
  color: #ccc;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
}
body {
  font-family: "Arial", Serif;
  background-color: #f5f5f5;
  overflow-x: hidden;
}

.navbarAdmin {
  background-color: #20232a;
  overflow: hidden;
  height: 63px;
}

.navbarAdminopen {
  background-color: #20232a;
  overflow: hidden;
  height: 63px;
  margin-left: 250px;
}

.navbarAdmin a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbarAdmin a:hover {
  background-color: #676767;
  color: #000;
}

.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #20232a;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.sidenavopen {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #20232a;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.side-nav a {
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 20px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}

.side-nav a:hover {
  color: #fff;
  font-weight: 800;
}

.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.3s;
  overflow: hidden;
  height: calc(100vh - 63px);
  width: 100%;
}

.mainopen {
  transition: margin-left 0.3s;
  /* padding: 20px; */
  overflow: hidden;
  width: 100%;
  margin-left: 250px;
}

nav {
  transition: margin-left 0.3s;
}

.bar {
  display: block;
  height: 5px;
  width: 35px;
  background: #fff;
  margin: 5px auto;
}

.midopen {
  width: 0;
}

.bar {
  transition: all 0.3s ease;
}

.topopen {
  transform: translateY(10px) rotateZ(45deg);
}

.botopen {
  transform: translateY(-10px) rotateZ(-45deg);
}
</style>
