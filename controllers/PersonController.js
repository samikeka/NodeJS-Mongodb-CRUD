var person = require("../model/person");

addPerson = (req, res) => {
  var pers = new person({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });
  pers.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};
getPeople = (req, res) => {
  person.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index.ejs", { data: data });
    }
  });
};

deletePerson = (req, res) => {
  person.findOneAndDelete(req.param.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

editPerson = (req, res) => {
  person.findById(req.params.id).exec((err, personat) => {
    res.render("../views/editPerson.ejs", { personat: personat });
  });
};
editPersonUpdate = (req, res) => {
  var id = req.param.id;
  var updatePerson = person.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      },
    }
  );

  updatePerson.then((results) => {
    res.redirect("/");
  });
};
getPersonForm = (req, res) => {
  res.render("addPerson");
};
module.exports.editPersonUpdate = editPersonUpdate;
module.exports.getPersonForm = getPersonForm;
module.exports.editPerson = editPerson;
module.exports.deletePerson = deletePerson;
module.exports.addPerson = addPerson;
module.exports.getPeople = getPeople;
