const pool = require("../config/db.js");


// get an array of all the jobs posted

module.exports.get_all_jobs = async (req, res, next) => {
    try {
        const all_jobs = await pool.query("SELECT * FROM jobs");
        console.log(`Here is the job!!`);
        res.status(200).json({ all_players : all_jobs.rows})
    }
    catch (err){
        res.status(400).json({err});
    }
}


