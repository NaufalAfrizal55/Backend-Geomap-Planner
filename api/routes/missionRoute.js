const express = require("express")
const { getAllmissions, 
        getMission, 
        createMission, 
        updateMission, 
        deleteMission, 
        deleteAllMission} = require("../controllers/missionController")
const router = express.Router()


router.get('/', getAllmissions)

router.get('/:id', getMission)

router.post('/', createMission)

router.patch('/:id', updateMission)

router.delete('/:id', deleteMission)

//DELETE ALL
router.delete('/', deleteAllMission)

module.exports = router