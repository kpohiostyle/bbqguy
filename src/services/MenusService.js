import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class MenusService {
  async getMenuItems() {
    const res = await api.get('api/menuItems')
    AppState.menuItems = res.data
  }
}

export const menusService = new MenusService()
