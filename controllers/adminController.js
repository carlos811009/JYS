const adminService = require('../services/adminService')

const adminController = {
  getAllProducts: (req, res) => {
    adminService.getAllProducts(req, res, (data) => {
      return res.render('admin', { count: data.products.count, products: data.products.rows, totalPage: data.totalPage, pre: data.pre, next: data.next, page: data.page })
    })
  },
  deleteProduct: (req, res) => {
    adminService.deleteProduct(req, res, (data) => {
      if (data.status === 'success') {
        req.flash('success_msg', data.message)
        return res.redirect('back')
      }
    })
  },
  getProduct: (req, res) => {
    adminService.getProduct(req, res, (data) => {
      return res.render('edit', { product: data.product, category: data.category })
    })
  },
  putProduct: (req, res) => {
    adminService.putProduct(req, res, (data) => {
      if (data.status === 'success') {
        req.flash('success_msg', data.message)
        return res.redirect('back')
      }
    })
  },
  searchProducts: (req, res) => {
    adminService.searchProducts(req, res, (data) => {
      const isAdminSearch = true
      return res.render('admin', { count: data.products.count, products: data.products.rows, totalPage: data.totalPage, pre: data.pre, next: data.next, page: data.page, searchKey: data.searchKey, isAdminSearch })
    })
  },
  editCategoryPage: (req, res) => {
    adminService.editCategoryPage(req, res, (data) => {
      return res.render('edit', { isCategory: data })
    })
  },
  postCategory: (req, res) => {
    adminService.postCategory(req, res, (data) => {
      req.flash('success_msg', data.message)
      return res.redirect('back')
    })
  },
  getCategories: (req, res) => {
    adminService.getCategories(req, res, (data) => {
      return res.render('adminCategory', { categories: data.categories })
    })
  },
  getCategory: (req, res) => {
    adminService.getCategory(req, res, (data) => {
      return res.render('edit', { category: data.category, isCategory: data.isCategory })
    })
  },
  deleteCategory: (req, res) => {
    adminService.deleteCategory(req, res, (data) => {
      req.flash('success_msg', data.message)
      return res.redirect('back')
    })
  }
}

module.exports = adminController