import Portfolio from './Portfolio'
import Admin from './Admin'
import Settings from './Settings'
import Teams from './Teams'
const Controllers = {
    Portfolio: Object.assign(Portfolio, Portfolio),
Admin: Object.assign(Admin, Admin),
Settings: Object.assign(Settings, Settings),
Teams: Object.assign(Teams, Teams),
}

export default Controllers