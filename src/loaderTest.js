module.exports =  (source) => {
  console.log('\n--- loader加载:------------------\n',source)
  source = source.replace(/love/, "❤")
  return `export default ${JSON.stringify(source)}`;
}