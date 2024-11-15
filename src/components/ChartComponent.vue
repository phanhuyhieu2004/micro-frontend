<template>

        <q-card style="width: 600px; max-width: calc(100% - 20px);">
          <q-card-section>
            <div class="text-h6" style="display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;">Statistical Chart <img src="https://github.com/phanhuyhieu2004/TKW/blob/TKW-Exercise/images/evolution-unscreen.gif?raw=true" style="width: 30px;"> </div>
          </q-card-section>
          <q-card-section class="chart-container" rounded>
            <Bar :data="chartData" :options="chartOptions" />
          </q-card-section>
        </q-card>

</template>

<script>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'ChartComponent',
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: '#42A5F5',
            data: [400, 900, 300, 700, 800, 500]
          },
          {
            label: 'Expense',
            backgroundColor: '#FFA726',
            data: [150, 250, 800, 470, 600, 700]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 1000,
            ticks: {
              stepSize: 100,
              callback: function(value) {
                return value;
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Revenue and Expense Chart'
          }
        }
      }
    }
  }
}
</script>

<style scoped >
.chart-container {
  height: 500px;
  width: 100%;
}

.q-card {
  max-width: 600px;
  margin: auto;
}

</style>
