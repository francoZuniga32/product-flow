<template>
  <div>
    <h1>Entradas</h1>
    <formentrada v-on:addEntrada="addEntrada"></formentrada>
    <hr />
    <el-table :data="entradas" style="width: 100%">
      <el-table-column prop="remito" label="remito" width="180">
      </el-table-column>
      <el-table-column prop="fecha" label="Fecha" width="180">
      </el-table-column>
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
  methods: {
    addEntrada(entrada) {
      console.log(entrada.fecha.toUTCString());
      this.$store.commit("addEntrada", {remito: entrada.remito, fecha: entrada.fecha.toUTCString(), encargado: this.$store.state.encargados[entrada.encargado].text, producto: entrada.productos.join('-')});
      var identrada = this.$store.state.entradas.length;
      var id = this.$store.state.flujos.length;
      this.$store.commit("addFlujo", {
        id: id,
        identrada: identrada - 1,
        p1: null,
        p2: null,
        p3: null,
        p4: null,
        p5: null,
        p6: null,
        reproceso: false,
        reprocesoid: null
      });
      
    }
  }
};
</script>
