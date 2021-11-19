<template>
    <h1>Hi</h1>
    <p>answer is {{ answer }}</p>

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
</template>

<script>
    export default {
        data: () => ({
            answer: '...',
        }),

        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        axios({
                            method: 'post',
                            url: '/login',
                            data: {
                                email: 'cmraz@example.com',
                                password: 'password',
                            }
                        })
                          .then(response => {
                            this.answer = response.data
                          })
                          .catch(error => {
                            this.answer = 'Error! Could not reach the API. ' + error
                          })
                    })
            },

            user() {
                axios.get('/api/user')
                    .then(response => {
                        this.answer = response.data
                    })
            },
        }
    }
</script>
