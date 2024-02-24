import "bootstrap/dist/css/bootstrap.min.css"
import { Box, Button, Divider, Modal, Typography } from "@mui/material"
import { AddPlayer } from "./addPlayer"
import { useState } from "react";
import { PlayersList } from "./playersList";
import { SelectPlayerProvider, useSelectPlayer } from "../context/selectedPlayer";
import { Player } from "./player";
interface Player {
    name: string,
    type: string,
    team: string,
    price: number
}
export default function PickTeam() {
    const { firstPlayer, secondPlayer, thirdPlayer, fourthPlayer, fifthPlayer,
        sixthPlayer, seventhPlayer, eighthPlayer, ninthPlayer, tenthPlayer, elevenPlayer,
        twelvePlayer, thirteenPlayer, fourteenPlayer, fifteenPlayer, sixteenPlayer,
        currentPlayer, updateCurrentPlayer, getTeamImage, numberOfPlayers } = useSelectPlayer();
    const batterColor = "blue";
    const bowlerColor = "green";
    const allRounderColor = "yellow";
    const keeperColor = "purple";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const openModal = (playerNumber: number) => {
        updateCurrentPlayer(playerNumber);
        // console.log(currentPlayer)
        setIsModalOpen(true);
    }


    const closeModal = () => setIsModalOpen(false);


    return (
        <Box sx={{ margin: "5%" }}>
            <Box>
                <Typography sx={{ color: "blue", fontWeight: "bold", textAlign: "center", fontSize: "1.5em" }}>Pick team</Typography>
            </Box>
            <hr />
            <Typography sx={{ textAlign: "center" }}>Pick 4 batters</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openModal(1)} >
                    {!firstPlayer.name && <AddPlayer playerColor={batterColor} />}
                    {firstPlayer.name &&
                        <Player name={firstPlayer.name} price={firstPlayer.price} points={0} playerType="Batsman" image={getTeamImage(firstPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(2)}>
                    {!secondPlayer.name && <AddPlayer playerColor={batterColor} />}
                    {secondPlayer.name &&
                        <Player name={secondPlayer.name} price={secondPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(secondPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(3)}>
                    {!thirdPlayer.name && <AddPlayer playerColor={batterColor} />}
                    {thirdPlayer.name &&
                        <Player name={thirdPlayer.name} price={thirdPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(thirdPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(4)}>
                    {!fourthPlayer.name && <AddPlayer playerColor={batterColor} />}
                    {fourthPlayer.name &&
                        <Player name={fourthPlayer.name} price={fourthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fourthPlayer.team)} />}
                </Button>

            </Box>
            <Typography sx={{ textAlign: "center" }}>Pick 4 Bowlers </Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openModal(6)}>
                    {!sixthPlayer.name && <AddPlayer playerColor={bowlerColor} />}
                    {sixthPlayer.name &&
                        <Player name={sixthPlayer.name} price={sixthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(sixthPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(7)} >
                    {!seventhPlayer.name && <AddPlayer playerColor={bowlerColor} />}
                    {seventhPlayer.name &&
                        <Player name={seventhPlayer.name} price={seventhPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(seventhPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(8)}>
                    {!eighthPlayer.name && <AddPlayer playerColor={bowlerColor} />}
                    {eighthPlayer.name &&
                        <Player name={eighthPlayer.name} price={eighthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(eighthPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(9)}>
                    {!ninthPlayer.name && <AddPlayer playerColor={bowlerColor} />}
                    {ninthPlayer.name &&
                        <Player name={ninthPlayer.name} price={ninthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(ninthPlayer.team)} />}
                </Button>

           </Box>
            <Typography sx={{ textAlign: "center" }}>Pick 2 allrounders</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openModal(11)}>
                    {!elevenPlayer.name && <AddPlayer playerColor={allRounderColor} />}
                    {elevenPlayer.name &&
                        <Player name={elevenPlayer.name} price={elevenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(elevenPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(12)} >
                    {!twelvePlayer.name && <AddPlayer playerColor={allRounderColor} />}
                    {twelvePlayer.name &&
                        <Player name={twelvePlayer.name} price={twelvePlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(twelvePlayer.team)} />}
                </Button>


            </Box>
            <Typography sx={{ textAlign: "center" }}>Pick 1 Wicket Keepers</Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openModal(15)} >
                    {!fifteenPlayer.name && <AddPlayer playerColor={keeperColor} />}
                    {fifteenPlayer.name &&
                        <Player name={fifteenPlayer.name} price={fifteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fifteenPlayer.team)} />}
                </Button>
            </Box>
            <Typography sx={{ textAlign: "center" }}>Substitutes</Typography>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5%" }}>
                <Button onClick={() => openModal(5)}>
                    {!fifthPlayer.name && <AddPlayer playerColor={batterColor} />}
                    {fifthPlayer.name &&
                        <Player name={fifthPlayer.name} price={fifthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fifthPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(10)}>
                    {!tenthPlayer.name && <AddPlayer playerColor={bowlerColor} />}
                    {tenthPlayer.name &&
                        <Player name={tenthPlayer.name} price={tenthPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(tenthPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(13)}>
                    {!thirteenPlayer.name && <AddPlayer playerColor={allRounderColor} />}
                    {thirteenPlayer.name &&
                        <Player name={thirteenPlayer.name} price={thirteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(thirteenPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(14)}>
                    {!fourteenPlayer.name && <AddPlayer playerColor={allRounderColor} />}
                    {fourteenPlayer.name &&
                        <Player name={fourteenPlayer.name} price={fourteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(fourteenPlayer.team)} />}
                </Button>
                <Button onClick={() => openModal(16)}>
                    {!sixteenPlayer.name && <AddPlayer playerColor={keeperColor} />}
                    {sixteenPlayer.name &&
                        <Player name={sixteenPlayer.name} price={sixteenPlayer.price}
                            points={0} playerType="Batsman" image={getTeamImage(sixteenPlayer.team)} />}
                </Button>
            </Box>
            <Box sx={{ margin: "5%" }}>
                <Box >
                    <Button fullWidth variant="outlined" sx={{ backgroundColor: "blue", color: "white" }}>Save</Button>
                </Box>

            </Box>
            <Modal sx={{ overflow: "auto" }} open={isModalOpen} onClose={closeModal}>
                <PlayersList closeModal={closeModal} />
            </Modal>

        </Box>
    )
}