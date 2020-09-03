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

  if (resumeExisting === "Resume an existing procurement plan") {
    res.redirect("/sprint-five/resume-email");
  } else {
    res.redirect("/sprint-four/step-by-step");
  }
});

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
