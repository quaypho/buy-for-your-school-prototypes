const contentful = require("contentful");
const express = require('express')
const router = express.Router()

const contentfulClient = contentful.createClient({
  space: "jspwts36h1os",
  accessToken: "TRhCuyh6kpjMf9Sx8siWHpUEVsvbca9XtXdj2NmwJ8A"
});

// Add your routes here - above the module.exports line

//Sprint 5 start

//Set initial variables
router.get("/sprint-five/non-linear-start", function(req, res){
  res.render("sprint-five/non-linear-start")
  req.session.data.specifyContactInformation = "Not started"
  req.session.data.specifyPreviousContract = "Not started"
  req.session.data.specifyFacilitiesAvailable = "Not started"
  req.session.data.specifyFoodRequirements = "Not started"
  req.session.data.specifyContractAims = "Not started"
  req.session.data.specifyProcurementName = "No name given"
});

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

router.get("/sprint-five/resume-email-code", function(req, res) {
  res.render("sprint-five/resume-email-code");
  req.session.data.specifyContactInformation = "Completed"
  req.session.data.specifyPreviousContract = "Not started"
  req.session.data.specifyFacilitiesAvailable = "In progress"
  req.session.data.specifyFoodRequirements = "Not started"
  req.session.data.specifyContractAims = "Not started"
});

router.post("/sprint-five/resume-email-code", function(req, res) {
  res.redirect("/sprint-five/non-linear-step-by-step");
});

router.get("/sprint-five/non-linear-resume-or-new", function(req, res) {
  res.render("sprint-five/non-linear-resume-or-new");
});

router.post("/sprint-five/non-linear-resume-or-new", function(req, res) {
  let nonLinearResumeExisting = req.session.data["non-linear-resume-existing"];

  if (nonLinearResumeExisting === "Yes - resume my existing procurement") {
    res.redirect("/sprint-five/resume-email");
  } else {
    res.redirect("/sprint-five/non-linear-goods-or-service");
  }
});

router.get("/sprint-five/resume-email", function(req, res) {
  res.render("sprint-five/resume-email");
});

router.post("/sprint-five/resume-email", function(req, res) {
  res.redirect("/sprint-five/resume-email-code");
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

router.get("/sprint-five/non-linear-facilities-available", function(req, res) {
  res.render("sprint-five/non-linear-facilities-available");
  req.session.data.specifyFacilitiesAvailable = "In progress"
});

router.post("/sprint-five/non-linear-facilities-available", function(req, res) {
  res.redirect("/sprint-five/non-linear-heavy-goods");
});

router.get("/sprint-five/non-linear-heavy-goods", function(req, res) {
  res.render("sprint-five/non-linear-heavy-goods");
});

router.post("/sprint-five/non-linear-heavy-goods", function(req, res) {
  res.redirect("/sprint-five/non-linear-table-goods");
});

router.get("/sprint-five/non-linear-table-goods", function(req, res) {
  res.render("sprint-five/non-linear-table-goods");
});

router.post("/sprint-five/non-linear-table-goods", function(req, res) {
  req.session.data.specifyFacilitiesAvailable = "Completed"
  res.redirect("/sprint-five/non-linear-step-2-task-list");
});

router.get("/sprint-five/non-linear-previous-supplier", function(req, res) {
  res.render("sprint-five/non-linear-previous-supplier");
  req.session.data.specifyPreviousContract = "In progress"
});

router.post("/sprint-five/non-linear-previous-supplier", function(req, res) {
  req.session.data.specifyPreviousContract = "Completed"
  res.redirect("/sprint-five/non-linear-step-2-task-list");
});

router.get("/sprint-five/non-linear-food-requirements", function(req, res) {
  res.render("sprint-five/non-linear-food-requirements");
  req.session.data.specifyFoodRequirements = "In progress"
});

router.post("/sprint-five/non-linear-food-requirements", function(req, res) {
  req.session.data.specifyFoodRequirements = "Completed"
  res.redirect("/sprint-five/non-linear-step-2-task-list");
});

router.get("/sprint-five/non-linear-contract-aims", function(req, res) {
  res.render("sprint-five/non-linear-contract-aims");
  req.session.data.specifyContractAims = "In progress"
});

router.post("/sprint-five/non-linear-contract-aims", function(req, res) {
  req.session.data.specifyContractAims = "Completed"
  res.redirect("/sprint-five/non-linear-step-2-task-list");
});

//Sprint 5 non-linear End

//Sprint 6 Start

//Set initial variables
router.get("/sprint-six/non-linear-start", function(req, res){
  res.render("sprint-six/non-linear-start")
  req.session.data.specifyContactInformation = "Not started"
  req.session.data.specifyPreviousContract = "Not started"
  req.session.data.specifyFacilitiesAvailable = "Not started"
  req.session.data.specifyFoodRequirements = "Not started"
  req.session.data.specifyContractAims = "Not started"
  req.session.data.specifyProcurementName = "No name given"
  req.session.data.stepTwoStatus = "Not started"
});

router.get("/sprint-six/resume-or-new", function(req, res) {
  res.render("sprint-six/resume-or-new");
});

router.post("/sprint-six/resume-or-new", function(req, res) {
  let resumeExisting = req.session.data["resume-existing"];

  if (resumeExisting === "Resume an existing procurement plan") {
    res.redirect("/sprint-six/resume-email");
  } else {
    res.redirect("/sprint-six/non-linear-new-procurement");
  }
});

router.get("/sprint-six/resume-email-code", function(req, res) {
  res.render("sprint-six/resume-email-code");
  req.session.data.specifyContactInformation = "Completed"
  req.session.data.specifyPreviousContract = "Not started"
  req.session.data.specifyFacilitiesAvailable = "In progress"
  req.session.data.specifyFoodRequirements = "Not started"
  req.session.data.specifyContractAims = "Not started"
  req.session.data.stepTwoStatus = "Not Started"
});

router.post("/sprint-six/resume-email-code", function(req, res) {
  res.redirect("/sprint-six/non-linear-step-by-step");
});

router.get("/sprint-six/non-linear-resume-or-new", function(req, res) {
  res.render("sprint-six/non-linear-resume-or-new");
});

router.post("/sprint-six/non-linear-resume-or-new", function(req, res) {
  let nonLinearResumeExisting = req.session.data["non-linear-resume-existing"];

  if (nonLinearResumeExisting === "Yes - resume my existing procurement") {
    res.redirect("/sprint-six/resume-email");
  } else {
    res.redirect("/sprint-six/non-linear-goods-or-service");
  }
});

router.get("/sprint-six/resume-email", function(req, res) {
  res.render("sprint-six/resume-email");
});

router.post("/sprint-six/resume-email", function(req, res) {
  res.redirect("/sprint-six/resume-email-code");
});

router.get("/sprint-six/non-linear-step-by-step", function(req, res) {
  res.render("sprint-six/non-linear-step-by-step");
});

router.get("/sprint-six/non-linear-step-2-task-list", function(req, res) {
  let stepTwoStatus = req.session.data.stepTwoStatus
  res.render("sprint-six/non-linear-step-2-task-list");
  if (stepTwoStatus !== "Completed"){
    req.session.data.stepTwoStatus = "In progress"
  }
});

router.get("/sprint-six/non-linear-supplier-communication", function(req, res) {
  res.render("sprint-six/non-linear-supplier-communication");
  req.session.data.specifyContactInformation = "In progress"
});

router.post("/sprint-six/non-linear-supplier-communication", function(req, res) {
  let nonLinearSupplierCommunication = req.session.data["supplier-communication-methods"];

  req.session.data.specifyContactInformation = "Completed"

  if (nonLinearSupplierCommunication === "Email") {
    res.redirect("/sprint-six/non-linear-supplier-email");
  }
  if (nonLinearSupplierCommunication === "Post") {
    res.redirect("/sprint-six/non-linear-supplier-post");
  }
  if (nonLinearSupplierCommunication === "Telephone") {
    res.redirect("/sprint-six/non-linear-supplier-telephone");
  }

});

router.get("/sprint-six/non-linear-facilities-available", function(req, res) {
  res.render("sprint-six/non-linear-facilities-available");
  req.session.data.specifyFacilitiesAvailable = "In progress"
});

router.post("/sprint-six/non-linear-facilities-available", function(req, res) {
  res.redirect("/sprint-six/non-linear-heavy-goods");
});

router.get("/sprint-six/non-linear-heavy-goods", function(req, res) {
  res.render("sprint-six/non-linear-heavy-goods");
});

router.post("/sprint-six/non-linear-heavy-goods", function(req, res) {
  res.redirect("/sprint-six/non-linear-table-goods");
});

router.get("/sprint-six/non-linear-table-goods", function(req, res) {
  res.render("sprint-six/non-linear-table-goods");
});

router.post("/sprint-six/non-linear-table-goods", function(req, res) {
  req.session.data.specifyFacilitiesAvailable = "Completed"
  res.redirect("/sprint-six/non-linear-step-2-task-list");
});

router.get("/sprint-six/non-linear-previous-supplier", function(req, res) {
  res.render("sprint-six/non-linear-previous-supplier");
  req.session.data.specifyPreviousContract = "In progress"
});

router.post("/sprint-six/non-linear-previous-supplier", function(req, res) {
  req.session.data.specifyPreviousContract = "Completed"
  res.redirect("/sprint-six/non-linear-step-2-task-list");
});

router.get("/sprint-six/non-linear-food-requirements", function(req, res) {
  res.render("sprint-six/non-linear-food-requirements");
  req.session.data.specifyFoodRequirements = "In progress"
});

router.post("/sprint-six/non-linear-food-requirements", function(req, res) {
  req.session.data.specifyFoodRequirements = "Completed"
  res.redirect("/sprint-six/non-linear-step-2-task-list");
});

router.get("/sprint-six/non-linear-contract-aims", function(req, res) {
  res.render("sprint-six/non-linear-contract-aims");
  req.session.data.specifyContractAims = "In progress"
});

router.post("/sprint-six/non-linear-contract-aims", function(req, res) {
  req.session.data.specifyContractAims = "Completed"
  req.session.data.stepTwoStatus = "Completed"
  res.redirect("/sprint-six/non-linear-step-2-task-list");
});

//Sprint 6 End

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

  const { title, helpText, next } = question.fields;

  const options = question.fields.options.map((option) => ({
    value: (option.fields.next || next).fields.slug,
    text: option.fields.label,
  }));

  res.render("contentful-test/question", { title, helpText, options });
});

router.post("/contentful-test/answer", (req, res) => {
  res.redirect(`/contentful-test${req.body["next-slug"]}`);
});

module.exports = router
