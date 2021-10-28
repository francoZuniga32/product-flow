<template>
  <div>
    <formproducto v-on:agregarProducto="agregarProducto"></formproducto>
    <hr />
    <el-table :data="productos" style="width: 100%">
      <el-table-column prop="nombre" label="Nombre" width="180">
      </el-table-column>
      <el-table-column prop="peso" label="Peso" width="180"> </el-table-column>
      <el-table-column prop="alto" label="Alto"> </el-table-column>
      <el-table-column prop="ancho" label="Ancho"> </el-table-column>
      <el-table-column prop="largo" label="largo"> </el-table-column>
      <el-table-column prop="categoria" label="Categoria"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import formproducto from "../components/producto/form.vue";
export default {
  name: "productos",
  components: {
      formproducto
  },
  data() {
    return {
      productos: [
        {
          nombre: "pepe",
          peso: 14.5,
          alto: 30,
          ancho: 30,
          largo: 20,
          categoria: "pepe"
        }
      ]
    };
  },
  mounted() {
    this.productos = this.productos.concat(this.$store.state.productos);
  },
  methods:{
      agregarProducto(producto){
          console.log(producto); 
          this.$store.commit("addProducto",producto);
          this.productos.push(producto);
      }
  }
};
</script>
