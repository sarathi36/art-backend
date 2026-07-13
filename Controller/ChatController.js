const chartdata = require('../Model/chartSchema');


console.log(chartdata.collection.name, 'chart table name')

exports.getChart = async (req, res) => {
  try {
    const { year } = req.params;

    console.log("Received year:", year);

    const data = await chartdata.findOne({
      Year: year,
    });

    console.log("Mongo result:", data);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}