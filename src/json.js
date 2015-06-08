export default {

  stringify (value) {

    return JSON.stringify(value)

  },

  parse (value, defaults = null) {

    try {

      return JSON.parse(value)

    } catch (error) {

      console.warn('JSON.parse error', error)
      return defaults

    }
  }
}
