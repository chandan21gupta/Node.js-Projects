const yargs = require('yargs');
const Notes = require('./notes');

yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title: {
            describe : 'Note Title',
            demandOption : true,
            type: 'string'
        },
        body:{
            describe : 'Note body',
            demandOption : true,
            tyep:'string'
        }
    },
    handler: function(argv){
        Notes.addNotes(yargs.argv.title,yargs.argv.body,function(){
            console.log('Adding a note...');
        })
    
    }
    
    
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    title: {
        describe : 'Note Title',
        demandOption : true,
        type: 'string'
    },
     handler: function(argv){
        Notes.removeNotes(yargs.argv.title,function(){
            console.log('Removing the note....');
        })
     }
})

 yargs.command({
     command:'list',
     describe:'List the notes',
     handler: function(argv){
        Notes.FinalList(function(){
            console.log('Listing the notes...');
        })
     }
 })

yargs.command({
    command:'read',
    describe:'Read a note',
    title: {
        describe : 'Note Title',
        demandOption : true,
        type: 'string'
    },
    handler: function(argv){
        Notes.readNotes(yargs.argv.title,function(){
            console.log('Reading a note...');
        })
    }
})

yargs.argv;