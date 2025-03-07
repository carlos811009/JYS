const userService = require('../services/userService')

const userController = {
  register: (req, res) => {
    userService.register(req, res, (data) => {
      if (data.status === 'success') {
        req.flash('success_msg', data.message)
        return res.redirect('back')
      }
      if (data.status === 'error') {
        req.flash('error_msg', data.message)
        return res.redirect('back')
      }
    })
  },
  login: (req, res) => {
    res.redirect('/')
  },
  logout: (req, res) => {
    req.logout()
    req.flash('success_msg', '登出成功')
    return res.redirect('/login')
  },
  likeProducts: (req, res) => {
    userService.likeProducts(req, res, (data) => {
      if (data.status === 'success') {
        req.flash('success_msg', data.message)
        return res.redirect('back')
      }
      if (data.status === 'error') {
        req.flash('error_msg', data.message)
        return res.redirect('back')
      }
    })
  },
  deleteLike: (req, res) => {
    userService.deleteLike(req, res, (data) => {
      if (data.status === 'success') {
        req.flash('success_msg', data.message)
        return res.redirect('back')
      }
    })
  },
  getUserLike: (req, res) => {
    userService.getUserLike(req, res, (data) => {
      return res.render('like', { products: data.products.rows, category: data.category, pre: data.pre, next: data.next, page: Number(data.page), totalPage: data.totalPage })
    })
  },
  searchLikeProduct: (req, res) => {
    userService.searchLikeProduct(req, res, (data) => {
      const searchLike = true
      return res.render('like', { products: data.products.rows, category: data.category, searchLike, totalPage: data.totalPage, page: data.page, searchKey: data.searchKey, next: data.next, pre: data.pre })
    })
  }

}

module.exports = userController