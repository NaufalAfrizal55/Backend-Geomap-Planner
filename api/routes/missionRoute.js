const express = require("express")
const { getAllmissions, 
        getMission, 
        createMission, 
        updateMission, 
        deleteMission } = require("../controllers/missionController")
const router = express.Router()


router.get('/', getAllmissions)

router.get('/:id', getMission)

router.post('/', createMission)

router.patch('/:id', updateMission)

router.delete('/:id', deleteMission)

module.exports = router