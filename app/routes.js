const contentful = require("contentful");
const express = require('express')
const router = express.Router()

const contentfulClient = contentful.createClient({
  space: "jspwts36h1os",
  accessToken: "TRhCuyh6kpjMf9Sx8siWHpUEVsvbca9XtXdj2NmwJ8A"
});

// Add your routes here - above the module.exports line

let step2Status = "Not started";

router.get("/sprint-five/resume-or-new", function(req, res) {
  res.render("sprint-five/resume-or-new");
});

router.post("/sprint-five/resume-or-new", function(req, res) {
  let resumeExisting = req.session.data["resume-existing"];

  if (resumeExisting === "Resume an existing procurement plan") {
    res.redirect("/sprint-five/resume-email");
  } else {
    res.redirect("/sprint-four/step-by-step");
  }
});

router.get("/sprint-five/non-linear-resume-or-new", function(req, res) {
  res.render("sprint-five/non-linear-resume-or-new");
});

router.post("/sprint-five/non-linear-resume-or-new", function(req, res) {
  let nonLinearResumeExisting = req.session.data["non-linear-resume-existing"];

  if (nonLinearResumeExisting === "Yes - resume my existing procurement") {
    res.redirect("/sprint-five/resume-email");
  } else {
    res.redirect("/sprint-five/plan-goods-or-service");
  }

});

router.get("/sprint-five/non-linear-step-by-step", function(req, res) {
  res.render("sprint-five/non-linear-step-by-step");

});

//Sprint 5 non-linear

router.get("/sprint-five/non-linear-supplier-communication", function(req, res) {
  res.render("sprint-five/non-linear-supplier-communication");
  req.session.data.specifyContactInformation = "In progress"
});

router.post("/sprint-five/non-linear-supplier-communication", function(req, res) {
  let nonLinearSupplierCommunication = req.session.data["supplier-communication-methods"];

  req.session.data.specifyContactInformation = "Completed"

  if (nonLinearSupplierCommunication === "Email") {
    res.redirect("/sprint-five/non-linear-supplier-email");
  }
  if (nonLinearSupplierCommunication === "Post") {
    res.redirect("/sprint-five/non-linear-supplier-post");
  }
  if (nonLinearSupplierCommunication === "Telephone") {
    res.redirect("/sprint-five/non-linear-supplier-telephone");
  }

});

//Sprint 5 non-linear End

//Contentful settings

router.get("/contentful-test/:slug", async (req, res) => {
  const questionEntries = await contentfulClient.getEntries({
    content_type: "question",
    include: 2
  });
  const question = questionEntries.items.find(
    (entry) => entry.fields.slug === `/${req.params.slug}`
  );

  if (!question) {
    const pageEntries = await contentfulClient.getEntries({
      content_type: "unmanagedPage",
    });
    const page = pageEntries.items.find(
      (entry) => entry.fields.slug === `/${req.params.slug}`
    );

    if (!page) {
      res.sendStatus(404);
      return;
    }

    res.render(`contentful-test${page.fields.slug}`);
    return;
  }

  const { title, helpText } = question.fields;

  const options = question.fields.options.map((option) => ({
    value: option.fields.next.fields.slug,
    text: option.fields.label,
  }));

  res.render("contentful-test/question", { title, helpText, options });
});

router.post("/contentful-test/answer", (req, res) => {
  res.redirect(`/contentful-test${req.body["next-slug"]}`);
});

module.exports = router
