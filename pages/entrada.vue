<template>
  <div>
    <h1>Entradas</h1>
    <formentrada v-on:addEntrada="addEntrada"></formentrada>
    <hr />
    <el-table :data="entradas" style="width: 100%">
      <el-table-column prop="remito" label="remito" width="180">
      </el-table-column>
      <el-table-column prop="fecha" label="Fecha" width="180"> </el-table-column>
      <el-table-column prop="encargado" label="Encargado"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import formentrada from "../components/entrada/form.vue";
export default {
  name: "entrada",
  components: {
    formentrada
  },
  data() {
    return {
      entradas: []
    };
  },
  mounted() {
    this.entradas = this.$store.state.entradas;
  },
  methods:{
      addEntrada(entrada){
          console.log(entrada);
          this.entradas.push(entrada);
          this.$store.commit('addEntrada', entrada);
      }
  }
};
</script>
