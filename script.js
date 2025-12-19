// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
//import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBlWEEMalKggX00jGVI3ZSSTFnkd7iNr20",
    authDomain: "datos-de-formulario-39fa3.firebaseapp.com",
    projectId: "datos-de-formulario-39fa3",
    storageBucket: "datos-de-formulario-39fa3.appspot.com",
    messagingSenderId: "114512854132",
    appId: "1:114512854132:web:6e627c2127e904a3f52521",
    measurementId: "G-2GTSC6EDZR",
    type: "service_account",
    private_key_id: "6af8014d6d2fc17e7ae08eb2af2ccfc30e847d2d",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsK2HAXTh/YtO4\nOOV7fBmM4BjygcOxF+Jmwnt7C0DtOuy+0N+41lKmtpc3g35whawjbLsT7ESDOqgY\nktDZ3zDkU+Vc9HUazKGk352tuNDSjKAbI9CQla1AL+7jZHV6X10bBGg36UdwSzpX\no5s/D16go4g0vzOyOoRMhML5TA/kqppTWRABBcVlNHxWRJY6vq2LZKVui88ouFLC\nybEqewpZF658BO90rOxADLCoNyJZqfJfWe6L/uRNIgoj8iBDOTLm/VMuCU6UPF4R\nXfIAEzEs2CG8CARNN4UWhhYbzl0S3aItRDj21v1Y/pJbIbOwwBJnuuKyqdM6hwN5\nutous0ZzAgMBAAECggEAT3E1Ca36A812I+sc+H2qzHYbDMsToQOEVCYpE/19V/l4\nhBOdJ4y9Vm+qFtN15DXJ2A6zw92hP2wxZCVaeS2jQbf0fY/O+S6y54DHIQHGWWDJ\n/7vm4NAvwQ5dDE+uZWjbbTv7WtEpRYdwxD+Zwt80qqrKjowrLnIR2bzoul9+deQA\n0l2Ay6Z4OMdPXGfUlyPWGZENmb6BqPKwzrRO7HItqpo1QbWALUATElyT1WxCpI0R\ndv22S3euDhH/qLD9yq3EcbUAy1MJWf2RrF9RyAKb3msRl/1j6dgIJuznGXDBOIuI\n1zFKSvVbqgXuwiWzlBn53aYfpW/LR8gy07FoheTvAQKBgQDTDT86UYAayNmcUkl4\nqh/KQMQjankflr9PrHMw9pl3+QpToebFYQoxKdjG+cZDuPF+w4b35Bn+ODfTZVVv\nzpC6yP5ji005r7YxLPc9/H9xS9uL5mCWAcSnsJUS8C0vHKVjJlYCit8CvUtf/M9f\nmex5wAsv4lTncM1SVVpeGpVs5wKBgQDQ1jvOSzpS2H+mAvjN7d/KqWGZOMu/wtVO\nYrAwR+saZNyYHCBQysL3EgG+dL0PP1WoZlQR8GB71yY8v9NbKLVYJ82/JFPhlReM\ntNmUhw/J5Lh0N5fA25n+L5VUYvZJg8rKhGga0l8itOFPjqOvb0vB5xOu7F/i62xC\npl9u4M18lQKBgF+fJ9+HX5BDIf0mdy1Zfw/G6lbVfc1nIoS5sHMlt4DY7+nWd9VD\n0zdVK2dzcXXrjFcPxc34piI9XGXGCsCeiYpnWILHcZTKXLTJF7gY97DgWrd3CJnO\ncUg8xD4RXZdz1icnDl8WhlYaZ9U0mMxK1A6RiUAHvsohnJVKIKh0SPFPAoGAFjxZ\nTdPQt/V5UfHLEBId2/RBAhF8EETsdVYosFtX+w12N3P3NOMB81ClguPnJXJ26mFK\n3kYb39O+rIU4OeKRvHswewOhMsmvIjo3WIsw8Sw7P5STweMf+GKUodGPq7AurXV/\nqCtyGb3sp43me8174X97JwrgAsdSVZ5lVub0uikCgYEAoXi+Dk6VG9ca59Aga+nV\nOxrqA3+7s2BhS446ZTFTXIynggfD6asaB0/GMSdFYppqAZ+f+ZQqiw9rpx56Y/Yb\nihBgC+NxdDyM2YlWRfJV4E/8qhu9JEhbIN3H+p4aZSDvallRRuYOgEwuOV4+2dxc\nsgGU+2nTp5KDRS4QDs8qAA0=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-x2wys@datos-de-formulario-39fa3.iam.gserviceaccount.com",
    client_id: "100398977481055137542",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x2wys%40datos-de-formulario-39fa3.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
    
    
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
//const db = getFirestore(app);
const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()  //prevenir para cuando agamos submit no limpie el formulario

    //Validar Campo nombre
    let entradaNombre = document.getElementById('name')
    let errorname = document.getElementById('nameError')

    if(entradaNombre.value.trim() === ''){
        errorname.textContent = 'Por favor, introduce tu nombre'
        errorname.classList.add('error-message')
    }else{
        errorname.textContent = ''
        errorname.classList.remove('error-message')
    }

    //Validar correo Electronico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Patron de validacion basico
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduce un correo válido'
        emailError.classList.add('error-message')    
    }else{
        emailError.textContent = ''
        emailError.classList.remove('error-message')

    }

    //validar contrasena
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas , minúsculas y caracteres especiales'
        contrasenaEntrada.classList.add('error-message')

    }else{
        contrasenaError.textContent = ''
        contrasenaError.classList.add('error-message')
    }

    //si todos los campos son validos enviar formularios
    if(!errorname.textContent && !emailError.textContent && !contrasenaError.textContent){
        
        //backend que reciba la informacion
        db.collection("usuarios").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            alert ('El Formulario Se Ha Enviado Con Éxito', docRef.id)
            document.getElementById('formulario').reset();
            //console.log("Document written with ID: ", docRef.id)
        })
        .catch((error) =>{
            //console.log("Error adding document: ", error)
            alert (error)    
        });
        
        

    }

})

