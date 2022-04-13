/**
 * 常用的更新类型
 * build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 * ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 * docs：文档更新
 * feat：新增功能
 * fix：bug 修复
 * perf：性能优化
 * refactor：重构代码(既没有新增功能，也没有修复 bug)
 * style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
 * test：新增测试用例或是更新现有测试
 * revert：回滚某个更早之前的提交
 * chore：不属于以上类型的其他类型(日常事务)
 *
 * 注意 : 后面必须加空格
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "test", // 测试代码
        "feat", // 新功能
        "fix", // 修复问题/BUG修复
        "refactor", // 重构(非代码变动也非BUG修复)
        "docs", // 文档注释
        "chore", // CI/CD变动或者构建工具的变动
        "style", // 代码格式调整
        "revert", // 代码回滚
      ],
      // 详情见JIRA https://wiki.med.gzhc365.com/pages/viewpage.action?pageId=125764859
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
