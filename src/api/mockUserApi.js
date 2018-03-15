import delay from './delay';

const userObjs = [
    {
        email: 'cust',
        psw: '123',
        confirmpsw: '123',
        addr: '',
        phone: '',
        type: 'cust'
    },
    {
        email: 'rest',
        psw: '123',
        confirmpsw: '123',
        addr: '',
        phone: '',
        type: 'rest'
    }
];

const userSession = [{
    username: '',
    type: ''
}];



//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
    var lastID;
    if (userObjs.length == 0) lastID = 0;
    else lastID = userObjs[userObjs.length-1].id;
    
    lastID++;
    return lastID.toString();
};

class UserApi{
    static getAllUsers(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Object.assign([],userObjs));
            },delay);
        });
    }

    static getUserSession(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Object.assign([],userSession));
            },delay);
        });
    }
    

    static saveUser(userObj){
        userObj = Object.assign({},userObj);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                userObjs.push(userObj);
                console.log(userObjs.length);
                resolve(userObj);
            },delay);
        });
    }

    // add if needs
    static logoutUser(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // userSession.username = null;
                // userSession.type = null;
                const newSess = {username:'',type:''};
                userSession.push(newSess);
               
                resolve(newSess);
            },delay);
        });
    }

    static findUser(userObj){
        userObj = Object.assign({},userObj);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                /* userObjs.push(userObj);
                resolve(userObj); */
                // console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
                // console.log(userObj);
                // console.log(userObjs);
                var newSess = {username:'',type:''};
                for(var i=0; i < userObjs.length; i++){
                    var signupemail = userObjs[i].email;
                    var signuppsw = userObjs[i].psw;
                    var signuptype = userObjs[i].type;

                    var signinemail = userObj.email; 
                    var signinpsw = userObj.psw;
                    var signintype = userObj.type;


                    if(signupemail == signinemail && signuppsw == signinpsw 
                        && signuptype == signintype){
                            console.log('------ss--------');
                            newSess = {username:signinemail,type:signintype}
                            break;
                            // userSession.username = signinemail;
                            // userSession.type = signintype;
                            // const newSess = {username:signinemail,type:signintype}
                            // userSession.push(newSess);
                            // console.log(userSession)
                            // resolve(userSession);
      
                    }
                    // else{
                    //     console.log('------fff--------');
                    //     // const newSess = {username:'',type:''}
                    //     // userSession.push(newSess);
                        
                    //     resolve(userSession);
                    // }
                }

            
                userSession.push(newSess);
                // console.log(userSession)
                resolve(newSess);
                


            },delay);
        });
    }
}

export default UserApi;