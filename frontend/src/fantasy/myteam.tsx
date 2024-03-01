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
import { useFantasy } from "../context/fantasyFunctions";

interface Player {
    fullName: string,
    type: string,
    team: string,
    price: number
}
interface TokenPayload {
    id: string
}
interface PlayerDetails {
    fullName: string,
    playerType: string,
    team: string,
    price: number
}
interface MyTeamProps {
    team: {
        teamName: string,
        transfers: Number,
        balance: Number,
        userId: string,
        firstPlayer: PlayerDetails,
        secondPlayer: PlayerDetails,
        thirdPlayer: PlayerDetails,
        fourthPlayer: PlayerDetails,
        fifthPlayer: PlayerDetails,
        sixthPlayer: PlayerDetails,
        seventhPlayer: PlayerDetails,
        eighthPlayer: PlayerDetails,
        ninthPlayer: PlayerDetails,
        tenthPlayer: PlayerDetails,
        elevenPlayer: PlayerDetails,
        twelvePlayer: PlayerDetails,
        thirteenPlayer: PlayerDetails,
        fourteenPlayer: PlayerDetails,
        fifteenPlayer: PlayerDetails,
        sixteenPlayer: PlayerDetails,
    }
}
export const MyTeam: React.FC<MyTeamProps> = ({ team }) => {
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
                <Typography sx={{ color: "blue", fontWeight: "bold", textAlign: "center", fontSize: "1.5em" }}>{team.teamName}</Typography>
            </Box>
            <hr />
            <Typography sx={{ textAlign: "center" }}>Batters</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openBattersModal(1)} >
                    {!team.firstPlayer.fullName && <AddPlayer />}
                    {team.firstPlayer.fullName &&
                        <Player fullName={team.firstPlayer.fullName} price={team.firstPlayer.price} points={0} playerType={team.firstPlayer.playerType} image={getTeamImage(team.firstPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(2)}>
                    {!team.secondPlayer.fullName && <AddPlayer />}
                    {team.secondPlayer.fullName &&
                        <Player fullName={team.secondPlayer.fullName} price={team.secondPlayer.price}
                            points={0} playerType={team.secondPlayer.playerType} image={getTeamImage(team.secondPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(3)}>
                    {!team.thirdPlayer.fullName && <AddPlayer />}
                    {team.thirdPlayer.fullName &&
                        <Player fullName={team.thirdPlayer.fullName} price={team.thirdPlayer.price}
                            points={0} playerType={team.thirdPlayer.playerType} image={getTeamImage(team.thirdPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(4)}>
                    {!team.fourthPlayer.fullName && <AddPlayer />}
                    {team.fourthPlayer.fullName &&
                        <Player fullName={team.fourthPlayer.fullName} price={team.fourthPlayer.price}
                            points={0} playerType={team.fourthPlayer.playerType} image={getTeamImage(team.fourthPlayer.team)} />}
                </Button>

            </Box>
            <Typography sx={{ textAlign: "center" }}>Bowlers</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openBowlersModal(6)}>
                    {!team.sixthPlayer.fullName && <AddPlayer />}
                    {team.sixthPlayer.fullName &&
                        <Player fullName={team.sixthPlayer.fullName} price={team.sixthPlayer.price}
                            points={0} playerType={team.sixthPlayer.playerType} image={getTeamImage(team.sixthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(7)} >
                    {!team.seventhPlayer.fullName && <AddPlayer />}
                    {team.seventhPlayer.fullName &&
                        <Player fullName={team.seventhPlayer.fullName} price={team.seventhPlayer.price}
                            points={0} playerType={team.seventhPlayer.playerType} image={getTeamImage(team.seventhPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(8)}>
                    {!team.eighthPlayer.fullName && <AddPlayer />}
                    {team.eighthPlayer.fullName &&
                        <Player fullName={team.eighthPlayer.fullName} price={team.eighthPlayer.price}
                            points={0} playerType={team.eighthPlayer.playerType} image={getTeamImage(team.eighthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(9)}>
                    {!team.ninthPlayer.fullName && <AddPlayer />}
                    {team.ninthPlayer.fullName &&
                        <Player fullName={team.ninthPlayer.fullName} price={team.ninthPlayer.price}
                            points={0} playerType={team.ninthPlayer.playerType} image={getTeamImage(team.ninthPlayer.team)} />}
                </Button>


            </Box>
            <Typography sx={{ textAlign: "center" }}>Allrounders</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openAllroundersModal(11)}>
                    {!team.elevenPlayer.fullName && <AddPlayer />}
                    {team.elevenPlayer.fullName &&
                        <Player fullName={team.elevenPlayer.fullName} price={team.elevenPlayer.price}
                            points={0} playerType={team.elevenPlayer.playerType} image={getTeamImage(team.elevenPlayer.team)} />}
                </Button>
                <Button onClick={() => openAllroundersModal(12)} >
                    {!team.twelvePlayer.fullName && <AddPlayer />}
                    {team.twelvePlayer.fullName &&
                        <Player fullName={team.twelvePlayer.fullName} price={team.twelvePlayer.price}
                            points={0} playerType={team.twelvePlayer.playerType} image={getTeamImage(team.twelvePlayer.team)} />}
                </Button>


            </Box>
            <Typography sx={{ textAlign: "center" }}>Wicket Keeper</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openKeepersModal(15)} >
                    {!team.fifteenPlayer.fullName && <AddPlayer />}
                    {team.fifteenPlayer.fullName &&
                        <Player fullName={team.fifteenPlayer.fullName} price={team.fifteenPlayer.price}
                            points={0} playerType={team.fifteenPlayer.playerType} image={getTeamImage(team.fifteenPlayer.team)} />}
                </Button>


            </Box>
            <Typography sx={{ textAlign: "center" }}>Subs</Typography>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>

                <Button onClick={() => openKeepersModal(16)}>
                    {!team.sixteenPlayer.fullName && <AddPlayer />}
                    {team.sixteenPlayer.fullName &&
                        <Player fullName={team.sixteenPlayer.fullName} price={team.sixteenPlayer.price}
                            points={0} playerType={team.sixteenPlayer.playerType} image={getTeamImage(team.sixteenPlayer.team)} />}
                </Button>
                <Button onClick={() => openBattersModal(5)}>
                    {!team.fifthPlayer.fullName && <AddPlayer />}
                    {team.fifthPlayer.fullName &&
                        <Player fullName={team.fifthPlayer.fullName} price={team.fifthPlayer.price}
                            points={0} playerType={team.fifthPlayer.playerType} image={getTeamImage(team.fifthPlayer.team)} />}
                </Button>
                <Button onClick={() => openBowlersModal(10)}>
                    {!team.tenthPlayer.fullName && <AddPlayer />}
                    {team.tenthPlayer.fullName &&
                        <Player fullName={team.tenthPlayer.fullName} price={team.tenthPlayer.price}
                            points={0} playerType={team.tenthPlayer.playerType} image={getTeamImage(team.tenthPlayer.team)} />}
                </Button>
                <Button onClick={() => openAllroundersModal(14)}>
                    {!team.fourteenPlayer.fullName && <AddPlayer />}
                    {team.fourteenPlayer.fullName &&
                        <Player fullName={team.fourteenPlayer.fullName} price={team.fourteenPlayer.price}
                            points={0} playerType={team.fourteenPlayer.playerType} image={getTeamImage(team.fourteenPlayer.team)} />}
                </Button>
                <Button onClick={() => openAllroundersModal(13)}>
                    {!team.thirteenPlayer.fullName && <AddPlayer />}
                    {team.thirteenPlayer.fullName &&
                        <Player fullName={team.thirteenPlayer.fullName} price={team.thirteenPlayer.price}
                            points={0} playerType={team.thirteenPlayer.playerType} image={getTeamImage(team.thirteenPlayer.team)} />}
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