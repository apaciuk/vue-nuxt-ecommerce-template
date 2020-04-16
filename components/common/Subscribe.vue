<template>
    <!-- Start Subscribe Area -->
    <section class="subscribe-area ptb-60">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="newsletter-content">
                        <h3>Subscribe to our newsletter</h3>
                        <p>A short sentence describing what someone will receive by subscribing</p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <form class="newsletter-form" v-on:submit.prevent>
                        <input type="email" class="form-control" placeholder="Enter your email address" id="email" v-model="subscriptions.email" autocomplete="off">
                        <button @click="subscribe" type="submit">Subscribe!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Subscribe Area -->
</template>
<script>
import firebase from '../../plugins/firebase';
export default {
    data(){
        return{
            subscriptions: {
                email: '',
                createdAt: new Date()
            }
        }
    },
    methods: {
        subscribe(){
            if(this.subscriptions.email != '' && this.validateEmail(this.subscriptions.email)){
                const db = firebase.firestore();
                const dbOrderRef = db.collection('subscriptions');
                dbOrderRef.add(this.subscriptions);
                this.$toast.success(`Thanks for your subscriptions`, {
                    icon: 'fas fa-user-check'
                });
                this.subscriptions.email = ''
            } else {
                this.$toast.error(`Please fillup with a valid email`, {
                    icon: 'fas fa-times'
                });
            }
        },
        validateEmail(email) 
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>