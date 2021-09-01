const LocalStorageService = (function () {
    var _service;
    function _getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service
    }
    function _setToken(tokenObj) {
        localStorage.setItem("token", tokenObj.token);
    }
    function _getToken() {
        return localStorage.getItem("token");
    }
    function _clearToken() {
        localStorage.removeItem("token");
    }
    return {
        getService: _getService,
        setToken: _setToken,
        getToken: _getToken,
        clearToken: _clearToken
    }
})();
export default LocalStorageService;