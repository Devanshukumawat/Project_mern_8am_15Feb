const router = require("express").Router()
const UserC = require("../controller/usercontroller")
const AdminC = require("../controller/admincontroller")



router.get('/',UserC.HomePageController)
router.post("/regdata",UserC.RegDataController)
router.post("/logindata",UserC.LoginDataController)
router.post("/adminproductsadd",AdminC.AdminproductsController)
router.get("/alladminproduct",AdminC.AlladminproductController)
router.delete("/adminproductdelete/:id",AdminC.AdminProductDeleteController)
router.get("/adminupdatedata/:id",AdminC.AdminUpdateProductController)
router.put("/adminupdatedproduct/:id",AdminC.AdminupdatedDataController)
router.get("/userproducts",UserC.UserProductsController)




module.exports = router