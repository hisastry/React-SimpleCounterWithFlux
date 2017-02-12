/**
 * Created by associate on 2/11/17.
 */
import constants from '../constants/constants.js'
import dispatcher from '../dispatcher/dispatcher'

console.log('constants');
console.log(constants);

let incrementActions = {
    incrementCount: function(){
        console.log(`INSIDE the INCREMENT Action creator ${constants.INCREMENT}`);
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        });
    }
}

export default incrementActions;

