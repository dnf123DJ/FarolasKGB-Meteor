
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
var res;

Todos = new Mongo.Collection('Farolas');

function asignar(id){
  document.getElementById("input-id").value = id;
}

Template.body.helpers({
  farolas: function(){
    a = Todos.find();
    return a;
  }
});

Template.body.events({
  'submit .buscar': function(event){
    res = Todos.findOne({"id": event.target.id.value});
    if(res != null){
      alert("Existe!");
      if(document.getElementById("contenido-farola").style.display == "none"){
        document.getElementById("contenido-farola").style.display = "block";
      }
      document.getElementById("textarea-farola").innerHTML=res.nota;
      document.getElementById("id-farola").innerHTML="ID Farola: "+res.id;
    }else{
      alert("No existe!");
    }
    event.target.id.value = "";
    return false;
  },
  'click .escribir': function(){
    var nota = document.getElementById("textarea-farola").value;
    if(Todos.update(res._id,
      { $set:
         {nota:nota}
      })){
        alert("Escrito con éxito!");
      }
      else{
        alert("Ha ocurrido un error!");
      }
    document.getElementById("contenido-farola").style.display = "none";
  },
  'click .eliminar': function(){
    if(Todos.update(res._id,
      { $set:
         {nota:""}
      })){
        alert("Eliminado con éxito!");
      }
      else{
        alert("Ha ocurrido un error!");
      }
    document.getElementById("contenido-farola").style.display = "none";
    return false;
  },
  'click .salir': function(){
    document.getElementById("contenido-farola").style.display = "none";
    return false;
  },
  'click .farola-text': function(){
    document.getElementById("input-id").value = this.id;
    return false;
  },
});