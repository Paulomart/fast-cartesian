import checkSpeed from 'check-speed'
import cartesianProduct from 'cartesian-product'
import cartesian from 'cartesian'
import lodash from 'lodash'
// eslint-disable-next-line import/no-unassigned-import
import 'lodash.product'
import FastCartesianProduct from 'fast-cartesian-product'

import { cartesianArray } from '../src/main.js'

import { variants } from './variants.js'

const testFastCartesian = {
  title: 'fast-cartesian',
  main: (...args) => cartesianArray(...args),
  variants,
}

const testCartesianProduct = {
  title: 'cartesian-product',
  main: (...args) => cartesianProduct(args),
  variants,
}

const testFastCartesianProduct = {
  title: 'fast-cartesian-product',
  main: (...args) => [...new FastCartesianProduct(args)],
  variants,
}

const testCartesian = {
  title: 'cartesian',
  main: (...args) => cartesian(args),
  variants,
}

const testLodashProduct = {
  title: 'lodash.product',
  main: (...args) => lodash.product(...args),
  variants,
}

checkSpeed(
  {
    testFastCartesian,
    testCartesianProduct,
    testFastCartesianProduct,
    testCartesian,
    testLodashProduct,
  },
  { repeat: 1e2 },
)
