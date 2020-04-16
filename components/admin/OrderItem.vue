<template>
    <tr>
        <td class="name"><img :src="item.image" alt="image"> {{item.name}}</td>
        <td>${{item.price}}</td>
        <td>{{item.quantity}}</td>
        <td>${{(item.price * item.quantity).toFixed(2)}}</td>
        <td><span class="badge badge-primary">Received</span></td>
    </tr>
</template>

<script>
export default {
    props: ['item']
}
</script>