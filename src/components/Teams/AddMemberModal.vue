<script setup>
    import { useTeamStore } from "../../stores/TeamStore"
    import Modal from "./Modal.vue"
    import { ref } from "vue"
    let team = useTeamStore();
    let showModal = ref(false)
</script>

<template>
    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" 
                :disabled="! team.spotsRemaining"
                @click="showModal = true"
                >Add Member ({{ team.spotsRemaining }} Spots Left)
    </button>
    <Teleport to="body">
        <Modal :show="showModal" @closeModal="showModal = false" >
            <p>Need to add a member to the team</p>
            <form action="" class="mt-6">
                <div class="flex gap-2">
                    <input type="email" placeholder="Email address..." class="flex-1">
                    <button>Add</button>
                </div>
            </form>
        </Modal>
    </Teleport>
</template>