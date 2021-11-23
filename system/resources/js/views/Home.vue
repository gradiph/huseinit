<template>
    <div class="bg-pink-400 dark:bg-gray-400 flex flex-wrap rounded-lg">
        <router-link to="/about">Go to About</router-link>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        Test
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data: () => ({
            body: document.querySelector('body'),
            darkTheme: false,
        }),

        methods: {
            applyTheme() {
                toggle.innerHTML = "☀️";
                this.body.classList.remove('text-gray-900');
                this.body.classList.add('text-gray-100');
                profile.classList.remove('bg-white');
                profile.classList.add('bg-gray-900');
            },

            changeTheme(isDarkTheme) {
                if (isDarkTheme) {
                    toggle.innerHTML = "☀️";
                    body.classList.remove('text-gray-900');
                    body.classList.add('text-gray-100');
                    profile.classList.remove('bg-white');
                    profile.classList.add('bg-gray-900');
                } else {
                    toggle.innerHTML = "🌙";
                    body.classList.remove('text-gray-100');
                    body.classList.add('text-gray-900');
                    profile.classList.remove('bg-gray-900');
                    profile.classList.add('bg-white');
                }
            },

            ...mapActions([
                'startLoading',
                'stopLoading',
            ]),
        },

        mounted() {
            this.stopLoading()
        },

        watch: {
            darkTheme(value) {
                changeTheme(value)
            },
        }
    }
</script>
