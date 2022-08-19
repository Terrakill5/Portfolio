import { defineStore } from "pinia";

export const useLightStore = defineStore("light", {
    state: () => ({
        lightMode: false,
    }),
    getters: {
        isLight: (state) => state.lightMode,
    },
    actions: {
        changeLight() {
            if(this.isLight) {
                this.lightMode = false;
            }
            else {
                this.lightMode = true;
            }
        },
        change(valor) {
            this.lightMode = valor;
        }
    }
})