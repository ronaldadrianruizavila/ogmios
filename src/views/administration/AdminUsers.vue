<template>
    <div>
        <admin-user-dialog></admin-user-dialog>
    </div>
</template>
<script>
    import AdminUserDialog from '../../components/administration/AdminUserDialog'
    export default {
        name:'admin-users',
        components:{
            AdminUserDialog
        }
    }
</script>
