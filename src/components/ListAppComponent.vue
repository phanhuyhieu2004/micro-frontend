<script>
export default {
  name: "ListAppComponent",
  data() {
    return {
      icons: [
        'fa-brands fa-youtube fa-beat ', 'fa-brands fa-facebook fa-beat ', 'fa-brands fa-twitter  fa-beat',
        'fa-brands fa-instagram  fa-beat', 'fa-brands fa-linkedin  fa-beat', 'fa-brands fa-github  fa-beat',
        'fa-brands fa-pinterest  fa-beat', 'fa-brands fa-snapchat  fa-beat', 'fa-brands fa-tiktok  fa-beat',
        'fa-brands fa-reddit  fa-beat', 'fa-brands fa-whatsapp  fa-beat', 'fa-brands fa-telegram  fa-beat'
      ]
    };
  }
}
</script>

<template>

        <div class="q-pa-md" >
          <div class="q-gutter-xs row justify-center">
<!--            phần tử sẽ chiếm 3/12 của chiều rộng hàng (tức là 25% chiều rộng hàng)-->
            <div v-for="(icon, index) in icons" :key="index" class="col-3 flex flex-center">
              <q-btn round class="full-width" style="background: rgba(255, 255, 255, 0.33)">
                <q-icon :name="icon"/>
              </q-btn>
            </div>
          </div>
        </div>



</template>

<style scoped>
.fa-youtube::before {
  content: "\f167";
  color: red;
}

.fa-facebook::before {
  content: "\f09a";
  color: #0080ff;
}

.fa-twitter::before {
  content: "\f099";
  color: #74C0FC;
}

.fa-instagram::before {
  content: "\f16d";
  color: #F20587;
}

.fa-linkedin::before {
  content: "\f08c";
  color: #0B6BBF;
}

.fa-github::before {
  content: "\f09b";
}

.fa-pinterest::before {
  content: "\f0d2";
  color: #D9042B;
}

.fa-snapchat-ghost::before, .fa-snapchat::before {
  content: "\f2ab";
}

.fa-tiktok::before {
  content: "\e07b";
}

.fa-reddit::before {
  content: "\f1a1";
  color: #F25C05;
}

.fa-telegram-plane::before, .fa-telegram::before {
  content: "\f2c6";
  color: #23A5D9;
}

.q-gutter-xs {
  gap: 10px;
}

.full-width {
  width: fit-content !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 20px;
  transition: all 0.5s;
  border-radius: 15px;
}

.q-btn::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.full-width:hover {
  transform: translateX(15px);
 background: white !important;

}

@media (min-width: 0px) {
  .row > .col-3, .row > .col-xs-3 {
    height: auto;
    width: 20%;
  }
}



.q-col-3 {
  max-width: 25%; /* đảm bảo ô không vượt quá 25% chiều rộng */
}
</style>
