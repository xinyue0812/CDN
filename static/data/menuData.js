let leftNavList = [
  {
    id: 1, name: '综合体检', path: '', children: [
      {
        id: '1-1', name: '指标总览', path: '/indexPage', children: [
          // {id: '1-1-1', name: '驾驶舱', path: ''},
          // {id: '1-1-2', name: '驾驶舱', path: ''}
        ]
      },
      { id: '1-6', name: '空间诊断', path: '/analysis' },
      { id: '1-2', name: '趋势对比', path: '/trendCompare' },
      { id: '1-3', name: '城市对比', path: '/cityCompare' },
      { id: '1-5', name: '问题清单', path: '/questionList' },
      { id: '1-7', name: '监测预警', path: '/warningPage' },
      { id: '1-4', name: '指标查询', path: '/indicatorManage' },
    ]
  },
  {
    id: 2, name: '专项体检', path: '', children: [
      {
        id: '2-1', name: '社区公服专项', path: '', children: [
          { id: '2-1-1', name: '指标总览', path: '/comminityIndexPage' },
          { id: '2-1-6', name: '空间诊断', path: '/comminityAnalysis' },
          // { id: '2-1-6', name: '空间诊断', path: '/comminityAnalysis' },
          { id: '2-1-2', name: '趋势对比', path: '/comminityTrendCompare' },
          { id: '2-1-5', name: '问题清单', path: '/comminityQuestionList' },
          { id: '2-1-7', name: '监测预警', path: '/comminityWarningPage' },
          // { id: '2-1-7', name: '监测预警', path: '/comminityWarningPage' },
          { id: '2-1-4', name: '指标查询', path: '/comminityIndicatorManage' },
        ]
      },
      {
        id: '2-2', name: '历史文化专项', path: '', children: [
          { id: '2-2-1', name: '指标总览', path: '/hospitalIndexPage' },
          { id: '2-2-6', name: '空间诊断', path: '/hospitalAnalysis' },
          { id: '2-2-2', name: '趋势对比', path: '/hospitalTrendCompare' },
          { id: '2-2-5', name: '问题清单', path: '/hospitalQuestionList' },
          { id: '2-2-7', name: '监测预警', path: '/hospitalWarningPage' },
          { id: '2-2-4', name: '指标查询', path: '/hospitalIndicatorManage' },
        ]
      },
      {
        id: '2-3', name: '住房专项', path: '', children: [
          { id: '2-3-1', name: '指标总览', path: '/houseIndexPage' },
          { id: '2-3-6', name: '空间诊断', path: '/houseAnalysis' },
          { id: '2-3-2', name: '趋势对比', path: '/houseTrendCompare' },
          { id: '2-3-5', name: '问题清单', path: '/houseQuestionList' },
          { id: '2-3-7', name: '监测预警', path: '/houseWarningPage' },
          { id: '2-3-4', name: '指标查询', path: '/houseIndicatorManage' },
        ]
      }, {
        id: '2-4', name: '园林绿化专项', path: '', children: [
          { id: '2-4-1', name: '指标总览', path: '/landscapingIndexPage' },
          { id: '2-4-6', name: '空间诊断', path: '/landscapingAnalysis' },
          { id: '2-4-2', name: '趋势对比', path: '/landscapingTrendCompare' },
          { id: '2-4-5', name: '问题清单', path: '/landscapingQuestionList' },
          { id: '2-4-7', name: '监测预警', path: '/landscapingWarningPage' },
          { id: '2-4-4', name: '指标查询', path: '/landscapingIndicatorManage' },
        ]
      },
    ]
  },
  {
    id: 6, name: '拓展场景', path: '', children: [
      {
        id: '6-1', name: '城市绿道', path: '/greenRoad', children: [
          // {id: '6-1-1', name: '计划管理', path: '/projectOverview'},
          // {id: '6-1-2', name: '计划执行', path: ''},
          // {id: '6-1-3', name: '项目管理', path: '/projectManage'},
          // {id: '6-1-4', name: '进度管理', path: '/projectProgressList'},
        ]
      },
      /*{
        id: '6-4', name: '规划成果', path: '', children: [
          { id: '6-4-1', name: '现势库', path: '/CurrentsituationLibrary' },
          { id: '6-4-2', name: '成果库', path: '/AchievementLibrary' },
        ]
      },*/
      {id: '6-2', name: '海绵城市', path: ''},
      {id: '6-3', name: '城市更新', path: ''},
    ]
  },
  {
    id: 3, name: '辅助决策', path: '', children: [
      {id: '3-1', name: '建设"一张图"', path: '/oneMap'},
      {id: '3-2', name: '点密度分析', path: '/pointAnalysis'},
      {id: '3-3', name: '缓冲区分析', path: '/bufferAnalysis'},
      {id: '3-4', name: '等时圈模型', path: '/circleAnalysis'},
      {id: '3-5', name: '设施覆盖率', path: '/coverAnalysis'},
    ]
  },
  // {id: 4, name: '监测预警', path: ''},
  {
    id: 5, name: '支撑体系', path: '', children: [
      {id: '5-4', name: '数据管理', path: '/dataManage'},
      {
        id: '5-5', name: '指标管理', path: '', children: [
          {id: '5-5-1', name: '体系管理', path: '/system'},
          {id: '5-5-2', name: '维度管理', path: '/dim'},
          {id: '5-5-3', name: '指标管理', path: '/index'},
          {id: '5-5-4', name: '基础图层', path: '/blayer'},
          {id: '5-5-5', name: '公共图层', path: '/player'},
        ]
      },
      {id: '5-6', name: '知识库管理', path: '/casePage'},
      {id: '5-1', name: '用户管理', path: '/userManage'},
      {id: '5-3', name: '角色管理', path: '/roleManage'},
      // {id: '5-4', name: '功能管理', path: '/moduleManage'},
      {id: '5-2', name: '日志管理', path: '/recordManage'},
    ]
  },
  // {
  //   id: 8, name: '指标管理', path: '', children: [
  //     {id: '8-1', name: '体系管理', path: '/system'},
  //     {id: '8-2', name: '维度管理', path: '/dim'},
  //     {id: '8-3', name: '指标管理', path: '/index'},
  //     {id: '8-4', name: '基础图层', path: '/blayer'},
  //     {id: '8-5', name: '公共图层', path: '/player'},
  //   ]
  // },
];

let rightNavList = [
  {id: '7-1', name: '修改密码', path: '', dialog: 'changePwd'},
  {id: '7-2', name: '退出', path: '/login'},
]

let indexLeftCode = [1, 2];
let indexRightCode = [6, 3];


export {
  leftNavList,
  rightNavList,
  indexLeftCode,
  indexRightCode
}

