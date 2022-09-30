export function compareNames(a,b) {
  const la = a.name.toLowerCase()
  const lb = b.name.toLowerCase()
  return genericCompare(la, lb)
}

export function compareHeight(a,b) {
  if (a.height === 'unknown') return 1;
  if (b.height === 'unknown') return -1;
  const ia = parseInt(a.height.replace(/,/g, ''))
  const ib = parseInt(b.height.replace(/,/g, ''))
  return genericCompare(ia,ib)
}

export function compareMass(a,b) {
  if (a.mass === 'unknown') return 1;
  if (b.mass === 'unknown') return -1;
  const fa = parseFloat(a.mass.replace(/,/g, ''))
  const fb = parseFloat(b.mass.replace(/,/g, ''))
  return genericCompare(fa,fb) 
}

function genericCompare(a,b){
  if (a < b)
     return -1;
  if (a > b)
    return 1;
  return 0;
}