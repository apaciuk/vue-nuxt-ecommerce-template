<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>404 Not Found</li>
                </ul>
            </div>
        </div>

        <section class="error-area ptb-60">
            <div class="container">
                <div class="error-content">
                    <img src="../assets/img/404.png" alt="error">

                    <h3>Page Not Found</h3>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                    <nuxt-link to="/" class="btn btn-light">Go to Home</nuxt-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error-layout'
}
</script>