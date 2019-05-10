const fs = require('fs');

var addNotes = function (title,body,callback){
    let notes = listNotes();
    notes.push({
        title:title,
        body:body
    })
    notes = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes);
    //console.log(1);
    callback();
};

var removeNotes = (title,callback)=>{
     let notes = listNotes();
     let new_notes = [];
     notes.forEach(element => {
         if(element.title != title){
             new_notes.push(element);
         }
     });
     new_notes = JSON.stringify(new_notes);
     fs.writeFileSync('notes.json',new_notes);
     callback();
 };

var readNotes = (title,callback)=>{
    let notes = listNotes();
    notes.forEach(element=>{
        if(element.title == title){
            callback();
            console.log(element.body);
        }
    });
    
};

var listNotes = ()=>{
    try{
        let notes = fs.readFileSync('notes.json');
        notes = JSON.parse(notes);
        return notes;
        //console.log(1);
    }
    catch(error){
        //console.log(1);
        return [];
    }
    
};

var FinalList = (callback)=>{
    let notes = listNotes();
    console.log(notes);
    callback();
};

//module.exports.removeNotes = removeNotes();
module.exports = {
    addNotes,
    removeNotes,
    FinalList,readNotes
};
