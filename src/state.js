import Vue from 'vue';

export const state = Vue.observable({ docs: [], src: '' });

export const mutations = {
  setSrc(src) {
    console.log('Setting "src": ', src);
    state.src = src;
  },
};
