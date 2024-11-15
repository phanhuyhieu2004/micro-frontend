<script>
export default {
  name: "AppAccess",


}
</script>

<template>

  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="row items-center" style="background: rgba(255, 255, 255, 0.33); border-radius: 10px; margin: 30px; padding: 0px 15px; transition: 0.5s;">

      <template v-slot:avatar>
        <q-btn round icon="fab fa-youtube fa-beat"  class="full-width" style="background: white;margin: 10px;color: red" >
        </q-btn>
      </template>

      <div>
        <div class="text-h6">Youtube</div>
        <div class="text-h6 small"><img src="https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/time-unscreen.gif?raw=true" class="img-access">accessed 14 minutes ago</div>
      </div>
    </q-banner>
    <q-banner inline-actions rounded class="row items-center" style="background: rgba(255, 255, 255, 0.33); border-radius: 10px; margin: 30px; padding: 0px 15px; transition: 0.5s;">

      <template v-slot:avatar>
        <q-btn round icon="fab fa-facebook fa-beat"  class="full-width" style="background: white;margin: 10px;color:#0080ff" >

        </q-btn>
      </template>

      <div>
        <div class="text-h6">Facebook</div>

        <div class="text-h6 small"> <img src="https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/time-unscreen.gif?raw=true" class="img-access"> accessed 30 minutes ago</div>
      </div>
    </q-banner>
    <q-banner inline-actions rounded class="row items-center" style="background: rgba(255, 255, 255, 0.33); border-radius: 10px; margin: 30px; padding: 0px 15px; transition: 0.5s;">

      <template v-slot:avatar>
        <q-btn round icon="fab fa-tiktok fa-beat"  class="full-width" style="background: #000000;margin: 10px;color: white" >

        </q-btn>
      </template>

      <div>
        <div class="text-h6 ">Tiktok</div>
        <div class="text-h6 small"><img src="https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/time-unscreen.gif?raw=true" class="img-access"> accessed 1 hour ago</div>
      </div>
    </q-banner>
  </div>

</template>

<style scoped>
.full-width {
  width: fit-content !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 20px;
  transition: all 0.5s;
  border-radius: 15px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.bg-gradient {
  background: linear-gradient(160deg, #0093E9, #80D0C7);
}
.q-banner.row.items-center.rounded-borders:hover{
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  transform: translateY(-15px);
}

.text-h6 {
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0125em;
}
.text-h6.small{
  font-size: 0.75rem;
  color: #686868;
}


.img-access{
  width: 30px;
}
@media (max-width: 550px) {
  .text-h6 {
    flex-direction: column;
    font-size: 0.75rem;

  }
}
</style>
