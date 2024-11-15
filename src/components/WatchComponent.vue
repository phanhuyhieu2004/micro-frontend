<template>

        <div class="q-pa-md q-gutter-md  shadow-2 rounded-borders watch"
             style="position: relative;top:100px;background: rgba(255, 255, 255, 0.3);margin: 20px auto;">
          <!--          q-pa-md:padding trung bình;q-gutter-md:khoảng cách giua các pt;-->
          <div class="q-gutter-xs flex justify-center" style="padding: 20px">
            <!--            q-gutter-xs:  khoảng cách nhỏ giữa các pt.-->
            <div v-for="(timePart, index) in time" :key="index" class="flex items-center">
              <div class="time-text"  data-aos="flip-left">
                <span class="num">{{ timePart.value }}</span>
                <span class="text">{{ timePart.label }}</span>
              </div>
              <span v-if="index < time.length - 1" class="colon">:</span>
            </div>
            <div :class="['am_pm', amPm === 'AM' ? 'am' : 'pm']"></div>
          </div>
        </div>

</template>

<script>
export default {
  data() {
    return {
      time: [
        {value: "08", label: "Hours"},
        {value: "45", label: "Minutes"},
      ],
      amPm: "AM"
    };
  },
  methods: {
    updateTime() {
      const date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      this.amPm = hour < 12 ? "AM" : "PM";
      hour = hour > 12 ? hour - 12 : hour;
      // Nếu giờ lớn hơn 12 (tức là chiều), chuyển đổi giờ về hệ 12 giờ.
      hour = hour === 0 ? 12 : hour;

      this.time[0].value = hour < 10 ? "0" + hour : hour;
      this.time[1].value = min < 10 ? "0" + min : min;
      console.log("giờ", this.time);
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }
};
</script>

<style scoped>
.q-gutter-x-md > *, .q-gutter-md > * {
  margin-left: 0 !important;
}

.q-gutter-md {
  margin-left: 0 !important;
}

.q-pa-md.q-gutter-md.bg-white.shadow-2.rounded-borders {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  max-width: 500px;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: relative;
}

.q-page-container {
  min-height: 100vh;
  width: 100%;



}

.bg-gradient {
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.bg-dark {
  background-color: #24292D;
}

.time-text {
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  background-size: 300% 100%;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-position 0.4s ease-in-out;
}

.time-text:hover {
  background-position: 100% 0;
}

.num {
  font-size: 2rem;
  font-weight: 600;
}

.text {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 2em;
  color: #322c2c;
}

.colon {
  font-size: 4rem;
  margin: 0 10px;
}

.am_pm {
  position: absolute;
  top: -150px;
  right: -100px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  height: 11em;
  width: 11em;
  background-size: cover;

}

.am {
  background-image: url("https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/sun-2--unscreen.gif?raw=true");

}
.pm {
  background-image: url("https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/night-unscreen.gif?raw=true");

}

.bg-dark .time-text {
  background: #24292D;
}

.bg-dark .time-text .num,
.bg-dark .colon,
.bg-dark .am_pm {
  color: #fff;
}

@media (max-width: 1200px) {

  .am_pm {
    left: 50%;
    top: -20%;
    transform: translate(-50%, -50%);
  }

  .q-gutter-x-md > *, .q-gutter-md > * {
    margin-left: 0 !important;
  }

  .row, .column, .flex {
    display: flex;
    flex-wrap: nowrap !important;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .time .time-colon .time-text {
    width: 90px;

  }
}
</style>
