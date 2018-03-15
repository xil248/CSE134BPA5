import delay from './delay';

const userObjs = [

];

const userSession = {
    username: '',
    type: ''
};


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
                userSession.username = null;
                userSession.type = null;
                resolve(userSession);
            },delay);
        });
    }

    static findUser(userObj){
        userObj = Object.assign({},userObj);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                /* userObjs.push(userObj);
                resolve(userObj); */

                for(var i=0;userObjs.length;i++){
                    var signupemail = userObjs[i].email;
                    var signuppsw = userObjs[i].psw;
                    var signuptype = userObjs[i].type;
                    var signinemail = userObj.email; 
                    var signinpsw = userObj.psw;
                    var signintype = userObj.type;

                    console.log(signupemail == signinemail); 
                    console.log(signuppsw == signinpsw);
                    console.log(signuptype == signintype);

                    if(signupemail == signinemail && signuppsw == signinpsw 
                        && signuptype == signintype){
                            console.log('------ss--------');
                            userSession.username = signinemail;
                            userSession.type = signintype;
                            resolve(userSession);
                    }
                    else{
/*                         userSession.username = '';
                        userSession.type = ''; */
                        resolve(userSession);
                    }
                }
            },delay);
        });
    }
}

export default UserApi;