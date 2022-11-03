const { defineConfig } = require('@vue/cli-service');
process.env.VUE_APP_baseId = 'appTstPp0g20fQA2b';
process.env.VUE_APP_tables = "tblkFpWzKkk9IbNIf";
process.env.VUE_APP_tables2 = "tbljvU0FGVULYx6rM";
process.env.VUE_APP_tables3 = 'tbl0HJ8Lm306rhcTU';
process.env.VUE_APP_api = "keyaJEowLnEfKAamU";
process.env.VUE_APP_url = `https://api.airtable.com/v0/${process.env.VUE_APP_baseId}/${process.env.VUE_APP_tables}?api_key=${process.env.VUE_APP_api}`;
process.env.VUE_APP_url2 = `https://api.airtable.com/v0/${process.env.VUE_APP_baseId}/${process.env.VUE_APP_tables2}?api_key=${process.env.VUE_APP_api}`;
process.env.VUE_APP_url3 = `https://api.airtable.com/v0/${process.env.VUE_APP_baseId}/${process.env.VUE_APP_tables3}?api_key=${process.env.VUE_APP_api}`;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "DIR" : "/",
  outputDir: "DIR",
})

