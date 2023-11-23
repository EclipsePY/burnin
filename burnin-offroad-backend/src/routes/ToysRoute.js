const {
  CreateToys,
  getSingleToys,
  getAllToys,
  deleteSingleToy,
  updateToy,
} = require("../controllers/ToysController");

const router = require("express").Router();

router.post("/new-toys", CreateToys);
router.get("/all-toys", getAllToys);
router.get("/single-toys/:id", getSingleToys);
router.delete("/single-toys-delete/:id", deleteSingleToy);
router.put("/update/:id", updateToy);

module.exports = router;
