const chartdata = require('../Model/chartSchema');

exports.getChart = async (req, res) => {
  try {
    const { year } = req.params;

    const data = await chartdata.findOne({
      Year: year,
    });

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
};