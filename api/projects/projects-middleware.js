const Project = require('../projects/projects-model')

function logger(req, res, next) {
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`[${timestamp}] ${method} to ${url}`)
  next()
}

function validateProject(req, res, next) {
    const { text } = req.body 
    if (!text || !text.trim()) {
      req.status(400).json({ 
        message: 'missing required text field',
      })
    } else {
      req.text = text.trim()
      next()
    }
  }

module.exports = {
    validateProject,
    logger,
  }