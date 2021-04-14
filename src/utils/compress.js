import Compressor from "compressorjs";

const compressFile = async (quality, height, file) => {
  return new Promise((resolve) => {
    new Compressor(file, {
      quality,
      height,
      maxHeight: height,
      success(result) {
        const myFile = new File([result], result.name);
        resolve(myFile);
      },
      error(err) {
        console.log(err.message);
      },
    });
  });
};

export default compressFile;
