<template>
  <div>
    <b-modal id="formProceso" size="xl" v-bind:title="name" @ok="send">
     <b-row>
       <b-col sm>
         <b-form-group label="Descripcion del Proceso">
           <b-form-textarea type="text" placeholder="" v-model="text" rows="3" max-rows="6">

           </b-form-textarea>
         </b-form-group>
       </b-col>
     </b-row>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "formproceso1",
  props:{
      id: Number,
      name: String
  },
  data() {
    return {
      text: null
    };
  },
  methods: {
    send() {
      this.$emit("addProceso", { flujoid: this.id, text: this.text});
    }
  }
};
</script>
