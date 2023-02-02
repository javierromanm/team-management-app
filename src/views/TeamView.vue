<script setup>
    import TeamMembers from "../components/Teams/TeamMembers.vue"
    import TeamHeader from "../components/Teams/TeamHeader.vue"
    import TeamFooter from "../components/Teams/TeamFooter.vue"
    //import team from "../team.json"
    import { useTeamStore } from "../stores/TeamStore"
    let team = useTeamStore();
    team.fill()
    setTimeout(()=>{
        team.grow(3)
    }, 3000)
</script>

<template>
    <div class="flex justify-between flex-col">
    <TeamHeader />
    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
        <TeamMembers />        
    </div>
    <TeamFooter />
    </div>
</template>