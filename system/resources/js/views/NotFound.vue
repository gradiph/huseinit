<template>
    <div>
        Notfound Page
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    
    export default {
        created () {
            this.$router.replace({ path: '/404' })
        },

        data: () => ({
            //
        }),

        methods: {
            ...mapActions([
                'stopLoading',
            ]),
        },

        mounted() {
            this.stopLoading()
        }
    }
</script>
