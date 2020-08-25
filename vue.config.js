
module.exports = {
    publicPath: './',
    outputDir:"dist1",
   devServer:{
       proxy:{
           '/api':{
               target:'http://localhost:8081',
                // target:'http://106.13.164.46:8081',
               ws:true,
               changeOrigin:true,
               pathRewrite:{
                '^/api':''
               }
           }
       }
   }
        
}
