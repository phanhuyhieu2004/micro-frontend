<script>
export default {
  name: "NewsComponent",
  data() {
    return {
      newsData: [
        {
          title: "Why crypto mania is reaching new heights",
          source: "The Economist",
          topic: "",
          time: "2 hours ago",
          iconUrl: "https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/overpopulation-unscreen.gif?raw=true",
          imageUrl: "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/20241116_FNP502.jpg"
        },
        {
          title: "Crypto regulations intensify globally",
          source: "The Economist",
          topic: "",
          time: "5 hours ago",
          iconUrl: "https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/football-unscreen.gif?raw=true",

          imageUrl: "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/20241116_FNP502.jpg"
        },
        {
          title: "Blockchain adoption in healthcare",
          source: "Tech Today",
          topic: "",
          time: "1 day ago",
          iconUrl: "https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/heartbeat-unscreen.gif?raw=true",

          imageUrl: "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/20241116_FNP502.jpg"
        },
        {
          title: "Future of AI in the workforce",
          source: "Tech Today",
          topic: "",
          time: "2 days ago",
          iconUrl: "https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/coding-unscreen.gif?raw=true",

          imageUrl: "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/20241116_FNP502.jpg"
        }
      ]
    }
  }
}
</script>

<template>

  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded v-for="(news, index) in newsData" :key="index" style="background: rgba(255, 255, 255, 0.33);
  border-radius: 10px;margin: 10px 0;
  padding: 15px;
  transition: 0.5s">
      <div class="text-h6 small" ><span>{{ news.source }}</span> •<img :src="news.iconUrl" alt="img-icon" style="width: 30px;">
       <span> {{ news.topic }}</span> • <span>{{ news.time }}</span>
      </div>
      <div class="text-h6">{{ news.title }}</div>
      <template v-slot:action>
        <img
          src="https://cdn.quasar.dev/img/mountains.jpg"
          style="width: 100px; height: 64px; margin-left: auto;border-radius: 10px;"
        >
      </template>
    </q-banner>
  </div>


</template>


<style scoped>

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


@media (max-width: 550px) {
  .text-h6 {
    font-size: 0.5rem !important;

  }
}
</style>
