import express from 'express';
import { get_all_notes, get_notes_by_id, create_note, update_note, delete_note } from '../controllers/notes_controllers.js';

const router = express.Router();

router.get('/', get_all_notes);
router.get('/:id', get_notes_by_id);
router.post('/', create_note);
router.put('/:id', update_note);
router.delete('/:id', delete_note);

export default router;