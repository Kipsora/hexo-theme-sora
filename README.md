# hexo-theme-sora
SORA is a blog theme for Hexo where you can show your favorite pictures. Click [here](https://jcyang.moe) to see the demo. Thanks to the wonderful wordpress theme [sakura](https://github.com/mashirozx/Sakura) where I borrowed many ideas from.

Current released version are `0.9.0`, and you can see the usage to gain more details about the installation and customization. But keep in mind that this release is still under developping so it may contains bugs and if you find any of them or just want to make suggestions, please feel free to contact me. 

## Usage
### Installation
```bash
# Go to the root directory of your hexo blog
cd /path/to/your/blog
git clone https://github.com/kipsora/hexo-theme-sora.git themes/sora
# Install necessary plugins
npm install --save hexo-prism-plugin
npm install --save hexo-front-matter-excerpt
```

### Background
* Add your favorite landscape background images to source/img
* Register each background image in `_config.yml`

### Brand
* Change the title in `_config.yml`
* Change the HTML source code in `layout/navigator.ejs`
