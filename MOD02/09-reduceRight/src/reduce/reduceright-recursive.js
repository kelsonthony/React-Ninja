'use strict'

import mainReduce from './reduce-recursive-main'
import reverse from '../reverse/reverse-recursive'

const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRight