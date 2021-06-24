import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  menuItems: [{
    name: 'Tri-Tip',
    price: 9.00,
    img: 'string'
  }, {
    name: 'Shredded BBQ Beef',
    price: 9.00,
    img: 'sting'
  }]
})
