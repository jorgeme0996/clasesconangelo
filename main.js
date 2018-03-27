alert("XD")
let noNameandEmail=[]
let ref = firebase.database().ref("usuario");
ref.once('value',function(data){
    let db=data.val()
    for(let i in db){
        if (db[i].servicio){
            for (let e in db[i].servicio){
                if (db[i].servicio[e].tipo=="Agendado" && !db[i].servicio[e].periodicidad){
                    // console.log(db[i].nombre, db[i].email, db[i].tarjeta, db[i].perfilStripe)
                    console.log(i)
                    noNameandEmail.push({i, nombre: db[i].nombre,email: db[i].email, tipo: db[i].servicio[e].tipo})
                }
            }
        }
    }
console.log(noNameandEmail)
}).catch(function(err){
    console.log(err)
})

// let jsonData = {noNameandEmail}

// function exportToJsonFile(jsonData) {
//     let dataStr = JSON.stringify(jsonData);
//     let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
//     let exportFileDefaultName = 'data.json';
    
//     let linkElement = document.createElement('a');
//     linkElement.setAttribute('href', dataUri);
//     linkElement.setAttribute('download', exportFileDefaultName);
//     linkElement.click();
// }



