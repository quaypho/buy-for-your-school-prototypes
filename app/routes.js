const contentful = require("contentful");
const express = require('express')
const router = express.Router()

const contentfulClient = contentful.createClient({
  space: "jspwts36h1os",
  accessToken: "TRhCuyh6kpjMf9Sx8siWHpUEVsvbca9XtXdj2NmwJ8A"
});

// Add your routes here - above the module.exports line

router.get("/sprint-five/resume-or-new", function(req, res) {
  res.render("sprint-five/resume-or-new");
});

router.post("/sprint-five/resume-or-new", function(req, res) {
  let resumeExisting = req.session.data["resume-existing"];

  if (resumeExisting === "Yes - resume my existing procurement") {
    res.redirect("/sprint-five/resume-email");
  } else {
    res.redirect("/sprint-four/step-by-step");
  }
});

module.exports = router
