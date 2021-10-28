let arrayJson = JSON.stringify([
    {
        "_id": "605acace4ab389d8ed54c496",
        "age": 35,
        "name": {
            "last": "Hensley",
            "first": "Dollie"
        },
        "email": "dollie.hensley@undefined.org",
        "index": 0,
        "phone": "+1 (904) 421-3160",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaceed1f0e1cfa1eee67",
        "age": 21,
        "name": {
            "last": "Hunt",
            "first": "Dolores"
        },
        "email": "dolores.hunt@undefined.com",
        "index": 1,
        "phone": "+1 (967) 432-2905",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acacefedd0fe77874d78f",
        "age": 28,
        "name": {
            "last": "Pennington",
            "first": "Milagros"
        },
        "email": "milagros.pennington@undefined.net",
        "index": 2,
        "phone": "+1 (922) 492-2085",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace6d3f84fc9b40849f",
        "age": 32,
        "name": {
            "last": "Anderson",
            "first": "Myrtle"
        },
        "email": "myrtle.anderson@undefined.biz",
        "index": 3,
        "phone": "+1 (858) 404-3273",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace06d24518b6419d23",
        "age": 29,
        "name": {
            "last": "York",
            "first": "Terry"
        },
        "email": "terry.york@undefined.co.uk",
        "index": 4,
        "phone": "+1 (816) 492-3475",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace46f0669738455d6b",
        "age": 38,
        "name": {
            "last": "Bridges",
            "first": "Effie"
        },
        "email": "effie.bridges@undefined.info",
        "index": 5,
        "phone": "+1 (856) 423-3786",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace5ab5217354268532",
        "age": 26,
        "name": {
            "last": "Walter",
            "first": "Krista"
        },
        "email": "krista.walter@undefined.me",
        "index": 6,
        "phone": "+1 (849) 513-2888",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaced68677a5dca08a9b",
        "age": 20,
        "name": {
            "last": "Buchanan",
            "first": "Gomez"
        },
        "email": "gomez.buchanan@undefined.biz",
        "index": 7,
        "phone": "+1 (888) 494-2462",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaceb7ece55cb38e546a",
        "age": 20,
        "name": {
            "last": "Potter",
            "first": "Caitlin"
        },
        "email": "caitlin.potter@undefined.io",
        "index": 8,
        "phone": "+1 (801) 514-3055",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace98de45687c4c6279",
        "age": 26,
        "name": {
            "last": "Dillon",
            "first": "Guzman"
        },
        "email": "guzman.dillon@undefined.ca",
        "index": 9,
        "phone": "+1 (857) 407-2403",
        "picture": "http://placehold.it/32x32"
    }
])

function getArray() {
    return new Promise((resolve, reject) => {
        // let json=JSON.parse
        if (JSON.parse(arrayJson).length > 0) {

            resolve(JSON.parse(arrayJson))
        }
        else {
            reject({ massage: "not right" })
        }
    })
}
async function arrayGet() {
    try {
        return await getArray()
    }
    catch (error) {
        error
    }
}
arrayGet()
    .then((res) => { console.log(res) })
    .catch((rej) => { console.log(rej) })



function promiseId(id) {
    return new Promise((resolve, reject) => {
        let user = JSON.parse(arrayJson)
        for (let i = 0; i < user.length; i++) {
            if (user[i]._id == id) {
                resolve(user[i])
            }
            else {
            }
        }
        reject({ massage: "no here" })
    })
}
async function idPromise(id) {
    try {
        return await promiseId(id)
    }
    catch (error) {
        return error
    }
}

idPromise("605acaceed1f0e1cfa1eee67")
    .then((res) => { console.log(res) })
    .catch((rej) => { console.log(rej) })



function promiseEmail(email) {
    return new Promise((resolve, reject) => {
        let user = JSON.parse(arrayJson)
        for (let i = 0; i < user.length; i++) {
            if (user[i].email == email) {
                resolve(user[i])

            }


        }
        reject({ massage: "no here" })
    })
}
async function emailPromise(email) {
    try {
        return await promiseEmail(email)
    }
    catch (error) {
        return error
    }
}

emailPromise("gomez.buchanan@undefined.biz")
    .then((res) => { console.log(res) })
    .catch((rej) => { console.log(rej) })



function usersPromise(age) {
    let user = JSON.parse(arrayJson)
    
    return new Promise((resolve, reject) => {
        let array = [];
        for (let item of user) {
            if (item.age > age) {
                array.push(item)
            }
        }
        if(array.length>0){
            resolve(array)
        }
        else{
            reject({massage:"no here"})}
    })
}
async function promiseUsers(){
    try{
    return await usersPromise(20)
}
catch(error){
error
}
}
promiseUsers()
.then((res)=>{console.log(res)})
.catch((rej)=>{console.log(rej)})



function namePromise(name){
    let user = JSON.parse(arrayJson)
    let array1=[];
    return new Promise((resolve,reject)=>{
for(let item of user){
    if(item.name.first==name){
        array1.push(item)
    }
}
if(array1.length>0){
    resolve(array1)
}
else{
    reject({massage:"no here"})
}
    })
}
async function promiseName(name){
    return await namePromise(name)
}
promiseName("Caitlin")
.then((res)=>{console.log(res)})
.catch((rej)=>{console.log(rej)})



let input=document.getElementById("input")
let select=document.getElementById("select")
let button=document.getElementById("button")
let section=document.getElementById("section")
let div=document.getElementById("div")





button.onclick=()=>{
    switch(select.value){
        case "idSelect":
            idPromise(input.value)
    .then((res) => {console.log(res)} )
    .catch((rej) => { console.log(rej) })
    break;

    case "emailSelect":
        emailPromise(input.value)
        .then((res) => { console.log(res) })
        .catch((rej) => { console.log(rej) })
        break;
    case "nameSelect":
            promiseName(input.value)
            .then((res)=>{console.log(res)})
            .catch((rej)=>{console.log(rej)})
    break;
    }
}





