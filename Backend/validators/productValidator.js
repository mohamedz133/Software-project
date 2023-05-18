import {check} from "express-validator";
import {validator} from "../middlewares/errorValidator.js";

const createProductValidator=[
    check('title')
    .notEmpty().withMessage("title is required")
    .isLength({min:3}).withMessage("must be at least 3 ch")
    ,
    check(" description")
    .isLength({max:2000}).withMessage("too long  description")
    ,
    check("quantity")
    .notEmpty().withMessage("quantity is required").isNumeric().withMessage("quantity must be a num"),
    check("price")
    .notEmpty().withMessage("price is required").isNumeric().withMessage(" price must be a num ").isLength({max:11}).
withMessage("too long price").toFloat(),
check("colors")
.optional(),
    check("department")
    .notEmpty().withMessage(" department is required").isLength({min:3}).withMessage("too short"),
    check("countInStack")
    .notEmpty().withMessage("countInStack is required").isNumeric().withMessage("countInStack must be a num").
    isLength({min:0,max:250})
    .withMessage("Invalid num"),
    
    check("rating")
    .optional().isNumeric().withMessage("must be a num"),
    validator
];
const updateProductValidator=[   
     check("id")
.isMongoId().withMessage("Invalid Id format"),
validator
];
const deleteProductValidator=[   
    check("id")
.isMongoId().withMessage("Invalid Id format"),
validator
];
    const getProductValidator=[   
        check("id")
   .isMongoId().withMessage("Invalid Id format"),
   validator
   ];
   export{createProductValidator,updateProductValidator,deleteProductValidator,getProductValidator };
   
