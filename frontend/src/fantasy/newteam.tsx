import "bootstrap/dist/css/bootstrap.min.css"
import { Box, Button, Divider, Modal, Typography, TextField } from "@mui/material"
import { AddPlayer } from "../cards/addPlayer";
import { useState } from "react";
import { Batters } from "./batters";
import { useSelectPlayer } from "../context/selectedPlayer";
import { Player } from "../cards/player";
import { Bowlers } from "./bowlers";
import { Keepers } from "./keepers";
import { Allrounder } from "./allrounder";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie"

interface Player {
    fullName: string,
    type: string,
    team: string,
    price: number
}
interface TokenPayload {
    id: string
}
export default function NewTeam() {
    const { firstPlayer, secondPlayer, thirdPlayer, fourthPlayer, fifthPlayer,
        sixthPlayer, seventhPlayer, eighthPlayer, ninthPlayer, tenthPlayer, elevenPlayer,
        twelvePlayer, thirteenPlayer, fourteenPlayer, fifteenPlayer, sixteenPlayer,
        updateCurrentPlayer, getTeamImage, numberOfPlayers } = useSelectPlayer();

    const [isBattersModalOpen, setIsBattersModalOpen] = useState(false);
    const [isBowlersModalOpen, setIsBowlersModalOpen] = useState(false);
    const [isKeepersModalOpen, setIsKeepersModalOpen] = useState(false);
    const [isAllroundersModalOpen, setIsAllroundersModalOpen] = useState(false);
    const [isTeamNameModalOpen, setIsTeamNameModalOpen] = useState(false);
    const [teamName, setTeamName] = useState("");

    const openTeamNameModal = () => setIsTeamNameModalOpen(true);
    const closeTeamNameModal = () => setIsTeamNameModalOpen(false);

    const openBattersModal = (playerNumber: number) => {
        updateCurrentPlayer(playerNumber);
        setIsBattersModalOpen(true);
    }
    const openBowlersModal = (playerNumber: number) => {
        updateCurrentPlayer(playerNumber);
        setIsBowlersModalOpen(true);
    }
    const openKeepersModal = (playerNumber: number) => {
        updateCurrentPlayer(playerNumber);
        setIsKeepersModalOpen(true);
    }
    const openAllroundersModal = (playerNumber: number) => {
        updateCurrentPlayer(playerNumber);
        setIsAllroundersModalOpen(true);
    }

    const handleSave = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (numberOfPlayers < 16) {
            console.log("Select at least 16 players");
            return;
        }
        const tokenExists = Cookies.get("token");
        if (!tokenExists) {
            console.log("User not logged in")
            return;
        }
        openTeamNameModal();

    }
    const handleTeamSave = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!teamName) {
            console.log("Team name is empty");
            return;
        }
        const userId: TokenPayload = jwtDecode(Cookies.get('token'));
        const inputs = {
            userId: userId.id,
            teamName: teamName,
            firstPlayer: firstPlayer,
            secondPlayer: secondPlayer,
            thirdPlayer: thirdPlayer,
            fourthPlayer: fourthPlayer,
            fifthPlayer: fifthPlayer,
            sixthPlayer: sixthPlayer,
            seventhPlayer: seventhPlayer,
            eighthPlayer: eighthPlayer,
            ninthPlayer: ninthPlayer,
            tenthPlayer: tenthPlayer,
            elevenPlayer: elevenPlayer,
            twelvePlayer: twelvePlayer,
            thirteenPlayer: thirteenPlayer,
            fourteenPlayer: fourteenPlayer,
            fifteenPlayer: fifteenPlayer,
            sixteenPlayer: sixteenPlayer
        };
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_URI + "playerteam/team", {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            if (!response.ok) {
                console.log(json.error)
            }
            if (response.ok) {
                console.log(json.message)
            }
        } catch (error) {
            console.log(error)
        }

    }


    const closeBattersModal = () => setIsBattersModalOpen(false);
    const closeBowlersModal = () => setIsBowlersModalOpen(false);
    const closeKeepersModal = () => setIsKeepersModalOpen(false);
    const closeAllroundersModal = () => setIsAllroundersModalOpen(false);


    return (
        <Box sx={{ margin: "5%" }}>
            <Box>
                <Typography sx={{ color: "blue", fontWeight: "bold", textAlign: "center", fontSize: "1.5em" }}>Select your team to get started({numberOfPlayers}/16)</Typography>
            </Box>
            <hr />
            <Typography sx={{ textAlign: "center" }}>Select 5 batters</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openBattersModal(1)} >
                    {!firstPlayer.fullName && <AddPlayer />}
                    {firstPlayer.fullName &&
                        <Player fullName={firstPlayer.fullName} price={firstPlayer.price} points={0} playerType="Batsman" image={getTeamImage(firstPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(2)}>
                    {!secondPlayer.fullName && <AddPlayer />}
                    {secondPlayer.fullName &&
                        <Player fullName={secondPlayer.fullName} price={secondPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(secondPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(3)}>
                    {!thirdPlayer.fullName && <AddPlayer />}
                    {thirdPlayer.fullName &&
                        <Player fullName={thirdPlayer.fullName} price={thirdPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(thirdPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(4)}>
                    {!fourthPlayer.fullName && <AddPlayer />}
                    {fourthPlayer.fullName &&
                        <Player fullName={fourthPlayer.fullName} price={fourthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fourthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(5)}>
                    {!fifthPlayer.fullName && <AddPlayer />}
                    {fifthPlayer.fullName &&
                        <Player fullName={fifthPlayer.fullName} price={fifthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fifthPlayer.team)} />}
                </Button>
            </Box>
            <Typography sx={{ textAlign: "center" }}>Select 5 bowlers</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openBowlersModal(6)}>
                    {!sixthPlayer.fullName && <AddPlayer />}
                    {sixthPlayer.fullName &&
                        <Player fullName={sixthPlayer.fullName} price={sixthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(sixthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(7)} >
                    {!seventhPlayer.fullName && <AddPlayer />}
                    {seventhPlayer.fullName &&
                        <Player fullName={seventhPlayer.fullName} price={seventhPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(seventhPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(8)}>
                    {!eighthPlayer.fullName && <AddPlayer />}
                    {eighthPlayer.fullName &&
                        <Player fullName={eighthPlayer.fullName} price={eighthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(eighthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(9)}>
                    {!ninthPlayer.fullName && <AddPlayer />}
                    {ninthPlayer.fullName &&
                        <Player fullName={ninthPlayer.fullName} price={ninthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(ninthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(10)}>
                    {!tenthPlayer.fullName && <AddPlayer />}
                    {tenthPlayer.fullName &&
                        <Player fullName={tenthPlayer.fullName} price={tenthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(tenthPlayer.team)} />}
                </Button>

            </Box>
            <Typography sx={{ textAlign: "center" }}>Select 4 allrounders</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openAllroundersModal(11)}>
                    {!elevenPlayer.fullName && <AddPlayer />}
                    {elevenPlayer.fullName &&
                        <Player fullName={elevenPlayer.fullName} price={elevenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(elevenPlayer.team)} />}
                </Button>
                <Button onClick={() => openAllroundersModal(12)} >
                    {!twelvePlayer.fullName && <AddPlayer />}
                    {twelvePlayer.fullName &&
                        <Player fullName={twelvePlayer.fullName} price={twelvePlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(twelvePlayer.team)} />}
                </Button>
                <Button onClick={() => openAllroundersModal(13)}>
                    {!thirteenPlayer.fullName && <AddPlayer />}
                    {thirteenPlayer.fullName &&
                        <Player fullName={thirteenPlayer.fullName} price={thirteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(thirteenPlayer.team)} />}
                </Button>
                <Button onClick={() => openAllroundersModal(14)}>
                    {!fourteenPlayer.fullName && <AddPlayer />}
                    {fourteenPlayer.fullName &&
                        <Player fullName={fourteenPlayer.fullName} price={fourteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fourteenPlayer.team)} />}
                </Button>

            </Box>
            <Typography sx={{ textAlign: "center" }}>Select 2 Wicket Keepers</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openKeepersModal(15)} >
                    {!fifteenPlayer.fullName && <AddPlayer />}
                    {fifteenPlayer.fullName &&
                        <Player fullName={fifteenPlayer.fullName} price={fifteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fifteenPlayer.team)} />}
                </Button>
                <Button onClick={() => openKeepersModal(16)}>
                    {!sixteenPlayer.fullName && <AddPlayer />}
                    {sixteenPlayer.fullName &&
                        <Player fullName={sixteenPlayer.fullName} price={sixteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(sixteenPlayer.team)} />}
                </Button>
            </Box>
            <Box sx={{ margin: "5%" }}>
                <Box >
                    <Button onClick={handleSave} fullWidth variant="outlined"
                        sx={{ backgroundColor: "blue", color: "white" }}>Save</Button>
                </Box>

            </Box>
            <Modal sx={{ overflow: "auto", width: "100%", backgroundColor: "gray", marginLeft: "auto", marginRight: "auto" }} open={isBattersModalOpen} onClose={closeBattersModal}>
                <div>
                    <Batters closeModal={closeBattersModal} />
                </div>
            </Modal>
            <Modal sx={{ overflow: "auto", width: "100%", backgroundColor: "blue", marginLeft: "auto", marginRight: "auto" }} open={isBowlersModalOpen} onClose={closeBowlersModal}>
                <div>
                    <Bowlers closeModal={closeBowlersModal} />
                </div>
            </Modal>
            <Modal sx={{ overflow: "auto", width: "100%", backgroundColor: "blue", marginLeft: "auto", marginRight: "auto" }} open={isKeepersModalOpen} onClose={closeKeepersModal}>
                <div>
                    <Keepers closeModal={closeKeepersModal} />
                </div>
            </Modal>
            <Modal sx={{ overflow: "auto", width: "100%", backgroundColor: "blue", marginLeft: "auto", marginRight: "auto" }} open={isAllroundersModalOpen} onClose={closeAllroundersModal}>
                <div>
                    <Allrounder closeModal={closeAllroundersModal} />
                </div>
            </Modal>
            <Modal sx={{ height: "80vh", width: "80%", marginLeft: "auto", marginRight: "auto" }} open={isTeamNameModalOpen} onClose={closeTeamNameModal}>
                <div>
                    <Box sx={{ backgroundColor: "darkgray", marginTop: "40%", }}>
                        <TextField size="small" sx={{ label: { color: "white" }, margin: "5%", padding: "5%" }} fullWidth name="teamName" onChange={(event) => setTeamName(event.target.value)} placeholder="Enter team name" />
                        <Button sx={{ backgroundColor: "blue", color: "white" }} fullWidth onClick={handleTeamSave}>Save</Button>
                    </Box>
                </div>
            </Modal>

        </Box>
    )
}