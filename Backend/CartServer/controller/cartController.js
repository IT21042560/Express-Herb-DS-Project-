import Cart from '../models/CartModels.js'


export const Addcart = async (req, res) => {

    try {
        const Order_ID = req.body.Order_ID
        const Seller_ID = req.body.Seller_ID
        const Customer_Name = req.body.Customer_Name
        const Address = req.body.Address
        const Phone_No = req.body.Phone_No
        const Email = req.body.Email
        const Total_Amount = req.body.Total_Amount
        const Delivary = req.body.Delivary

        const newCart = new Cart({
            Order_ID,
            Seller_ID,
            Customer_Name,
            Address,
            Phone_No,
            Email,
            Total_Amount,
            Delivary
        })

        const response = newCart.save()
        if (response) {
            res.status(201).json({
                message: "success..!",
                payload: newCart
            })
        }
        else {
            res.status(401).json({
                message: "adding error..!"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error..!"
        })
    }
}

export const getCart = async (req, res) => {

    const allCart = await Cart.find();
    if (allCart) {
        res.status(200).json({
            message: "Fetched Successfully..!",
            payload: allCart
        })
    }
    else {
        res.status(404).json({
            message: "error fetched..!"
        })
    }
}

export const deleteCart = async (req, res) => {
    let Oid = req.body.oid
    console.log(Oid)
    const success = await Cart.findOneAndDelete({_id : Oid})
    if (success) {
        res.status(200).json({
            message: "Delete successfull..!"
        })

    } else {
        res.status(400).json({
            message: "Delete unsuccessfull..!"
        })
    }



}