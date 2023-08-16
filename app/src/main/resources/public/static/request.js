var request = axios.create({ baseURL: '' });


// 添加请求拦截器，在参数中加token
request.interceptors.request.use(

    config => {
        if (config.url.includes("protected") && sessionStorage.getItem('token')) {
            if (!config.params) {
                config.params = {}
            }
            config.params.token = sessionStorage.getItem('token');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// 响应拦截（配置请求回来的信息）
request.interceptors.response.use(function(response) {
    if (response.data.code == 0) {
        return response.data
    }
    app.$message.error(response.data.msg);
    return Promise.reject(response.data.msg)
}, function(error) {
    // 处理响应失败
    return Promise.reject(error)
})