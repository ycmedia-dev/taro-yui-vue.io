const pathNameMap = new Map([
  ['/component/', '组件'],
  ['/component/basic/', '基础'],
  ['/component/form/', '表单'],
])
const { fs, path } = require('@vuepress/shared-utils')
const rootPath = path.join(__dirname, '../');

function getFileNameList(basePath, excludeNameMap) {
  if (basePath.indexOf('//')) {
    basePath = basePath.replace('//', '/')
  }
  const fileNameList = [];
  const excludeMd = excludeNameMap.has('*.md')
  fs.readdirSync(basePath).forEach((item) => {
    if (excludeNameMap.has(item) || (excludeMd && item.indexOf('.md') > -1)) {
      return;//continue
    }
    fileNameList.push(item)
  })
  return fileNameList;
}

//是否包含文件夹
function hasFolder(fileNameList) {
  let item;
  for (let k in fileNameList) {
    item = fileNameList[k]
    if (item != 'README.md' && item.indexOf('.md') > -1) {
      return false;
    }
  }
  return true;
}

//获得目录名称
function getPathName(path) {
  path = path.replace(rootPath, '')
  if (!path.endsWith('/')) {
    path = `${path}/`
  }
  if (!pathNameMap.has(path)) {
    console.log(`${path} 需要中文目录名`)
    return path;
  }
  return pathNameMap.get(path)
}

let navList = [];
let sidebar = {};
getFileNameList(rootPath, new Map([
  ['.vuepress', ''],
  ['*.md', '']
])).forEach((item) => {
  const path = `/${item}/`

  let navChildrenList = []
  sidebar[path] = []

  //二级目录列表
  const levelTwoPath = `${rootPath}/${item}`
  const levelTwoFileNameList = getFileNameList(levelTwoPath, new Map([['README.md', '']]));

  //三级目录列表
  levelTwoFileNameList.forEach((levelThreeItem) => {
    const levelThreePath = `${levelTwoPath}/${levelThreeItem}`
    navChildrenList.push({
      text: getPathName(levelThreePath),
      link: `/${item}/#${levelThreeItem}`
    })
    if (levelThreePath.endsWith(".md")) {
      sidebar[path].push(levelThreeItem.replace('.md', ''))
    } else {
      const levelThreeFileNameList = getFileNameList(levelThreePath, new Map([['README.md', '']]))
      const levelThreeSidebar = {
        title: getPathName(levelThreePath),
        collapsable: true,
        children: []
      }
      if (hasFolder(levelThreeFileNameList)) {
        levelThreeFileNameList.forEach((levelFourItem) => {
          const levelFourPath = `${levelThreePath}/${levelFourItem}/`
          levelThreeSidebar.children.push({
            title: getPathName(levelFourPath),
            collapsable: false,
            children: getFileNameList(levelFourPath, new Map([['README.md', '']]))
              .map(filename => `${levelThreeItem}/${levelFourItem}/${filename.slice(0, -3)}`)
              .sort()
          })
        })
      } else {
        levelThreeSidebar.children = levelThreeFileNameList.map(filename => `${levelThreeItem}/${filename.slice(0, -3)}`)
          .sort()
      }

      sidebar[path].push(levelThreeSidebar)
    }
  });
  if (pathNameMap.has(path)) {
    navList.push({
      text: pathNameMap.get(path),
      items: navChildrenList
    })
  }
})
module.exports = {
  dest: '../../public',
  base: '/taro/taro-yui-vue/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: 'Y UI',
  description: '一个基于 Vue 的 UI 组件库',
  themeConfig: {
    nav: navList,
    sidebar: sidebar
  },
  plugins: [
    ['fulltext-search'],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ],
}