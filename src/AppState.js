import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  menuItems: [{
    id: 0,
    name: 'Tri-Tip',
    price: 9.00,
    img: '//placehold.it/200x200'
  }, {
    id: 1,
    name: 'Shredded BBQ Beef',
    price: 9.00,
    img: '//placehold.it/200x200'
  },
  {
    id: 2,
    name: 'Pulled Pork',
    price: 7.00,
    img: '//placehold.it/200x200'
  }, {
    id: 3,
    name: 'Hot Dog',
    price: 4.00,
    img: '//placehold.it/200x200'
  },
  {
    id: 4,
    name: 'Loaded Fries',
    price: 9.00,
    img: '//placehold.it/200x200'
  }, {
    id: 5,
    name: 'Fries',
    price: 4.00,
    img: '//placehold.it/200x200'
  },
  {
    id: 6,
    name: 'Turkey Leg',
    price: 4.00,
    img: 'string'
  }],
  activeItem: {}
})
