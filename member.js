function skillsMember(){
    return{
        restrict:"E",
        templateUR :'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'m'
        }
    }
}