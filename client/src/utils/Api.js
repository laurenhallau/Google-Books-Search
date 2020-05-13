//import request from "superagent";
import axios from "axios";


export default {
    saveBook: function (idData) {
        console.log('idData', idData)
        axios.post('/books', idData)   ;
    }
}