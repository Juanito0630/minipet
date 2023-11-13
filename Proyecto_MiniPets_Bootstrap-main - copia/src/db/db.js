// creamos las variables reactivas necesarias

export class mascotas {

    nombre = "";
    especie = "";
    edad = 0;
    raza = "";
    peso = 0;
    usuario = "";
    contraseña = "";
    contador_id_mascotas = 1;
    contador_i_usuarios = 1;
    
    // creamos los arreglos que necesitamos
    
    mascotas = new map ([
    
        { 
            id : 0,
            nombre : "david jose gonzales", 
            edad : "24", 
            especie : "perro_hpta", 
            raza : "perro_hpta_bandido", 
            peso : 79, 
            img : "",
            enfermedad_terminal : "", 
            enfermedad_cardiovascular : "", 
            enfermedad_osea : "", 
            enfermedad_respiratoria : "", 
            enfermedad_genetica : "",
            enfermedad_digestiva : "",
            enfermedad_cerebral : "",
            enfermedad_sensorial : "",
            mutilacion : "",
            maltrato : "",
        
        }
    
    ]);
    
    
    usuarios = new Map ([
    
    
    
    
    ]);
    
    // creamos las funciones para la funcionalidad del modulo de las mascotas
    
    insertar_mascota () {
    
        let id_mascota = document.getElementById("id");
        let nombre_mascota = document.getElementById("nombre");
        let edad_mascota = document.getElementById("edad");
        let especie_mascota = document.getElementById("especie");
        let raza_mascota = document.getElementById("raza");
        let peso_mascota = document.getElementById("peso");
        let enfermedad_terminal = document.getElementById("enfermedad_terminal");
        let enfermedad_cardiovascular = document.getElementById("enfermedad_cardiovascular");
        let enfermedad_osea = document.getElementById("enfermedad_osea");
        let enfermedad_respiratoria = document.getElementById("enfermedad_respiratoria");
        let enfermedad_genetica = document.getElementById("enfermedad_genetica");
        let enfermedad_digestiva = document.getElementById("enfermedad_digestiva");
        let enfermedad_cerebral = document.getElementById("enfermedad_cerebral");
        let enfermedad_sensorial = document.getElementById("enfermedad_sensorial");
        let mutilacion = document.getElementById("mutilacion");
        let maltrato = document.getElementById("maltrato");
    
    };
    
    eliminar_mascota () {
    
    };
    
    actualizar_mascota () {
    
    };
    
    }
    