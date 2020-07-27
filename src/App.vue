<template>
    <div style="display: flex; align-content: center; justify-content: center">
        <div>
            <router-link to="/">Main page</router-link>
        </div>
        <div style="margin: 0 20px"></div>
        <div>
            <router-link to="/payment">Payment page</router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'App'
}
</script>
