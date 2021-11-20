<template>
    <h1>Hi</h1>
    <p>answer is {{ count }}</p>

    <button
        @click="csrf"
    >
        csrf
    </button>

    <button
        @click="login"
    >
        login
    </button>

    <button
        @click="user"
    >
        user
    </button>

    <button
        @click="logout"
    >
        logout
    </button>

    <button
        @click="increaseCount"
    >
        increaseCount
    </button>

    <div>
        <router-link to="/">Go to Home</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        computed: {
            ...mapState([
                'count',
            ])
        },
        data: () => ({
            answer: '...',
        }),

        methods: {
            csrf() {
                axios.get('/huseinit/sanctum/csrf-cookie')
                    .then(response => {
                        this.answer = response.data
                    })
            },

            login() {
                axios({
                    method: 'post',
                    url: '/huseinit/login',
                    data: {
                        email: 'cmraz@example.com',
                        password: 'password',
                        remember: '1',
                    }
                })
                  .then(response => {
                      this.answer = response.data
                  })
                  .catch(error => {
                      this.answer = 'Error! Could not reach the API. ' + error
                  })
            },

            logout() {
                axios.post('/huseinit/logout')
                    .then(response => {
                        this.answer = response.data
                    })
            },

            user() {
                axios.get('/huseinit/api/user')
                    .then(response => {
                        this.answer = response.data
                    })
            },

            ...mapActions([
                'increaseCount',
            ]),
        }
    }
</script>
