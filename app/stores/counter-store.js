/**
 * Created by associate on 2/11/17.
 */
import constants from '../constants/constants.js'
import dispatcher from '../dispatcher/dispatcher'

import {EventEmitter} from 'events'

let counter = 0;

function getCounter(){
    return counter;
}

function setCounter(){
    counter = counter+1;
}

let counterStore = Object.assign({}, EventEmitter.prototype, {
    getCounter: getCounter,
    emitChange: function (){
        this.emit('CHANGE_EVENT');
    },
    addChangeListener: function(cb) {
        console.log(this);
        this.on('CHANGE_EVENT', cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener('CHANGE_EVENT', cb);
    }
});

export default counterStore;

dispatcher.register((action) => {
    console.log(`Dispatcher called counter-store callback ${action.actionType}`);
    switch(action.actionType){
        case constants.INCREMENT:
            console.log("Update store & notify view");
            setCounter();
            counterStore.emitChange();
            break;
    }
});