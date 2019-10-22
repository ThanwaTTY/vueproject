<template>
    <div>
        components/member/page
        {{$route.path}}
    </div>
</template>

<script>
export default {
    created(){
        alert(this.$route.path);
    }
}
</script>

<style>

</style>