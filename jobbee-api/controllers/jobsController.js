
// Get all Jobs => /api/v1/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json ( {
        success : true,
        message : 'This route will display all jobs in the future'
    });
}