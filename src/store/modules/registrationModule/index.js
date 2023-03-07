import {sendEmail} from "@/email";

const registrationModule = {
    namespaced: true,

    state() {
        return {

            wrongCode: false,

            registrationCode: null,

            registrationAvailability:[
                {username: null},
                {email: null},
                {password: null}
            ],


            showRegistrationPopup: false,
            isRegistered: false,
            showDashboard:false,
            userInfo: [

            ]

        }
    },

    mutations:{
        registerUser(state,userInfo){
            state.userInfo.push(userInfo)
            state.isRegistered = !state.isRegistered
            state.showRegistrationPopup = !state.showRegistrationPopup
        },
        updateUserName(state,newUsername){
            state.userInfo[0].username=newUsername
        },
        updateEmail(state,newEmail){
            state.userInfo[0].email=newEmail
        },
        showRegistrationPopup(state){
            state.showRegistrationPopup = !state.showRegistrationPopup
        },
        showDashboard(state){
            state.showDashboard = !state.showDashboard
        }
  

    },

    getters: {
        wrongCode(state){
            return state.wrongCode

        },
        registrationCode(state){
            return state.registrationCode
        },
        registrationAvailability(state){
            return state.registrationAvailability
        },
        userInfo(state){
            return state.userInfo
        },
        showRegistrationPopup(state){
            return state.showRegistrationPopup
        },
        isRegistered(state){
            return state.isRegistered
        },
        showDashboard(state){
            return state.showDashboard
        }

    },

    actions:{

        registerUser({commit,state},userInfo){
            console.log(userInfo)
            if(userInfo.verificationCode == state.registrationCode ){
                commit("registerUser",userInfo)
                state.wrongCode = false
            }
            else if(userInfo.verificationCode == null){
                console.log("hey")

            }
            else{
                state.wrongCode = true
                console.log("wrong code")
            }
        },
        updateUsername({commit},newUsername){
            commit("updateUserName",newUsername)
        },
        updateEmail({commit},newEmail){
            commit("updateEmail",newEmail)
        },
        getRegistrationCode({state}, email){
            state.registrationCode = Math.floor(Math.random() * 10000)

            const serviceId = 'service_0n78qxj';
            const templateId = 'template_crkjde5';
            const emailData = {
                message:state.registrationCode,
                to_email: email
            };

            sendEmail(serviceId, templateId, emailData)


        }
    }
}

export default registrationModule