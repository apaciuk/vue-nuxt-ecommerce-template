<template>
    <div class="recent-orders-box">
        <div class="title">
            <h3 v-b-toggle="`collapse-${data.id}`">
                <i class="fas fa-expand-arrows-alt"></i>
                {{data.details.fullName}}'s Orders ({{data.items.length}} Items)
            </h3>
            <ul>
                <li><a href="#">View</a></li>
                <li><a href="#">Edit</a></li>
                <li @click="deleteDoc(data.id)"><button>Delete</button></li>
            </ul>
        </div>

        <b-collapse :id="`collapse-${data.id}`">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Unit Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <OrderItem v-for="(item, j) in data.items" :key="j" :item="item"></OrderItem>
                    </tbody>
                </table>
            </div>
        </b-collapse>
    </div>
</template>

<script>
import OrderItem from './OrderItem';
import firebase from '../../plugins/firebase';

export default {
    components: {
        OrderItem
    },
    props: ['data'], 
    methods: {
        deleteDoc(id){
            const db = firebase.firestore();
            const deleteDoc = db.collection('orders').doc(id);
            deleteDoc.delete();
            this.$toast.warning(`Deleted`, {
                icon: 'fas fa-trash'
            });
            setTimeout(() => {window.location.reload(true)}, 1500)
        }
    }
}
</script>

<style scoped>
h3{
    cursor: pointer;
}
</style>