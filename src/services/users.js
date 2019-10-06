export default {
    state:{
        dialog:false,
        editMode:false,
        user:{
            uid:null,
            email:'',
            username:''
        }
    },
    mutations:{
        toggleUserDialog:(state,data)=>{
            state.dialog = !state.dialog;
            state.editMode = data.dialog;
            state.user = data.user;
        }
    },
    getters:{
        userDialog:(state)=>{
            return state.dialog
        },
        userForEdit:(state)=>{
            return state.user;
        },
        usersDialogEditMode:(state)=>{
            return state.editMode;
        }
    }
}
