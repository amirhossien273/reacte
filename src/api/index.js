import axios from "axios";

const url_local = "http://127.0.0.1:8000/api/v1/";

const Api = {

    loginUser: function(payload) {
        return (
            axios.post( url_local + 'login', payload)
            .then(function(response) {
                return response.data;
            })
        );
    },

    getCategory: function() {
        return (
            axios.get(
            url_local + "producrs/all")
            .then(function(response) {
                return response.data.data;
            })
        );
    },
}

export default Api;