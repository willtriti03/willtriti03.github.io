Array.from(document.getElementsByTagName('path')).map(path => {
  console.log(path.getTotalLength());
  const debugPath = path.cloneNode();
  debugPath.classList.add('line--debug');
  if (path.parentNode) path.parentNode.insertBefore(debugPath.cloneNode(), path);
});

