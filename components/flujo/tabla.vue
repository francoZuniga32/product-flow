<template>
    <el-table :data="flujos" style="width: 100%" >
      <el-table-column prop="remito" label="remito">
      </el-table-column>
      <el-table-column prop="producto" label="producto">
      </el-table-column>
      <el-table-column prop="fecha" label="fecha">
      </el-table-column>
      <el-table-column
        label="Operaciones"
        width="120">
        <template slot-scope="scope">
            <el-button @click="cargar(scope.$index)" type="primary" icon="el-icon-circle-plus-outline" circle>
            </el-button>
        </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: 'tablaflujo',
    props:{
        flujos: Array
    },
    methods:{
        cargar(id){
            this.$emit("cargar", id);
        }
    }
}
</script>