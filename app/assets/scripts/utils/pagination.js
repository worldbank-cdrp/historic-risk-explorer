/**
 * given current disaster and list of all disasters, figures out which is the next disaster
 * @param {object} disaster object represntation of current disaster
 * @param {array} disasters array of disasters
 * @return {object} next disaster object
 */
export function nextDisaster (disaster, disasters) {
  const isLastDisaster = (disaster.index === disasters.length - 1);
  return !isLastDisaster ? disasters[disaster.index + 1] : disasters[0];
}

/**
 * returns disaster link
 * @param {object} disaster object with next/previous disaster details
 * @return {string} link to disaster page
 */
function disasterLink (disaster) {
  return `/${disaster.c}-${disaster.y}-${disaster.t.toLowerCase()}`;
}

/**
 * makes text for next disaster
 * @param {object} nextDisaster object with next disaster details
 * @return {string} string with name, year, and type of next disaster
 */
export function nextDisasterText (nextDisaster) {
  return `${nextDisaster.n} ${nextDisaster.y} ${nextDisaster.t}`;
}

/**
 * given current disaster, disaster list, and history, replaces current with next disaster hash
 * @param {object} props component props object
 */
export function makeNextDisaster (props) {
  const isLastDisaster = (props.disaster.index === props.disasters.length - 1);
  let nextDisaster = !isLastDisaster ? props.disasters[props.disaster.index + 1] : props.disasters[0];
  nextDisaster.index = !isLastDisaster ? props.disaster.index + 1 : 0;
  props._setDisaster(nextDisaster);
  props.history.push(disasterLink(nextDisaster));
}
