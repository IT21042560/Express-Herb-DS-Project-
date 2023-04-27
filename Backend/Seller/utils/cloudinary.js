const cloudinary = require("cloudinary");
const { resolve } = require("path");
cloudinary.config({
  cloud_name: "dq0a1i1wq",
  api_key: "156219658215297",
  api_secret: "NfduObZaB_ZHxoHFk6l_Be5Owyw",
});

const cloudinaryUploadImg = async (fileToUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUploads, (result) => {
      resolve(
        {
          url: result.secure_url,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};
module.exports = cloudinaryUploadImg;
