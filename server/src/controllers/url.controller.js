const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const Url = require("../models/url.model");

const baseUrl = process.env.BASEURI;

router.post("/shorten", async (req, res) => {
    const { longUrl, code } = req.body;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base URL");
    }

    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                longUrl,
            });

            if (url && !code) {
                return res.json(url);
            }

            let urlCode = code;
            let existingUrlWithUrl;
            let shortUrl;

            while (!urlCode || existingUrlWithUrl) {
                urlCode = shortid.generate();
                shortUrl = baseUrl + "/" + urlCode;
                existingUrlWithUrl = await Url.findOne({
                    urlCode,
                });
            }

            url = new Url({
                longUrl,
                shortUrl,
                urlCode,
            });
            await url.save();
            res.status(201).json(url);
        } catch (err) {
            res.status(500).send({ err: "Server Error" });
        }
    } else {
        res.status(401).send({ err: "Invalid Url" });
    }
});

module.exports = router;
