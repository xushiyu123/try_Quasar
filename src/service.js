import axios from 'axios'
import router from './router'

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.resolve(error.response)
  }
)

export const http = (url, method = 'get', data = {}, config = {}) => {
  const options = Object.assign(
    {
      method: method,
      url: url,
      params: method === 'get' ? data : {},
      data: data,
      timeout: 30000
    },
    config
  )

  const promise = new Promise((resolve, reject) => {
    axios(options)
      .then(
        resp => {
          // 加载动画取消不在fetch内处理，交给各个功能模块处理
          if (resp && resp.status === 401) {
            sessionStorage.removeItem('username')
            router.push({
              name: 'Login',
              params: { errorMsg: resp.data.msg }
            })
          }
          if (resp && resp.status === 403) {
            router.push({
              name: 'Login'
            })
          }
          // 业务上的错误和异常都属于error
          if (resp && resp.data.status === 'error') {
          }
          resolve(resp)
        },
        resp => {
          reject(resp)
        }
      )
  })
  return promise
}

// 用户注册
export const signup = (username, password) => http('/api/signup', 'post', { username, password })
// 用户登录
export const login = (username, password, remember) => http('/api/login', 'post', { username, password, remember_me: remember })
export const data = () => http('/api/data')
// 用户登出
export const logout = () => http('/api/logout')
// 获取用户信息
export const getUserInfo = () => http('/api/userinfo')
export const listFile = () => http('/api/list_file')
export const modifyParams = (values) => http('/api/params', 'put', { values })
export const searchParams = address => http('/api/params', 'post', { address })
// 遥测数据
export const getTelemeteryData = (condition, loadFlag) => http('/api/get_ana_ref', 'get', { condition })
// 硬接点遥信
export const getBiRef = (condition, loadFlag) => http('/api/get_bi_ref', 'get', { condition })
// 事件遥信
export const getSoeRef = (condition, loadFlag) => http('/api/get_soe_ref', 'get', { condition })
// 告警遥信
export const getAlarmRef = (condition, loadFlag) => http('/api/get_alarm_ref', 'get', { condition })
// 装置参数
export const getCommonParam = (condition, loadFlag) => http('/api/get_para', 'get', { condition })
// 保存通信参数
export const updateParameters = condition => http('/api/updateParameters', 'post', { condition })
// soe历史信息
export const getSoeHistroy = condition => http('/api/get_soe_history', 'get', { condition })
// 操作信息历史信息
export const getOperHistroy = condition => http('/api/get_oper_history', 'get', { condition })
// 动作信息历史信息
export const getTripHistroy = condition => http('/api/get_trip_history', 'get', { condition })
// 遥控选择
export const controlSelect = condition => http('/api/control_select', 'post', { condition })
// 遥控执行
export const controlExec = condition => http('/api/control_exec', 'post', { condition })
// 遥控取消
export const controlCancel = condition => http('/api/control_cancel', 'post', { condition })
// 获取波形数据
export const getPlotData = condition => http('/api/plot', 'get', { condition })
// 获取录波数据文件名
export const getContradeNames = condition => http('/api/contrade_name', 'get', { condition })
// 修改短地址描述
export const modifyDescription = condition => http('/api/modify_description', 'post', { condition })
// 获取角色数据
export const getRoles = condition => http('/api/get_roles', 'get', { condition })
// 获取路由数据
export const getRouters = condition => http('/api/get_routers', 'get', { condition })
// 获取用户权限路由配置
export const getUserRouters = () => http('/api/get_user_routers')
// 获取用户信息
export const getUsers = condition => http('/api/get_users', 'get', { condition })
// 删除角色配置
export const deleteRoles = condition => http('/api/delete_roles', 'post', { condition })
// 更新角色配置
export const updateRole = condition => http('/api/update_role', 'post', { condition })
// 新增角色
export const addRole = condition => http('/api/add_role', 'post', { condition })
// 新增路由
export const addRouter = condition => http('/api/add_router', 'post', { condition })
// 更新路由配置
export const updateRouter = condition => http('/api/update_router', 'post', { condition })
// 删除路由配置
export const deleteRouters = condition => http('/api/delete_routers', 'post', { condition })
// 获取角色下所有用户
export const getUsersOfRole = condition => http('/api/get_users_of_role', 'get', { condition })
// 获取角色下所有路由
export const getRoutersOfRole = condition => http('/api/get_routers_of_role', 'get', { condition })
// 角色下添加用户
export const addUsersOfRole = condition => http('/api/add_users_of_role', 'post', { condition })
// 删除角色下用户
export const deleteUserOfRole = condition => http('/api/delete_user_of_role', 'post', { condition })
// 添加角色下路由
export const addRoutersOfRole = condition => http('/api/add_routers_of_role', 'post', { condition })
// 删除角色下的路由
export const deleteRoutersOfRole = condition => http('/api/delete_routers_of_role', 'post', { condition })
// 获取接口
export const getInterfaces = condition => http('/api/get_interfaces', 'get', { condition })
// 删除接口
export const deleteInterfaces = condition => http('/api/delete_interfaces', 'post', { condition })
// 添加接口
export const addInterface = condition => http('/api/add_interface', 'post', { condition })
// 更新接口
export const updateInterface = condition => http('/api/update_interface', 'post', { condition })
// 获取路由下关联的接口
export const getInterfacesOfRouter = condition => http('/api/get_interfaces_of_router', 'get', { condition })
// 添加路由下关联的接口
export const addInterfaceOfRouter = condition => http('/api/add_interface_of_router', 'post', { condition })
// 删除路由下关联的接口
export const deleteInterfaceOfRouter = condition => http('/api/delete_interface_of_router', 'post', { condition })
// 删除角色下关联的接口
export const deleteInterfacesOfRole = condition => http('/api/delete_interfaces_of_role', 'post', { condition })
// 获取角色下关联的接口
export const getInterfacesOfRole = condition => http('/api/get_interfaces_of_role', 'get', { condition })
// 角色添加关联接口
export const addInterfacesOfRole = condition => http('/api/add_interfaces_of_role', 'post', { condition })
// 获取稳态遥测定点数据信息
export const getTelemeteryPoint = condition => http('/api/get_telemetery_point', 'get', { condition })
// 上传文件
export const uploadFiles = formData => http('/api/upload_file', 'post', formData)
// 管理员修改用户密码
export const adminUpdatePassword = condition => http('/api/update_password', 'post', { condition })
// 用户修改自己密码
export const userUpdatePassword = condition => http('/api/update_self_password', 'post', { condition })
// 文件上传前检验同名文件是否存在
export const checkFileExists = condition => http('/api/check_file_exists', 'post', { condition })
// 主界面遥测历史数据
export const getIndexPoint = () => http('/api/get_index_fix_point', 'get')
// 主界面数据
export const getIndexData = condition => http('/api/get_data_of_index', 'post', { condition })
// 精准校验
export const precisionCheck = condition => http('/api/precision_check', 'post', { condition })
// 主界面进行离网和并网操作
export const setGridStatus = condition => http('/api/set_grid_status', 'post', { condition })
// 查询版本号
export const getDeviceInfo = condition => http('/api/device_info', 'get', { condition })
// 查询版本号
export const getMicrogridCondition = condition => http('/api/microgrid_condition', 'post', { condition })
// 删除用户
export const deleteUser = condition => http('/api/delete_user', 'post', { condition })
// 获取redis中para值
export const getParamsValues = condition => http('/api/get_params_values', 'post', { condition })
// 设置redis中para值
export const setParamsValues = condition => http('/api/set_params_values', 'post', { condition })
// 获取计划运行曲线点数
export const getScheduleNum = condition => http('/api/get_schedule_num', 'get', { condition })
// 获取全部遥测短地址
export const queryTelemeteryData = () => http('/api/query_telemetery_data', 'get')
// 获取全部遥信短地址
export const queryRemoteSignalData = () => http('/api/query_remote_signal_data', 'get')
// 获取全部遥控短地址
export const queryRemoteControlData = () => http('/api/query_remote_control_data', 'get')
// 获取全部遥调短地址
export const queryTeleadjustingData = () => http('/api/query_teleadjusting_data', 'get')
// 召唤点表映射关系
export const queryDotAddr = () => http('/api/query_dot_addr', 'get')
// 保存点表映射关系
export const saveDotAddr = condition => http('/api/save_dot_addr', 'post', { condition })
// 分页查询点表数据
export const getDotAddr = condition => http('/api/get_dot_addr', 'post', { condition })
// 查询实时数据
export const queryRealtimeData = condition => http('/api/query_realtime_data', 'post', { condition })
// 查询统计数据
export const queryStatisticsData = condition => http('/api/query_statistics_data', 'post', { condition })
// 查询历史断面数据
export const queryHistoryData = condition => http('api/query_history_data', 'post', { condition })
// 通信测试
export const communicationTest = condition => http('api/communication_test', 'post', { condition })
