let titulo2 = document.getElementById ('titulo2')
let titulo = document.getElementById ('titulo')
let btn = document.getElementById ('btn')
let persona = document.getElementById ('persona')
let box1 = document.getElementById ('box1')


btn.addEventListener('click', function(){
    let tipo = persona.value
    titulo.innerHTML = 'Hola ' + tipo
    titulo2.innerHTML = 'Esta es tu lista de tareas para hoy'
    
    
    });


box1.addEventListener('click', function(){
    let tipo = persona.value
    alert (tipo +' '+ ' 🎉 Felicitaciones 🎉  completaste la tarea, tomar agua')
});

box2.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, caminar')
});
box3.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, hacer las compras')
});
box4.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, descansar')
});
box5.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, andar en bici')
});
box6.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, Hacer mate')
});
box7.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, Estudiar js')
});
box8.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, Bañarse')
});
box9.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, Comer')
});
box10.addEventListener('click',function(){
    let tipo = persona.value
    alert(tipo +' '+ '🎉 Felicitaciones 🎉completaste la tarea, Escuchar musica')
});

