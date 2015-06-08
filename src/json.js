let factory = (_wrapper = null, _debug = null) => {

  let debug = (...args) => {

    if (_debug) {
      _debug(...args)
    } else if (console && console.warn) {
      console.warn(...args)
    } else {
      throw new Error('Please provide "debug" function. Console.log is not available in global scope')
    }
  }

  let getWrapper = () => {

    if (_wrapper) {
      return _wrapper
    } else if (JSON) {
      return JSON
    } else {
      throw new Error('Please provide JSON wrapper. JSON is not available in global scope.')
    }
  }

  const json = {

    stringify (value, defaults = null) {

      try {

        return getWrapper().stringify(value)

      } catch (error) {

        debug('JSON.stringify error', error)
        return defaults

      }

    },

    parse (value, defaults = null) {

      try {

        return getWrapper().parse(value)

      } catch (error) {

        debug('JSON.parse error', error)
        return defaults

      }
    }
  }

  return json

}

export default factory
