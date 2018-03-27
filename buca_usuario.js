alert(":D")
let usuario=[]
let ref = firebase.database().ref("usuario");
ref.once('value',function(data){
    let db=data.val()
    for(let i in db){
        if (db[i].servicio){
            console.log(i)
            usuario.push({i, nombre: db[i].nombre})
        }
    }
console.log(usuario)
}).catch(function(err){
    console.log(err)
})