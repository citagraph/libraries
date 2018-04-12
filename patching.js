function patching(original, cover) {
  Object.keys(cover).forEach(function (key, i) {
    if (original.hasOwnProperty(key)) {
      if (typeof original[key] === 'object'){
        original[key] = patching(original[key], cover[key])
      } else {
        original[key] = cover[key]
      }
    }
  });
  return original;
}
