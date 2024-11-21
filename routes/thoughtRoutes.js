import express from 'express';
import Thought from '../models/Thought.js';
import User from '../models/User.js';

const router = express.Router();

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single thought by its _id
router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id).populate('reactions');
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST to create a new thought
router.post('/', async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    await newThought.save();

    const user = await User.findById(req.body.userId);
    user.thoughts.push(newThought._id);
    await user.save();

    res.status(201).json(newThought);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT to update a thought by its _id
router.put('/:id', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a thought by its _id
router.delete('/:id', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    // Remove this thought from user's thoughts
    await User.updateMany(
      { thoughts: deletedThought._id },
      { $pull: { thoughts: deletedThought._id } }
    );

    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST to create a reaction
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    thought.reactions.push(req.body);
    await thought.save();
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE to remove a reaction by its reactionId
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    thought.reactions = thought.reactions.filter(
      reaction => reaction.reactionId.toString() !== req.params.reactionId
    );
    await thought.save();
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
