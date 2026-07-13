const picture = require('../Model/pictureSchema')


console.log(picture.collection.name)

exports.getPicture = async (req, res) => {
    try {

        const data = await picture.find()

        res.status(200).json({
        success: true,
        data: data,
        })
    }

    catch(error) {
        res.status(500).json({
        success: false,
        message: error.message,
        })
    }
};