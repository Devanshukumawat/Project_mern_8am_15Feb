const router = require("express").Router()
const UserC = require("../controller/usercontroller")



router.get('/',UserC.HomePageController)
router.post("/regdata",UserC.RegDataController)
router.post("/logindata",UserC.LoginDataController)






module.exports = router