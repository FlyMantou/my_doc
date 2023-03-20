

const path = require('path')
const rootPath = path.dirname(__dirname)
//导入生成侧边栏的工具类
const { sideBarTool } = require(path.join(__dirname, './utils/index.js'))

// 需要排除的一些目录
let unDirIncludes = ['node_modules', 'assets', 'public', '网络工程']
// 只需要处理后缀的文件类型
let SuffixIncludes = ['md', 'html']
//使用方法生生成侧边栏
// 侧边栏
let sidebar = sideBarTool.genSideBar(rootPath, unDirIncludes, SuffixIncludes)


module.exports = {
    title: '云直播文档',
    description: '云直播安卓SDK文档',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        sidebar: sidebar,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/pages/9a7ee40fc232253e/'},
            {text: 'External', link: 'https://google.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    { text: '学习', link: '/pages/9a7ee40fc232253e/' }
                ],
            }

        ]
    },
    markdown: {
        plugins: [
            '@org/foo', // 等价于 @org/markdown-it-foo，如果对应的包存在
            ['markdown-it-bar', {
                // 提供你的选项
            }]
        ]
    }
}

