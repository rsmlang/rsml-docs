const hljs = require("highlight.js");
const fs = require("fs");

export default {
    // site-level options
    title: 'Rsml',
    description: 'a declarative styling language for the Roblox ecosystem.',
    srcDir: './src',
    cleanUrls: true,

    markdown: {
        languages: [ JSON.parse(fs.readFileSync('./rsmlang.json', 'utf8')) ]
    },
  
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rsmlang' },
        ],
        sidebar: [
            {
                items: [
                    { text: 'Introduction', link: '/intro' },
                ]
            },

            {
                text: "Docs",
                items: [
                    { text: "Selectors", link: "docs/selectors" },
                    { text: "Fields", link: "docs/fields" },
                    { text: "Data Types", link: "docs/data-types" },
                    { text: "Priorities", link: "docs/priorities" },
                    { text: "Derives", link: "docs/derives" },
                    { text: "Macros", link: "docs/macros" }
                ]
            }
        ]
    },
}