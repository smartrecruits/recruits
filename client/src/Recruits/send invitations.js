class Invitation {
    constructor(interviewee, assessment) {
      this.interviewee = interviewee;
      this.assessment = assessment;
    }
  }
  
  class InvitationList {
    constructor() {
      this.invitations = [];
    }
  
    sendInvitation(interviewee, assessment) {
      const invitation = new Invitation(interviewee, assessment);
      this.invitations.push(invitation);
    }
  
    sendInvitationsBulk(interviewees, assessment) {
      for (let interviewee of interviewees) {
        this.sendInvitation(interviewee, assessment);
      }
    }
  }
  