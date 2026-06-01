import HomeController from './HomeController'
import ProjectController from './ProjectController'
import ContactController from './ContactController'
const Portfolio = {
    HomeController: Object.assign(HomeController, HomeController),
ProjectController: Object.assign(ProjectController, ProjectController),
ContactController: Object.assign(ContactController, ContactController),
}

export default Portfolio