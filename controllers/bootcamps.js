//Description Get All bootcamps
// Route GET/api/v1/bootcamps
//Access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: 'Show all bootcamps' });
};

//Description Get single bootcamp
// Route GET/api/v1/bootcamps/:id
//Access Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Show bootcamp ${req.params.id} ` });
};

//Description Create bootcamp
// Route POST/api/v1/bootcamps/:id
//Access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: 'Create new bootcamp' });
};

//Description Update bootcamp
// Route PUT/api/v1/bootcamps/:id
//Access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id} ` });
};

//Description Delete  bootcamp
// Route DELETE/api/v1/bootcamps/:id
//Access Public

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: ` Delete bootcamp ${req.params.id} ` });
};
