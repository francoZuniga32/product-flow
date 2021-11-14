<template>
  <div>
    <b-button v-b-modal.modal-1>
      <span class="material-icons">
        add
      </span>
    </b-button>

    <b-modal id="modal-1" size="xl" title="Entrada" @ok="cargarEntrada">
      <b-row>
        <b-col sm>
          <b-form-group label="Remito">
            {{ sucursal }} -
            <el-input-number v-model="remito"></el-input-number>
          </b-form-group>
        </b-col>
        <b-col sm>
          <b-form-group label="Fecha">
            <el-date-picker
              v-model="fecha"
              type="date"
              placeholder="Pick a day"
            >
            </el-date-picker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm>
          <b-form-group label="Encargado">
            <el-select v-model="encargado" placeholder="Categoria">
              <el-option
                v-for="item in selectEncargado"
                :key="item.value"
                :label="item.text"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </b-form-group>
        </b-col>
        <b-col sm>
          <b-form-group label="Productos">
            <el-select v-model="productos" multiple placeholder="Categoria">
              <el-option
                v-for="(item, i) in selectProductos"
                :key="i"
                :label="item.nombre"
                :value="item.nombre"
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
  name: "formentrada",
  data() {
    return {
      sucursal: 1,
      remito: null,
      fecha: null,
      encargado: null,
      productos: null,
      flujo: [],
      selectProductos: [],
      selectEncargado:[]
    };
  },
  mounted() {
    this.sucursal = this.zfill(this.sucursal, 4);
    this.selectProductos = this.$store.state.productos;
    this.selectEncargado = this.$store.state.encargados;
  },
  methods: {
    zfill(number, width) {
      var numberOutput = Math.abs(number); /* Valor absoluto del número */
      var length = number.toString().length; /* Largo del número */
      var zero = "0"; /* String de cero */

      if (width <= length) {
        if (number < 0) {
          return "-" + numberOutput.toString();
        } else {
          return numberOutput.toString();
        }
      } else {
        if (number < 0) {
          return "-" + zero.repeat(width - length) + numberOutput.toString();
        } else {
          return zero.repeat(width - length) + numberOutput.toString();
        }
      }
    },
    cargarEntrada(){
        console.log(this.productos);
       this.$emit("addEntrada", { remito:`${ this.zfill(this.sucursal, 4) } - ${ this.zfill(this.remito, 8) }`, fecha: this.fecha, encargado: this.encargado, productos: this.productos});
    }
  }
};
</script>
