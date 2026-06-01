import DashboardController from './DashboardController'
import AboutController from './AboutController'
import SkillController from './SkillController'
import ProjectController from './ProjectController'
import ServiceController from './ServiceController'
import TestimonialController from './TestimonialController'
import MessageController from './MessageController'
import SettingController from './SettingController'
import MediaController from './MediaController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
AboutController: Object.assign(AboutController, AboutController),
SkillController: Object.assign(SkillController, SkillController),
ProjectController: Object.assign(ProjectController, ProjectController),
ServiceController: Object.assign(ServiceController, ServiceController),
TestimonialController: Object.assign(TestimonialController, TestimonialController),
MessageController: Object.assign(MessageController, MessageController),
SettingController: Object.assign(SettingController, SettingController),
MediaController: Object.assign(MediaController, MediaController),
}

export default Admin