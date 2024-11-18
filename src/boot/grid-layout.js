// src/boot/grid-layout.js
import { GridLayout, GridItem } from 'grid-layout-plus'

export default async ({ app }) => {
  // Đăng ký các component của grid-layout-plus toàn cục
  app.component('GridLayout', GridLayout)
  app.component('GridItem', GridItem)
}
