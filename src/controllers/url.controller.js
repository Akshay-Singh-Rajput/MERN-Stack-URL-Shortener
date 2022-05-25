// Importing required  packages
const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");

// creating express route handler
const router = express.Router();

// import the Url database model
const Url = require("../models/url.model");

// The API base Url endpoint
const baseUrl = "http:localhost:5000";

router.post("/shorten", async (req, res) => {

    const { longUrl } = req.body; // destructure the longUrl from req.body.longUrl
    console.log('longUrl',longUrl)
    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base URL");
    }

    // if valid, we create the url code
    const urlCode = shortid.generate();

    // check long url if valid using the validUrl.isUri method
    if (validUrl.isUri(longUrl)) {
        try {
            /* The findOne() provides a match to only the subset of the documents 
                  in the collection that match the query. In this case, before creating the short URL,
                  we check if the long URL was in the DB ,else we create it.
                  */
            let url = await Url.findOne({
                longUrl,
            });

            // url exist and return the respose
            if (url) {
                res.json(url);
            } else {
                // join the generated short code the the base url
                const shortUrl = baseUrl + "/" + urlCode;

                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date(),
                });
                await url.save();
                // await Url.create(url)
                // console.log(url)
                res.status(201).json(url);
            }
        } catch (err) {
            // exception handler
            // console.log(err);
            res.status(500).send({ err: "Server Error"});
        }
    } else {
        // console.log('invalid url')
        res.status(401).send({ err: "Invalid Url"} );
    }
});

module.exports = router;
