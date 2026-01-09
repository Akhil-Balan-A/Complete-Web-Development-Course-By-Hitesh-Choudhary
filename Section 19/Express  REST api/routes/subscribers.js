const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// ----------------------------
// GET ALL SUBSCRIBERS
// ----------------------------
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ----------------------------
// GET ONE SUBSCRIBER
// ----------------------------
router.get("/:id", getSubscriber, (req, res) => {
  res.json(res.subscriber);
});

// ----------------------------
// CREATE NEW SUBSCRIBER
// ----------------------------
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ----------------------------
// UPDATE SUBSCRIBER (PARTIAL, PATCH)
// ----------------------------
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;   // FIXED ✔
  }

  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel;  // FIXED ✔
  }

  try {
    const updatedSubscriber = await res.subscriber.save(); // FIXED ✔ await added
    res.json(updatedSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ----------------------------
// DELETE SUBSCRIBER
// ----------------------------
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.deleteOne(); // FIXED remove → deleteOne
    res.json({ message: "Subscriber deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ----------------------------
// MIDDLEWARE: GET SUBSCRIBER BY ID
// ----------------------------
async function getSubscriber(req, res, next) {
  let subscriber;

  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
