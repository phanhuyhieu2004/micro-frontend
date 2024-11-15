<script>
export default {
  name: "SearchComponent"
}
</script>

<template>




        <div >
          <q-input  color="grey-3"  rounded standout label-color="orange" placeholder="Placeholder" style="width: 500px;
  max-width: calc(100% - 20px);background-color: rgba(255, 255, 255, 0.33);border-radius: 999px">
            <!--              v-slot:prepend chèn vào bên trái.-->
            <!--              v-slot:append chèn vào bên phải.-->
            <template v-slot:prepend>
              <img src="https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/google.png?raw=true" style="width: 20px;">
            </template>
            <template v-slot:append>
              <img src="https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/searching-unscreen.gif?raw=true" style="width: 30px;">
            </template>
          </q-input>
        </div>


</template>
<style scoped>
.q-gutter-x-md, .q-gutter-md {
  margin-left: -16px !important;
}
.q-layout.q-layout--standard{
  min-height: fit-content !important;
}
.q-field__native.q-placeholder{
  background: transparent !important;
  color:#000 !important;
}
.bg-white {
  background: red !important;
}
.q-field--standout.q-field--rounded .q-field__control {
  border-radius: 10px !important;
}

</style>
