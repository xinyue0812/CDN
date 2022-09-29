let leftNavList = [
  {
    id: 1, name: '体征分析', path: '', children: [
      {
        id: '1-1', name: '指标总览', path: '/indexPage', children: [
          // {id: '1-1-1', name: '驾驶舱', path: ''},
          // {id: '1-1-2', name: '驾驶舱', path: ''}
        ]
      },
      {id: '1-2', name: '趋势对比', path: '/trendCompare'},
      {id: '1-3', name: '城市对比', path: '/cityCompare'},
      {id: '1-4', name: '指标查询', path: '/indicatorManage'},
      {id: '1-5', name: '空间计算', path: ''},
      {id: '1-6', name: '评估模型', path: ''}
    ]
  },
  {
    id: 2, name: '问题诊断', path: '', children: [
      {id: '2-1', name: '问题诊断', path: '/analysis'},
      {id: '2-2', name: '问题清单', path: '/questionList'},
      {id: '2-3', name: '一键生成报告', path: ''},
    ]
  },
  {id: 3, name: '一张图', path: '/oneMap'},
  {id: 4, name: '监测预警', path: ''},
  {id: 6, name: '辅助决策', path: '',children:[
      {id: '6-1', name: '项目管理', path: '/projectManage'},
      {id: '6-2', name: '计划管理', path: '/projectOverview'},
      {id: '6-3', name: '进度管理', path: '/projectProgressList'},
      {id: '6-4', name: '计划执行', path: '/checkStatisticsTip'},
      {id: '6-5', name: '海绵城市', path: ''},
      {id: '6-6', name: '城市更新', path: ''},
    ]},
  {
    id: 5, name: '应用支撑', path: '', children: [
      {id: '5-4', name: '数据管理', path: '/dataManage'},
      {id: '5-5', name: '指标管理', path: ''},
      {id: '5-6', name: '知识库', path: ''},
      {id: '5-1', name: '用户管理', path: '/userManage'},
      {id: '5-3', name: '角色管理', path: '/roleManage'},
      // {id: '5-4', name: '功能管理', path: '/moduleManage'},
      {id: '5-2', name: '日志管理', path: '/recordManage'},
    ]
  }
];

let rightNavList = [
  {id: '7-1', name: '修改密码', path: '', dialog: 'changePwd'},
  {id: '7-2', name: '退出', path: '/Login'},
]

export {
  leftNavList,
  rightNavList
}
