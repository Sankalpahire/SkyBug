
import Products from '../models/ProductsModel.js'; // Import your Category model
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'



// Fetch items based on priority in ascending order
export const fetchAllItems = async(req , res) => {

  try {
    const items = await Products.find().sort({ priority: 1 }).exec();

    if (!items || items.length == 0) {
      return res.status(404).json({ message: 'No items found' });
    }
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'fetchAllItems failed' });
  }
}
 
export const getbyId = async (req, res) => {
  try {
    
    const item = await Products.findOne({ slug: req.query.slug });

    if (!item) {
      return res.status(404).json({ message: 'Failed to fetch details' });
    }

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'getbyId failed' });
  }
};



// export const registerItem = async(req , res) => {
//   try {

//     const keysCount = Object.keys(req.body).length;

//     // if (keysCount > 1) {
//     //   return res.status(400).json({
//     //     status: false,
//     //     error: "Only one product can be created at once.",
//     //     count: keysCount,
//     //   });
//     // }

//     // To decide priority
//     const types = {
//       "Electronics" :1,
//       "Clothing" :2,
//       "Books" :3,
//       "Grocery" :4,
//       "Furniture" :5,
//     }  
//     array.forEach(element => {
    
//       const {
//         category_type,
//         product_company,
//         product_name,
//         price,
//         description,
//         product_image,
//         seller_id,
//       } = req.body;
  
//       const requiredFields = [
//         "category_type",
//         "product_company",
//         "product_name",
//         "price",
//         "description",
//         "product_image",
//         "seller_id",
//       ];
      
//       const missingFields = [];
      
//       requiredFields.forEach(field => {
//         if (!req.body[field]) {
//           missingFields.push(field);
//         }
//       });
      
//       if (missingFields.length > 0) {
//         return res.status(400).json({
//           error: `Missing required fields: ${missingFields.join(", ")}`,
//         });
//       }
  
//        // Check for duplicate entry
//       const existingItem = await Products.findOne({
//         product_company,
//         product_name,
//       });
  
//       if (existingItem) {
//         return res.status(400).json({
//           status: false,
//           error: "Item with the same company name and product name already exists.",
//         });
//       }
//       const slug = generateSlug(category_type, product_name, price);
//       const priority = types[category_type];
  
//       if (!priority || !slug){
  
//         return res.status(400).json({
//           status: false,
//           error: "slug generation failed or priority generation failed",
//         })
  
//       }
  
//       const newItem = new Products({
//         category_type,
//         product_company,
//         product_name,
//         price,
//         description,
//         slug,
//         product_image,
//         priority,
//         seller_id,
//       });
  
//       const savedItem = await newItem.save();
//   });

//     if (!savedItem) {

//       return res.status(500).json({ 
//         status: false, 
//         message: 'Failed to save item' 
//       });

//     }

//     res.json({
//       "status": true,
//       "message": "Item saved successfully",
//       "data": savedItem
//     });



//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       status: false,
//       message: 'registerItem failed' 
//     });

//   }
// };




export const registerItem = async (req, res) => {
  try {
    const types = {
      "Electronics": 1,
      "Clothing": 2,
      "Books": 3,
      "Grocery": 4,
      "Furniture": 5,
    };

    const items = req.body; // Assuming req.body is an array of items

    // Validate if items array is not empty
    if (!items || items.length === 0) {
      return res.status(400).json({
        status: false,
        error: "No items provided for registration.",
      });
    }

    
    for (const item of items) {
      const {
        category_type,
        product_company,
        product_name,
        price,
        description,
        product_image,
        seller_id,
      } = item;

      const requiredFields = [
        "category_type",
        "product_company",
        "product_name",
        "price",
        "description",
        "product_image",
        "seller_id",
      ];

      const missingFields = [];

      requiredFields.forEach((field) => {
        if (!item[field]) {
          missingFields.push(field);
        }
      });

      if (missingFields.length > 0) {
        return res.status(400).json({
          status: false,
          error: `Missing required fields in item: ${missingFields.join(", ")}`,
        });
      }

      // Check for duplicate entry
      const existingItem = await Products.findOne({
        product_company,
        product_name,
      });

      if (existingItem) {
        return res.status(400).json({
          status: false,
          error: "Item with the same company name and product name already exists.",
        });
      }

      const slug = generateSlug(category_type, product_name, price);
      const priority = types[category_type];

      if (!priority || !slug) {
        return res.status(400).json({
          status: false,
          error: "Slug generation or priority generation failed",
        });
      }

      const newItem = new Products({
        category_type,
        product_company,
        product_name,
        price,
        description,
        slug,
        product_image,
        priority,
        seller_id,
      });

      const savedItem = await newItem.save();
    }

    res.json({
      status: true,
      message: "Items saved successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: false,
      message: 'registerItem failed',
    });
  }
};

export const registerItemsblulk = async (req, res) => {
  try {
    const types = {
      "Electronics": 1,
      "Clothing": 2,
      "Books": 3,
      "Grocery": 4,
      "Furniture": 5,
    };

    const items = req.body; // Assuming req.body is an array of items

    // Validate if items array is not empty
    if (!items || items.length === 0) {
      return res.status(400).json({
        status: false,
        error: "No items provided for registration.",
      });
    }

    const newItemArray = [];

    for (const item of items) {
      const {
        category_type,
        product_company,
        product_name,
        price,
        description,
        product_image,
        seller_id,
      } = item;

      const requiredFields = [
        "category_type",
        "product_company",
        "product_name",
        "price",
        "description",
        "product_image",
        "seller_id",
      ];

      const missingFields = [];

      requiredFields.forEach((field) => {
        if (!item[field]) {
          missingFields.push(field);
        }
      });

      if (missingFields.length > 0) {
        return res.status(400).json({
          status: false,
          error: `Missing required fields in item: ${missingFields.join(", ")}`,
        });
      }

      // Check for duplicate entry
      const existingItem = await Products.findOne({
        product_company,
        product_name,
      });

      if (existingItem) {
        return res.status(400).json({
          status: false,
          error: "Item with the same company name and product name already exists.",
        });
      }

      const slug = generateSlug(category_type, product_name, price);
      const priority = types[category_type];

      if (!priority || !slug) {
        return res.status(400).json({
          status: false,
          error: "Slug generation or priority generation failed",
        });
      }

      const newItem = new Products({
        category_type,
        product_company,
        product_name,
        price,
        description,
        slug,
        product_image,
        priority,
        seller_id,
      });

      newItemArray.push(newItem);
    }

    // Use insertMany to insert multiple items at once
    await Products.insertMany(newItemArray);

    res.json({
      status: true,
      message: "Items saved successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: false,
      message: 'registerItems failed',
    });
  }
};


const generateSlug = (categoryType, productName, price) => {
  // Combine the product name, category type, and price
  const combinedString = `${productName}-${categoryType}-${price}`;

  return combinedString
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
};
