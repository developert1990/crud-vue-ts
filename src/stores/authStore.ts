import { defineStore } from 'pinia';
interface AuthState{
    isAuth: boolean,
    hasRole: boolean
}

export const useAuthStore = defineStore({
    id: "auth",
    state: ():AuthState => ({
        isAuth: false,
        hasRole: false
    }),
    getters:{
        getIsAuth: (state) => {
            return state.isAuth;
        }
    },
    actions: {
        changeAuth() {
            this.isAuth = !this.isAuth;
        },
        changeRole(){
            this.hasRole = !this.hasRole;
        }
    }
})