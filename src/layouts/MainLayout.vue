<template>
  <div>
    <q-btn @click="toggleCustomizeMode" style="background: rgba(255, 255, 255, 0.33);">
      <i :class="customizeMode ? 'fas fa-save fa-beat' : 'fas fa-cog fa-beat'"></i>
    </q-btn>

    <GridLayout
      v-model:layout="layout"
      :row-height="30"

    :is-draggable="customizeMode"
    :is-resizable="customizeMode"
    responsive

    >
    <template #item="{ item }">
      <div :class="['component-container', `component-${item.i}`]">
        <component :is="getComponent(item.i)" />
      </div>
    </template>
    </GridLayout>
  </div>
</template>



<script>
import { GridLayout } from 'grid-layout-plus';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'GridLayoutComponent',
  components: {
    GridLayout,
  },
  data() {
    return {
      layout: this.loadLayout(),
      customizeMode: false,
      modules: {
        0: defineAsyncComponent(() => import('commentApp/VueAppLoader')),
        1: defineAsyncComponent(() => import('commentApp/VueAppLoader1')),
        2: defineAsyncComponent(() => import('commentApp/VueAppLoader2')),
        3: defineAsyncComponent(() => import('commentApp/VueAppLoader3')),
        4: defineAsyncComponent(() => import('commentApp/VueAppLoader4')),
        5: defineAsyncComponent(() => import('commentApp/VueAppLoader5')),
        6: defineAsyncComponent(() => import('commentApp/VueAppLoader6')),
      },
    };
  },
  methods: {
    toggleCustomizeMode() {
      if (this.customizeMode) {
        this.saveLayout();
      }
      this.customizeMode = !this.customizeMode;
    },
    getComponent(i) {
      return this.modules[i];
    },
    saveLayout() {
      localStorage.setItem('grid-layout', JSON.stringify(this.layout));
      console.log('Layout saved:', this.layout);
    },
    loadLayout() {
      const savedLayout = localStorage.getItem('grid-layout');
      try {
        return savedLayout ? JSON.parse(savedLayout) : this.defaultLayout();
      } catch (e) {
        console.error('Error loading layout:', e);
        return this.defaultLayout();
      }
    },
    defaultLayout() {
      return [
        { x: 0, y: 0, w: 2, h: 5, i: '0', static: false },
        { x: 2, y: 0, w: 2, h: 5, i: '1', static: false },
        { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
        { x: 6, y: 0, w: 2, h: 5, i: '3', static: false },
        { x: 8, y: 0, w: 2, h: 5, i: '4', static: false },
        { x: 0, y: 5, w: 2, h: 5, i: '5', static: false },
        { x: 2, y: 5, w: 2, h: 5, i: '6', static: false },
      ];
    },
  },
  watch: {
    layout: {
      handler(newLayout) {
        if (this.customizeMode) {
          this.saveLayout();
        }
      },
      deep: true,
    },
  },
};
</script>


<style>
body {
  background-image: url("https://github.com/phanhuyhieu2004/Lover/blob/update19/3/src/main/webapp/image.gif?raw=true");
  background-size: cover;
}



.component-container {
  margin: 50px auto;
}
</style>

