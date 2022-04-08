const router = require("express").Router();
const controller = require("../controllers/peminjamanController");

router
  .route("/")
  .get(controller.getAllPeminjaman)
  .post(controller.addPeminjaman);
// .get(controller.getPeminjamanByEmail);

router.route("/:id_peminjaman").put(controller.updateKonfirmasiPeminjaman);

router.route("/:id_peminjam").get(controller.getPeminjamanById);

router.route("/konfirmasi/:id_pic").get(controller.getKonfirmasiPeminjamanById);

router
  .route("/detail/:id_peminjaman")
  .get(controller.getDetailPeminjamanByIdPeminjaman);

// router.route("/:id").delete(controller.deleteBook).put(controller.updateBook);

module.exports = router;
