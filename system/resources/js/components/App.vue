<template>
    <router-view></router-view>

    <!-- Dark mode button -->
    <div class="absolute top-0 right-0 h-12 w-18 p-4">
		<button
            class="focus:outline-none"
            @click="toggleDarkMode"
        >
            <svg-icon
                type="mdi"
                :path="darkModeIcon"
            ></svg-icon>
        </button>
    </div>

    <!-- Loading Screen -->
    <div
        v-show="isLoading"
        class="h-screen w-screen absolute top-0 left-0 z-50 bg-gray-900 opacity-50 text-white text-center grid place-content-center"
    >
        <div>
            <svg-icon
                class="animate-spin"
                type="mdi"
                :path="mdiLoading"
                size="100"
            ></svg-icon>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@jamescoyle/vue-icon'
    import { mdiBrightness3, mdiBrightness5, mdiLoading } from '@mdi/js'
    import { mapActions, useStore } from 'vuex'
    import { computed } from 'vue'

    export default {
        components: {
            SvgIcon,
        },

        computed: {
            darkModeIcon() {
                return this.isDarkMode ? mdiBrightness3 : mdiBrightness5
            },
        },

        created () {
            this.startApp({
                name: this.appName,
                lang: this.lang,
            })
        },

        data: () => ({
            isDarkMode: false,
            mdiLoading,
        }),

        methods: {
            toggleDarkMode() {
                this.isDarkMode = !this.isDarkMode
                document.documentElement.classList.toggle('dark')
            },

            ...mapActions([
                'startApp',
            ]),
        },

        props: [
            'appName',
            'lang',
        ],

        setup () {
            const store = useStore()

            return {
                isLoading: computed(() => store.state.isLoading),
                startLoading: () => store.dispatch('startLoading'),
                stopLoading: () => store.dispatch('stopLoading'),
            }
        },
    }
</script>
