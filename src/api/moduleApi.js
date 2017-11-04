import fetch from './config'

export default{
    /**
     * 获取模块
     */
    GetModuleList(params) {
        return fetch('/api/module', params)
    }

}


