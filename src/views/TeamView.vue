<script setup>
    import TeamMembers from "../components/Teams/TeamMembers.vue"
    import TeamHeader from "../components/Teams/TeamHeader.vue"
    import TeamFooter from "../components/Teams/TeamFooter.vue"
    import { useTeamStore } from "../stores/TeamStore"
    import Modal from "../components/Teams/Modal.vue"
    import { ref } from "vue"
    let team = useTeamStore();
    team.fill()
    let showModal = ref(false)
</script>

<template>
    <div class="flex justify-between flex-col">
        <TeamHeader @openModal="showModal = true" />
    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />        
    </div>
        <TeamFooter />
    </div>
    <Modal :show="showModal" @closeModal="showModal = false" >
        <p>Need to add a member to the team</p>
        <form action="" class="mt-6">
            <div class="flex gap-2">
                <input type="email" placeholder="Email address..." class="flex-1">
                <button>Add</button>
            </div>
        </form>
    </Modal>
</template>