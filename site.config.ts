import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'fdb25041b2c74563b7738a89ef958c11',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Muon Digital Marketing',
  domain: 'moun.ltd',
  author: 'Muon',
  seotitle: 'Muon',

  // open graph metadata (optional)
  description: 'ELEVATE YOUR BRAND WITH INNOVATIVE STRATEGIES AND DATA-DRIVEN CAMPAIGNS.',

  // social usernames (optional)
  twitter: '#',
  github: '#',
  linkedin: '#',
  facebook: '#',
  instagram: '#',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: 'c544d8865c8d4a4d9ec67f3727b4cfcf'
    },    
    {
      title: 'About',
      pageId: '5823035fc1694a38a5db71d7fd2fbae7'
    },
    {
      title: 'Contact',
      pageId: '45b571e2af12484d9728787f5a97e3fa'
    }
  ]
})
