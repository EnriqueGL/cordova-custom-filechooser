module.exports = {
    open: function (type, success, failure) {
        if(type == null || type == '') type = '*/*';
        cordova.exec(success, failure, "CustomFileChooser", "open", [type]);
    }
};
