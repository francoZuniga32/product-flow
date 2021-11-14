<template>
  <div>
    <h1>Proceso 1</h1>
    <hr />
    <formularioProceso1
      v-on:addProceso="addProceso"
      :id="flujo"
      :name="'proceso-1'"
    ></formularioProceso1>
    <tablaflujos v-on:cargar="cargar" :flujos="flujos"></tablaflujos>
  </div>
</template>
<script>
import tablaflujos from "../components/flujo/tabla.vue";
import formularioProceso1 from "../components/flujo/formulario.vue";
export default {
  components: {
    tablaflujos,
    formularioProceso1
  },
  data() {
    return {
      flujos: [],
      productos: [],
      encargados: [],
      flujo: null
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      this.flujos = [];
      this.$store.state.flujos.forEach(element => {
        if(!element.p1){
          this.flujos.push({
            remito: this.$store.state.entradas[element.identrada].remito,
            producto: this.$store.state.entradas[element.identrada].producto,
            fecha: this.$store.state.entradas[element.identrada].fecha
          })
        }
      });
    },
    cargar(id) {
      this.flujo = id;
      this.$bvModal.show("formProceso");
    },
    addProceso(data) {
      console.log(data);
      this.$store.commit("addProceso1", data);
      console.log(this.$store.state.flujos);
      this.load();
    }
  }
};
</script>
