import Vue from "vue";
import MdButton from "./MdButton.vue"
const Components={
    MdButton
}
Object.keys(Components).forEach(name=>{
    Vue.component(name, Components[name]);
});
export default Components;