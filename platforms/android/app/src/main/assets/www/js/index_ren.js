var downloadDemoApp = (function () {

    'use strict';

    return {
        _onerrr: function (m) {
            this._showMessage(m);
        },

        _onsuccess: function (m) {
            this._showMessage(m);
        },

        _getById: function (id) {
            var obj = document.getElementById(id);
            return obj;
        },
        _showMessage: function (m) {
            this._getById(this.messageId).innerHTML=m;
        },
        init: function (messageId, urlId, fileNameId, fileDescriptionId,
                        formContainer, downloadButtonId) {
            this.messageId = messageId;
            this.urlId = urlId;
            this.fileNameId = fileNameId;
            this.fileDescriptionId = fileDescriptionId;
            this.formContainer = formContainer;
            this.downloadButtonId = downloadButtonId;
        },

        _downloadFile: function () {
            var url = this._getById(this.urlId).value;
            var fileName = this._getById(this.fileNameId).value;
            var description = this._getById(this.fileDescriptionId).value;
            cordova.plugins.DownloadManager.download(url, fileName, description,
                this._onsuccess.bind(this),
                this._onerrr.bind(this));
        },
        star: function () {
            this._showMessage("");
            this._getById(this.formContainer).style.display = "block";
            this._getById(this.downloadButtonId).onclick = this._downloadFile.bind(this);
        }
    };

})();


document.addEventListener('deviceready', function () {
    downloadDemoApp.init("message-span", "file-url", "file-name",
        "file-description", "form-container", "download-button");
    downloadDemoApp.star();
}, false);