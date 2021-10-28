<template>
  <div>
    <b-button v-b-modal.modal-1>
      <span class="material-icons">
        add
      </span>
    </b-button>

    <b-modal id="modal-1" size="xl" title="Producto" @ok="send">
     <b-row>
       <b-col sm>
         <b-form-group label="Nombre">
           <b-form-input type="text" placeholder="Ingrese el Nombre del Producto" v-model="nombre">

           </b-form-input>
         </b-form-group>
       </b-col>
       <b-col sm>
         <b-form-group label="Peso">
           <el-input-number
            v-model="peso"
            :precision="2"
            :step="0.1"
          ></el-input-number>
         </b-form-group>
       </b-col>
     </b-row>
     <b-row>
       <b-col sm>
         <b-form-group label="Alto">
           <el-input-number
            v-model="alto"
            :precision="2"
            :step="0.1"
          ></el-input-number>
         </b-form-group>
       </b-col>
       <b-col sm>
         <b-form-group label="Ancho">
           <el-input-number
            v-model="ancho"
            :precision="2"
            :step="0.1"
          ></el-input-number>
         </b-form-group>
       </b-col>
     </b-row>
     <b-row>
       <b-col sm>
         <b-form-group label="Largo">
           <el-input-number
            v-model="largo"
            :precision="2"
            :step="0.1"
          ></el-input-number>
         </b-form-group>
       </b-col>
       <b-col sm>
         <b-form-group label="Catetegoria">
            <el-select v-model="categoria" placeholder="Categoria">
            <el-option
              v-for="item in catetegorias"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
         </b-form-group>
       </b-col>
     </b-row>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "formproducto",
  data() {
    return {
      nombre: "",
      peso: "",
      alto: 0,
      ancho: 0,
      largo: 0,
      categoria: "",
      catetegorias: [
        {
          value: "electronica",
          lebel: "electronica"
        },
        {
          value: "metalurguica",
          lebel: "metalurguica"
        }
      ]
    };
  },
  methods: {
    send() {
      this.$emit("agregarProducto", {
        nombre: this.nombre,
        peso: this.peso,
        alto: this.alto,
        ancho: this.ancho,
        largo: this.largo,
        categoria: this.categoria
      });
      this.nombre = "";
      this.peso = 0;
      this.alto = 0;
      this.ancho = 0;
      this.largo = 0;
      this.categoria = "";
    }
  }
};
</script>
