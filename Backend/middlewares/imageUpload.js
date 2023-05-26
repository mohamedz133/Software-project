import multer from "multer";

// define a function to set multer options
const multerOpt = () => 
{
    // storage -> memory (as buffer) -> to process
    const storage = multer.memoryStorage();

    // only image is allowed
    const fileFilter = (req, file, cb) =>
    {
        if (file.mimetype.startsWith("image"))
        {
            // file accepted 
            cb(null, true);
        }
        else
        {
            cb(null, false);
        }
    }

    const upload = multer({storage, fileFilter});
    return upload;
}


const uploadimage = (img) => multerOpt().single(img);

export {uploadimage};