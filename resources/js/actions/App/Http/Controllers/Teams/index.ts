import TeamController from './TeamController'
import TeamMemberController from './TeamMemberController'
import TeamInvitationController from './TeamInvitationController'
const Teams = {
    TeamController: Object.assign(TeamController, TeamController),
TeamMemberController: Object.assign(TeamMemberController, TeamMemberController),
TeamInvitationController: Object.assign(TeamInvitationController, TeamInvitationController),
}

export default Teams